// Blogs listing service - handles blog listing data and operations
import * as XLSX from 'xlsx';

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  image: string
  tags: string[]
  category: string
  readTime: number
  featured: boolean
}

export interface BlogsPageData {
  allBlogs: BlogPost[]
  featuredBlogs: BlogPost[]
  categories: string[]
  tags: string[]
  totalCount: number
}

export interface BlogsFilterOptions {
  category?: string
  tag?: string
  search?: string
  page?: number
  limit?: number
}

// Function to parse Excel data
function parseExcel(buffer: ArrayBuffer): BlogPost[] {
  try {
    const workbook = XLSX.read(buffer, { type: 'array' });
    
    // Get the first sheet
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    
    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    // Check if we have data
    if (!jsonData || jsonData.length <= 1) {
      console.log('No data found in Excel file');
      return [];
    }
    
    // Find the Content column index from headers
    const headers = jsonData[0] as string[];
    let contentColumnIndex = headers.findIndex(header => 
      header && header.toLowerCase().includes('content')
    );
    
    // Fallback: if not found by name, try column F (index 5)
    if (contentColumnIndex === -1 && headers.length > 5) {
      contentColumnIndex = 5; // Column F
      console.log('Content column not found by name, using column F (index 5)');
    }
    
    console.log('Excel headers:', headers);
    console.log('Content column found at index:', contentColumnIndex);
    console.log('Content column header:', contentColumnIndex >= 0 ? headers[contentColumnIndex] : 'NOT FOUND');
    
    // Skip header row and process data
    const processedPosts = (jsonData as any[]).slice(1).map((row: any[], index: number): BlogPost | null => {
      const title = row[0] || '';
      const url = row[1] || '';
      const focusArea = row[2] || 'General';
      const metaKeywords = row[3] || '';
      const metaDescription = row[4] || '';
      const excelContent = contentColumnIndex >= 0 ? (row[contentColumnIndex] || '') : ''; // Get content from found column
      
      console.log(`Row ${index + 1} - Title: ${title}, Content: ${excelContent ? 'HAS CONTENT' : 'NO CONTENT'}`);
      
      // Skip empty rows
      if (!title || !url) return null;
      
      // Convert meta keywords to tags array
      const tags = metaKeywords ? metaKeywords.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag) : [];
      
      // Generate a basic content structure
      const content = `
        <div class="prose prose-lg max-w-none">
          <p>${metaDescription}</p>
          
          ${excelContent ? `
          <div class="excel-content">
            ${excelContent}
          </div>
          ` : ''}
          
          <h2>Overview</h2>
          <p>This article covers important topics related to ${title.toLowerCase()}. Our team at Oxmaint AI provides comprehensive insights into this subject.</p>
          
          ${excelContent ? `
          <h2>Detailed Information</h2>
          <div class="detailed-content">
            ${excelContent}
          </div>
          ` : `
          <h2>Key Points</h2>
          <ul>
            <li>Expert analysis and insights</li>
            <li>Industry best practices</li>
            <li>Practical implementation strategies</li>
            <li>Real-world applications</li>
          </ul>
          `}
          
          <h2>Why This Matters</h2>
          <p>Understanding ${focusArea.toLowerCase()} is crucial for modern businesses looking to optimize their operations and stay competitive in today's market.</p>
          
          <h2>Get Expert Help</h2>
          <p>Contact Oxmaint AI today to learn how we can help you implement these strategies and improve your operations. Our team of experts is ready to assist you in achieving your business goals.</p>
        </div>
      `;
      
      return {
        id: (index + 1).toString(),
        title,
        slug: url,
        excerpt: metaDescription,
        content,
        author: "Oxmaint AI Team",
        publishedAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
        image: "/portal-logo/logo.png",
        tags,
        category: focusArea,
        readTime: Math.max(3, Math.ceil(metaDescription.length / 200) + 2), // Estimate read time
        featured: index < 3 // Make first 3 featured
      };
    });
    
    // Filter out null entries and return
    return processedPosts.filter((post): post is BlogPost => post !== null);
    
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    return []; // Return empty array on error
  }
}

// Load Excel data
let blogPosts: BlogPost[] = [];

// Function to load blogs from Excel
async function loadBlogsFromExcel(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/blogs.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    return parseExcel(arrayBuffer);
  } catch (error) {
    console.error('Error loading blogs from Excel:', error);
    return [];
  }
}

// Initialize blogs data
if (typeof window !== 'undefined') {
  // Client-side loading
  loadBlogsFromExcel().then(blogs => {
    blogPosts = blogs;
  });
} else {
  // Server-side loading (for SSR)
  try {
    const fs = require('fs');
    const path = require('path');
    const excelPath = path.join(process.cwd(), 'public', 'blogs.xlsx');
    const buffer = fs.readFileSync(excelPath);
    const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    blogPosts = parseExcel(arrayBuffer);
  } catch (error) {
    console.error('Error loading blogs from Excel on server:', error);
    blogPosts = [];
  }
}

export class BlogsService {
  private static readonly DEFAULT_PAGE_SIZE = 12

  static async getBlogsPageData(): Promise<BlogsPageData> {
    const allBlogs = await this.getAllBlogs()
    const featuredBlogs = await this.getFeaturedBlogs()
    
    // Extract unique categories and tags
    const categories = [...new Set(allBlogs.map(blog => blog.category))].sort()
    const tags = [...new Set(allBlogs.flatMap(blog => blog.tags))].sort()
    
    return {
      allBlogs,
      featuredBlogs,
      categories,
      tags,
      totalCount: allBlogs.length
    }
  }

  static async getAllBlogs(): Promise<BlogPost[]> {
    return blogPosts.length > 0 ? blogPosts : await loadBlogsFromExcel()
  }

  static getAllBlogsSync(): BlogPost[] {
    return blogPosts
  }

  static async getFeaturedBlogs(): Promise<BlogPost[]> {
    const blogs = await this.getAllBlogs()
    return blogs.filter(post => post.featured)
  }

  static getFeaturedBlogsSync(): BlogPost[] {
    return blogPosts.filter(post => post.featured)
  }

  static async getFilteredBlogs(options: BlogsFilterOptions = {}): Promise<{
    blogs: BlogPost[]
    totalCount: number
    currentPage: number
    totalPages: number
  }> {
    let blogs = await this.getAllBlogs()
    
    // Apply filters cumulatively
    if (options.category) {
      blogs = blogs.filter(blog => blog.category.toLowerCase() === options.category!.toLowerCase())
    }
    
    if (options.tag) {
      blogs = blogs.filter(blog => 
        blog.tags.some(tag => tag.toLowerCase() === options.tag!.toLowerCase())
      )
    }
    
    if (options.search) {
      const lowercaseQuery = options.search.toLowerCase()
      blogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(lowercaseQuery) ||
        blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
        blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    }
    
    const totalCount = blogs.length
    const currentPage = options.page || 1
    const limit = options.limit || this.DEFAULT_PAGE_SIZE
    const totalPages = Math.ceil(totalCount / limit)
    
    // Apply pagination
    const startIndex = (currentPage - 1) * limit
    const paginatedBlogs = blogs.slice(startIndex, startIndex + limit)
    
    return {
      blogs: paginatedBlogs,
      totalCount,
      currentPage,
      totalPages
    }
  }

  // Synchronous methods for server-side usage
  static getBlogsPageDataSync(): BlogsPageData {
    const allBlogs = this.getAllBlogsSync()
    const featuredBlogs = this.getFeaturedBlogsSync()
    
    const categories = [...new Set(allBlogs.map(blog => blog.category))].sort()
    const tags = [...new Set(allBlogs.flatMap(blog => blog.tags))].sort()
    
    return {
      allBlogs,
      featuredBlogs,
      categories,
      tags,
      totalCount: allBlogs.length
    }
  }

  static getFilteredBlogsSync(options: BlogsFilterOptions = {}): {
    blogs: BlogPost[]
    totalCount: number
    currentPage: number
    totalPages: number
  } {
    let blogs = this.getAllBlogsSync()
    
    // Apply filters cumulatively
    if (options.category) {
      blogs = blogs.filter(blog => blog.category.toLowerCase() === options.category!.toLowerCase())
    }
    
    if (options.tag) {
      blogs = blogs.filter(blog => 
        blog.tags.some(tag => tag.toLowerCase() === options.tag!.toLowerCase())
      )
    }
    
    if (options.search) {
      const lowercaseQuery = options.search.toLowerCase()
      blogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(lowercaseQuery) ||
        blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
        blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    }
    
    const totalCount = blogs.length
    const currentPage = options.page || 1
    const limit = options.limit || this.DEFAULT_PAGE_SIZE
    const totalPages = Math.ceil(totalCount / limit)
    
    // Apply pagination
    const startIndex = (currentPage - 1) * limit
    const paginatedBlogs = blogs.slice(startIndex, startIndex + limit)
    
    return {
      blogs: paginatedBlogs,
      totalCount,
      currentPage,
      totalPages
    }
  }

  // Additional utility methods
  static async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const blogs = await this.getAllBlogs()
    return blogs.find(post => post.slug === slug) || null
  }

  static getBlogBySlugSync(slug: string): BlogPost | null {
    return blogPosts.find(post => post.slug === slug) || null
  }

  static async getLatestBlogs(limit: number = 3): Promise<BlogPost[]> {
    const blogs = await this.getAllBlogs()
    return blogs
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit)
  }

  static async getBlogsByCategory(category: string): Promise<BlogPost[]> {
    const blogs = await this.getAllBlogs()
    return blogs.filter(post => post.category.toLowerCase() === category.toLowerCase())
  }

  static async getBlogsByTag(tag: string): Promise<BlogPost[]> {
    const blogs = await this.getAllBlogs()
    return blogs.filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  }

  static async searchBlogs(query: string): Promise<BlogPost[]> {
    const blogs = await this.getAllBlogs()
    const lowercaseQuery = query.toLowerCase()
    return blogs.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }
}
// Blog data service - handles blog data from Excel/static data
import * as XLSX from 'xlsx';

export interface BlogPost {
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

// Function to parse Excel data
function parseExcel(buffer: ArrayBuffer): BlogPost[] {
  const workbook = XLSX.read(buffer, { type: 'array' });
  
  // Get the first sheet
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  
  // Convert to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  // Skip header row and process data
  return (jsonData as any[]).slice(1).map((row: any[], index: number) => {
    const title = row[0] || '';
    const url = row[1] || '';
    const focusArea = row[2] || 'General';
    const metaKeywords = row[3] || '';
    const metaDescription = row[4] || '';
    const excelContent = row[5] || ''; // Read content from "Content" column (index 5)
    
    // Skip empty rows
    if (!title || !url) return null;
    
    // Convert meta keywords to tags array
    const tags = metaKeywords ? metaKeywords.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag) : [];
    
    // Create HTML structure with title, meta keywords, description, and Excel content
    const content = `
      <div class="prose prose-lg max-w-none">
        <div class="blog-header mb-6">
          <h1 class="text-3xl font-bold mb-4">${title}</h1>
          
          ${metaDescription ? `
            <div class="blog-description mb-4">
              <p class="text-lg text-gray-700">${metaDescription}</p>
            </div>
          ` : ''}
          
          ${metaKeywords ? `
            <div class="blog-keywords mb-4">
              <div class="flex flex-wrap gap-2">
                ${tags.map((tag: string) => '<span class="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">' + tag + '</span>').join('')}
              </div>
            </div>
          ` : ''}
        </div>
        
        <div class="blog-content">
          <h2><strong>Overview</strong></h2>
          ${excelContent}
          
          <h2>Get Expert Help</h2>
          <p>Contact Oxmaint AI today to learn how we can help you implement these strategies and improve your operations. Our team of experts is ready to assist you in achieving your business goals.</p>
        </div>
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
      readTime: Math.max(3, Math.ceil((excelContent || metaDescription).length / 200) + 2), // Updated read time calculation
      featured: index < 3 // Make first 3 featured
    };
  }).filter((post): post is BlogPost => post !== null); // Filter out null entries
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

// Initialize blogs data with better error handling
if (typeof window !== 'undefined') {
  // Client-side loading
  loadBlogsFromExcel().then(blogs => {
    if (blogs.length > 0) {
      blogPosts = blogs;
    }
  }).catch(error => {
    console.error('Client-side blog loading failed:', error);
  });
} else {
  // Server-side loading (for SSR/SSG)
  try {
    const fs = require('fs');
    const path = require('path');
    const excelPath = path.join(process.cwd(), 'public', 'blogs.xlsx');
    
    if (fs.existsSync(excelPath)) {
      const buffer = fs.readFileSync(excelPath);
      const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
      blogPosts = parseExcel(arrayBuffer);
      console.log(`Loaded ${blogPosts.length} blogs from Excel on server`);
    } else {
      console.warn('blogs.xlsx not found in public folder');
    }
  } catch (error) {
    console.error('Error loading blogs from Excel on server:', error);
    blogPosts = [];
  }
}

export class BlogService {
  static getAllBlogs(): BlogPost[] {
    // For static generation, ensure data is loaded
    if (blogPosts.length === 0 && typeof window === 'undefined') {
      // Server-side: try to load synchronously
      try {
        const fs = require('fs');
        const path = require('path');
        const excelPath = path.join(process.cwd(), 'public', 'blogs.xlsx');
        if (fs.existsSync(excelPath)) {
          const buffer = fs.readFileSync(excelPath);
          const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
          blogPosts = parseExcel(arrayBuffer);
          console.log(`Loaded ${blogPosts.length} blogs synchronously`);
        }
      } catch (error) {
        console.error('Error loading blogs synchronously:', error);
      }
    }
    return blogPosts
  }

  static getAllBlogsSync(): BlogPost[] {
    return this.getAllBlogs()
  }

  static getBlogBySlug(slug: string): BlogPost | null {
    const blogs = this.getAllBlogs()
    return blogs.find(post => post.slug === slug) || null
  }

  static getFeaturedBlogs(): BlogPost[] {
    return blogPosts.filter(post => post.featured)
  }

  static getFeaturedBlogsSync(): BlogPost[] {
    return blogPosts.filter(post => post.featured)
  }

  static getLatestBlogs(limit: number = 3): BlogPost[] {
    return blogPosts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit)
  }

  static getBlogsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
  }

  static getBlogsByTag(tag: string): BlogPost[] {
    return blogPosts.filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  }

  static searchBlogs(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase()
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }
}
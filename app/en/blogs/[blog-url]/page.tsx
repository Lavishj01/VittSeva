import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import {BlogService} from './_services/blogService'
import {
  BlogHeader,
  LeftSidebar,
  BlogContent,
  RightSidebar,
  LatestBlogsCarousel,
  TeamNote
} from './_components'

interface BlogPageProps {
  params: Promise<{
    'blog-url': string
  }>
}

export async function generateStaticParams() {
  try {
    const blogs = BlogService.getAllBlogs()
    console.log(`Generating static params for ${blogs.length} blogs`)
    
    return blogs.map((blog) => ({
      'blog-url': blog.slug,
    }))
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params
    const slug = resolvedParams['blog-url']
    const blog = BlogService.getBlogBySlug(slug)

    if (!blog) {
      return {
        title: 'Blog Not Found | Oxmaint AI',
        description: 'The requested blog post could not be found.'
      }
    }

    return {
      title: `${blog.title} | Oxmaint AI`,
      description: blog.excerpt,
      keywords: blog.tags.join(', '),
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        images: [blog.image],
        type: 'article',
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt,
        authors: [blog.author],
        tags: blog.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.excerpt,
        images: [blog.image],
      }
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog | Oxmaint AI',
      description: 'Blog content from Oxmaint AI'
    }
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  try {
    const resolvedParams = await params
    const slug = resolvedParams['blog-url']
    
    // Get the blog post
    const blog = BlogService.getBlogBySlug(slug)
    
    if (!blog) {
      notFound()
    }

    // Get latest blogs, excluding current blog
    const latestBlogs = BlogService.getLatestBlogs(6).filter(b => b.id !== blog.id)

    return (
      <div className="min-h-screen bg-background" style={{ colorScheme: 'light' }}>
        {/* Blog Header */}
        <div className="mt-20">
          <BlogHeader
            title={blog.title}
            author={blog.author}
            publishedAt={blog.publishedAt}
            readTime={blog.readTime}
            category={blog.category}
          />
        </div>
        
        {/* Main Content - 1:2:1 Ratio Layout */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar - 3 columns (1 part) */}
            <div className="lg:col-span-3">
              <LeftSidebar />
            </div>

            {/* Main Content - 6 columns (2 parts) */}
            <div className="lg:col-span-6">
              <BlogContent blog={blog} />
            </div>

            {/* Right Sidebar - 3 columns (1 part) */}
            <div className="lg:col-span-3">
              <RightSidebar />
            </div>
          </div>
        </div>

        {/* Latest Blogs Carousel */}
        {latestBlogs.length > 0 && (
          <LatestBlogsCarousel blogs={latestBlogs} />
        )}

        {/* Team Note */}
        <TeamNote />
      </div>
    )
  } catch (error) {
    console.error('Error in BlogPage:', error)
    notFound()
  }
}
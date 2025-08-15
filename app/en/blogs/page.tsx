'use client'

import { useState, useEffect } from 'react'
import { BlogsService, BlogsFilterOptions } from './_services/blogsService'
import { BlogPost } from './[blog-url]/_services/blogService'
import {
  BlogsHeader,
  FeaturedBlogs,
  BlogFilters,
  BlogGrid,
  Pagination
} from './_components'

export default function BlogsPage() {
  const [pageData, setPageData] = useState<{
    allBlogs: BlogPost[]
    featuredBlogs: BlogPost[]
    categories: string[]
    tags: string[]
    totalCount: number
  } | null>(null)
  
  const [filteredData, setFilteredData] = useState<{
    blogs: BlogPost[]
    totalCount: number
    currentPage: number
    totalPages: number
  } | null>(null)
  
  const [isLoading, setIsLoading] = useState(true)
  const [currentFilters, setCurrentFilters] = useState<BlogsFilterOptions>({})

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        console.log('Starting to load blog data...')
        
        // Use async methods for proper client-side loading
        const data = await BlogsService.getBlogsPageData()
        console.log('Blog data loaded successfully, count:', data.totalCount)
        
        setPageData(data)
        
        // Load initial filtered data
        const filtered = await BlogsService.getFilteredBlogs()
        console.log('Filtered data loaded successfully, count:', filtered.totalCount)
        setFilteredData(filtered)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading blogs data:', error)
        
        // Fallback: try sync methods with retries
        let retryCount = 0
        const maxRetries = 15
        
        const tryLoadDataSync = () => {
          try {
            const data = BlogsService.getBlogsPageDataSync()
            console.log('Sync blog data loaded, count:', data.totalCount)
            
            if (data.totalCount === 0 && retryCount < maxRetries) {
              retryCount++
              console.log(`Retrying sync data load, attempt ${retryCount}/${maxRetries}`)
              setTimeout(tryLoadDataSync, 300)
            } else {
              setPageData(data)
              
              // Load initial filtered data
              const filtered = BlogsService.getFilteredBlogsSync()
              console.log('Sync filtered data loaded, count:', filtered.totalCount)
              setFilteredData(filtered)
              setIsLoading(false)
            }
          } catch (syncError) {
            console.error('Sync data loading also failed:', syncError)
            setIsLoading(false)
          }
        }
        
        tryLoadDataSync()
      }
    }

    loadData()
  }, [])

  // Handle filter changes
  const handleFilterChange = async (filters: {
    category?: string
    tag?: string
    search?: string
  }) => {
    const newFilters = { ...filters, page: 1 } // Reset to first page when filters change
    setCurrentFilters(newFilters)
    
    try {
      // Try async first, fallback to sync
      let filtered
      try {
        filtered = await BlogsService.getFilteredBlogs(newFilters)
      } catch {
        filtered = BlogsService.getFilteredBlogsSync(newFilters)
      }
      setFilteredData(filtered)
    } catch (error) {
      console.error('Error filtering blogs:', error)
    }
  }

  // Handle page changes
  const handlePageChange = async (page: number) => {
    const newFilters = { ...currentFilters, page }
    setCurrentFilters(newFilters)
    
    try {
      // Try async first, fallback to sync
      let filtered
      try {
        filtered = await BlogsService.getFilteredBlogs(newFilters)
      } catch {
        filtered = BlogsService.getFilteredBlogsSync(newFilters)
      }
      setFilteredData(filtered)
      
      // Scroll to top of results
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Error changing page:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background" style={{ colorScheme: 'light' }}>
      {/* Header */}
      <div className="mt-20">
        <BlogsHeader totalCount={pageData?.totalCount || 0} />
      </div>

      {/* Featured Blogs */}
      {pageData?.featuredBlogs && pageData.featuredBlogs.length > 0 && (
        <FeaturedBlogs blogs={pageData.featuredBlogs} />
      )}

      {/* Filters */}
      {pageData && (
        <BlogFilters
          categories={pageData.categories}
          tags={pageData.tags}
          onFilterChange={handleFilterChange}
        />
      )}

      {/* Main Content - Full width layout */}
      <main className="min-h-[600px]">
        <BlogGrid 
          blogs={filteredData?.blogs || []} 
          isLoading={isLoading}
        />

        {/* Pagination */}
        {filteredData && filteredData.totalPages > 1 && (
          <div className="container mx-auto px-4">
            <Pagination
              currentPage={filteredData.currentPage}
              totalPages={filteredData.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </main>

      {/* Results Summary */}
      {filteredData && !isLoading && (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-500">
            Showing {filteredData.blogs.length} of {filteredData.totalCount} articles
            {currentFilters.category && (
              <span> in "{currentFilters.category}"</span>
            )}
            {currentFilters.tag && (
              <span> tagged with "{currentFilters.tag}"</span>
            )}
            {currentFilters.search && (
              <span> matching "{currentFilters.search}"</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

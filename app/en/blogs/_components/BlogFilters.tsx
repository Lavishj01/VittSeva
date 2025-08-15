'use client'

import { useState } from 'react'

interface BlogFiltersProps {
  categories: string[]
  tags: string[]
  onFilterChange: (filters: {
    category?: string
    tag?: string
    search?: string
  }) => void
}

export default function BlogFilters({ categories, tags, onFilterChange }: BlogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllTags, setShowAllTags] = useState(false)

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category)
    onFilterChange({
      category: category || undefined,
      tag: activeTag || undefined,
      search: searchQuery || undefined
    })
  }

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag)
    onFilterChange({
      category: activeCategory || undefined,
      tag: tag || undefined,
      search: searchQuery || undefined
    })
  }

  const handleSearchChange = (search: string) => {
    setSearchQuery(search)
    onFilterChange({
      category: activeCategory || undefined,
      tag: activeTag || undefined,
      search: search || undefined
    })
  }

  const clearFilters = () => {
    setActiveCategory(null)
    setActiveTag(null)
    setSearchQuery('')
    onFilterChange({})
  }

  const hasActiveFilters = activeCategory || activeTag || searchQuery

  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="mt-6 space-y-4">
          {/* Categories */}
          {categories.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    !activeCategory
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {(showAllCategories ? categories : categories.slice(0, 10)).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                {categories.length > 10 && (
                  <button
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-50 text-blue-600 hover:bg-blue-50 border border-blue-200"
                  >
                    {showAllCategories ? 'Show Less' : `Load All (${categories.length})`}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleTagChange(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    !activeTag
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All Tags
                </button>
                {(showAllTags ? tags : tags.slice(0, 10)).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                      activeTag === tag
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {tags.length > 10 && (
                  <button
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 bg-gray-50 text-purple-600 hover:bg-purple-50 border border-purple-200"
                  >
                    {showAllTags ? 'Show Less' : `Load All (${tags.length})`}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
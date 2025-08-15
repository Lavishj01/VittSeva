'use client'

interface BlogsHeaderProps {
  totalCount: number
}

export default function BlogsHeader({ totalCount }: BlogsHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Insights, tips, and expert knowledge from the Oxmaint AI team. 
            Stay updated with the latest in AI, maintenance optimization, and industry best practices.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {totalCount} articles available
          </div>
        </div>
      </div>
    </div>
  )
}
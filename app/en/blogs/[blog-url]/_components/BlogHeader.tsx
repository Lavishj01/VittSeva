"use client"

import { motion } from "framer-motion"
import { Calendar, User, ChevronRight, Home } from "lucide-react"
import Link from "next/link"

interface BlogHeaderProps {
  title: string
  author: string
  publishedAt: string
  readTime: number
  category: string
}

export default function BlogHeader({ 
  title, 
  author, 
  publishedAt, 
  readTime,
  category 
}: BlogHeaderProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-b border-primary/10">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link 
            href="/blogs" 
            className="hover:text-primary transition-colors"
          >
            Blogs
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link 
            href={`/blogs?category=${category.toLowerCase()}`}
            className="hover:text-primary transition-colors"
          >
            {category}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Current Article</span>
        </motion.nav>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-center"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
            {category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-center"
        >
          {title}
        </motion.h1>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6 text-muted-foreground justify-center"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">by <span className="font-medium text-primary">{author}</span></span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formatDate(publishedAt)}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm">{readTime} min read</span>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </div>
  )
}
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, Tag, Share2, Bookmark } from "lucide-react"
import { BlogPost } from "../_services/blogService"

interface BlogContentProps {
  blog: BlogPost
}

export default function BlogContent({ blog }: BlogContentProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const handleBookmark = () => {
    // Add to bookmarks functionality
    console.log('Bookmark added')
  }

  return (
    <div className="space-y-8">
      {/* Blog Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      {/* Article Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime} min read</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-2">
              {blog.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                  +{blog.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookmark}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
          >
            <Bookmark className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* Blog Excerpt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20"
      >
        <h2 className="text-xl font-semibold text-foreground mb-3">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">{blog.excerpt}</p>
      </motion.div>

      {/* Blog Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:p-4 prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-primary-foreground text-center"
      >
        <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Operations?</h3>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Discover how Oxmaint AI can revolutionize your maintenance operations with cutting-edge artificial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="mailto:contact@oxmaint.ai?subject=Demo Request"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Schedule a Demo
          </motion.a>
          <motion.a
            href="tel:+18005556962"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Talk to Expert
          </motion.a>
        </div>
      </motion.div>

      {/* Last Updated */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-sm text-muted-foreground pt-6 border-t border-border"
      >
        Last updated: {new Date(blog.updatedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </motion.div>
    </div>
  )
}
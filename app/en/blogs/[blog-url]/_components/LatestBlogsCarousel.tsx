"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BlogPost } from "../_services/blogService"

interface LatestBlogsCarouselProps {
  blogs: BlogPost[]
}

export default function LatestBlogsCarousel({ blogs }: LatestBlogsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const blogsPerPage = 3
  const totalPages = Math.ceil(blogs.length / blogsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentBlogs = () => {
    const start = currentIndex * blogsPerPage
    return blogs.slice(start, start + blogsPerPage)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, insights, and innovations in AI-powered maintenance solutions.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              initial={false}
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex"
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-6 px-4">
                    {blogs
                      .slice(pageIndex * blogsPerPage, (pageIndex + 1) * blogsPerPage)
                      .map((blog, blogIndex) => (
                        <motion.article
                          key={blog.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: blogIndex * 0.1 }}
                          className="group bg-background rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                          {/* Blog Image */}
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          {/* Blog Content */}
                          <div className="p-6">
                            {/* Meta Info */}
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(blog.publishedAt)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{blog.readTime} min read</span>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {blog.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                              {blog.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {blog.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Read More Link */}
                            <Link
                              href={`/blogs/${blog.slug}`}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                            >
                              <span>Read Article</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </motion.article>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary/30 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary/30 transition-colors shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
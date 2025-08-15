import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Oxmaint AI - Insights, Tips & Expert Knowledge',
  description: 'Stay updated with the latest insights, tips, and expert knowledge from the Oxmaint AI team. Discover articles about AI, maintenance optimization, and industry best practices.',
  keywords: 'AI, maintenance optimization, insights, tips, expert knowledge, Oxmaint AI, blog, articles',
  openGraph: {
    title: 'Blog | Oxmaint AI',
    description: 'Expert insights and knowledge from the Oxmaint AI team',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Oxmaint AI',
    description: 'Expert insights and knowledge from the Oxmaint AI team',
  }
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
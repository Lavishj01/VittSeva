import { Metadata } from 'next'
import { 
  Hero,
  About,
  Benefits,
  TestimonialsSection,
  CTASection
} from './_components'

export const metadata: Metadata = {
  title: 'Accounting & Tax Filing Services | Professional Financial Solutions',
  description: 'Comprehensive accounting and tax filing services for individuals and businesses. Expert bookkeeping, tax planning, preparation, and compliance solutions.',
  keywords: 'accounting, tax filing, bookkeeping, tax planning, financial reporting, compliance, business accounting, individual tax returns',
  openGraph: {
    title: 'Professional Accounting & Tax Filing Services',
    description: 'Streamline your finances with our expert accounting and tax filing services. Personalized solutions for individuals and businesses.',
    type: 'website',
  }
}

export default function AccountingTaxFilingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <Hero />
        <About />
        <Benefits />
        <TestimonialsSection />
        <CTASection />
      </div>
    </main>
  )
}

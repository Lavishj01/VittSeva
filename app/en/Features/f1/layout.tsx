import Navigation from "@/components/Navigation"
import Footer from "./_components/Footer"

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
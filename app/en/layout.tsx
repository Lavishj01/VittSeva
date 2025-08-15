import Navigation from "@/components/Navigation"
import Footer from "./(landing)/_components/Footer"

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
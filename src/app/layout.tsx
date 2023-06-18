import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Nextjs Shadcn-ui ',
  description: 'Nextjs Shadcn-ui Datatable test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">
      <Navbar/> 
      {children}
      </body>
    </html>
  )
}

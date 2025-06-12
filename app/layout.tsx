import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
        {/* Add other meta tags as needed */}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

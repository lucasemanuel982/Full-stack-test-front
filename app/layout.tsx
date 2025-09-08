import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'User Data Dashboard',
  description: 'Dashboard para visualização de dados de usuários',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          as="style"
          href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900"
        />
      </head>
      <body className="relative flex size-full min-h-screen flex-col bg-dark-bg dark group/design-root overflow-x-hidden" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

import '../styles/global.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'CardsEditor',
  icons: {
    icon: '/images/profile.png'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

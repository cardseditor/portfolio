import '../styles/global.css'

export const metadata = {
  title: 'CardsEditor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" />
      </head>
      <body>{children}</body>
    </html>
  )
}

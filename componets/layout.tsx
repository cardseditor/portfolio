import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

const name = 'CardsEditor'
export const siteTitle = name

interface LayoutProps {
  children: ReactNode
  home?: boolean
}

export default function Layout({ children, home }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/images/profile.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content="CardsEditorのポートフォリオサイト" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta httpEquiv="content-language" content="ja"></meta>
      </Head>
      <header>
        <div className="header-container">
          {home ? (
            <div className="header-left">
              <img
                src="/images/profile.png"
                alt={name}
                className="header-img"
              />
              <h1 className="header-title">{name}</h1>
              {/* <div>#android #design #web #photo</div> */}
            </div>
          ) : (
            <Link href="/" className="header-left">
              <img
                src="/images/profile.png"
                alt={name}
                className="header-img"
              />
              <h1 className="header-title">{name}</h1>
              {/* <div>#android #design #web #photo</div> */}
            </Link>
          )}

          <div className="icons">
            <a
              href="https://github.com/cardseditor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <svg
                className="icon fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://x.com/cardseditor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="icon fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cardseditor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="icon fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <circle cx="12" cy="12" r="3.2" />
                <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
            </a>
            <a
              href="https://pc.gajeroll.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="size-24 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <main>
        {children}
        {!home && (
          <div className="home">
            <Link href="/">◀ ホーム</Link>
          </div>
        )}
      </main>
      <footer>
        <small className="copyright">
          © 2022-{new Date().getFullYear()} {name}
        </small>
      </footer>
    </>
  )
}

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
            >
              <svg
                className="icon stroke-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
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
                className="icon stroke-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
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
                className="icon stroke-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a
              href="https://pc.gajeroll.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="icon stroke-current size-24"
                viewBox="0 -960 960 960"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h389.3q14.47 0 27.81 5.62 13.35 5.61 23.19 15.46l146.31 146.31q9.85 9.84 15.46 23.19 5.62 13.34 5.62 27.81v389.3Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q5.39 0 8.85-3.46t3.46-8.85V-600H636.15q-15.46 0-25.8-10.35Q600-620.69 600-636.15V-760H212.31q-5.39 0-8.85 3.46t-3.46 8.85v535.38q0 5.39 3.46 8.85t8.85 3.46ZM640-300q12.77 0 21.38-8.62Q670-317.23 670-330t-8.62-21.38Q652.77-360 640-360H320q-12.77 0-21.38 8.62Q290-342.77 290-330t8.62 21.38Q307.23-300 320-300h320ZM450-600q12.77 0 21.38-8.62Q480-617.23 480-630t-8.62-21.38Q462.77-660 450-660H320q-12.77 0-21.38 8.62Q290-642.77 290-630t8.62 21.38Q307.23-600 320-600h130Zm190 150q12.77 0 21.38-8.62Q670-467.23 670-480t-8.62-21.38Q652.77-510 640-510H320q-12.77 0-21.38 8.62Q290-492.77 290-480t8.62 21.38Q307.23-450 320-450h320ZM200-760v160-160V-200v-560Z" />
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

import Head from 'next/head'
import Link from 'next/link'

const name = 'CardsEditor'
export const siteTitle = name

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/images/profile.png" />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="description"
          content="CardsEditorのポートフォリオサイト"
        />
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
        <div className='header-container'>
          {home ? (
            <div className='header-left'>
              <img
                src="/images/profile.png"
                alt={name}
                className='header-img'
              />
              <h1 className='header-title'>{name}</h1>
              {/* <div>#android #design #web #photo</div> */}
            </div>
          ) : (
            <Link href="/" className='header-left'>
              <img
                src="/images/profile.png"
                alt={name}
                className='header-img'
              />
              <h1 className='header-title'>{name}</h1>
              {/* <div>#android #design #web #photo</div> */}
            </Link>
          )
          }

          <div className='icons'>
            <a href="https://github.com/cardseditor" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className='icon' />
            </a>
            <a href="https://x.com/cardseditor" target="_blank" rel="noopener noreferrer">
              <img src="/icons/x.svg" alt="X" className='icon' />
            </a>
            <a href="https://www.instagram.com/cardseditor/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className='icon' />
            </a>
            <a href="https://pc.gajeroll.com/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/article.svg" alt="Blog" className='size-24' />
            </a>
          </div>
        </div>
      </header>
      <main>
        {children}
          {!home && (
            <div className='home'>
              <Link href="/">◀ ホーム</Link>
            </div>
          )}
      </main>
      <footer>
        <small className='copyright'>© 2022-{new Date().getFullYear()} {name}</small>
      </footer>
    </>
  )
}
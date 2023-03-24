import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const name = 'CardsEditor'
export const siteTitle = name

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.png" />
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
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <header className={styles.header}>
          {home ? (
            <div className={utilStyles.row}>
              <img
                src="/images/profile.png"
                className={`${styles.headerHomeImage}`}
                alt={name}
              />
              <div>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <div className={utilStyles.selfIntro}>#android #design #web #photo</div>

                <div className="row icons">
                  <a href="https://github.com/cardseditor" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{
                        width: "24px",
                        marginLeft: "4px",
                        marginRight: "16px",
                      }}
                    />
                  </a>
                  <a href="https://twitter.com/cardseditor" target="_blank">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{
                        width: "24px",
                        marginLeft: "4px",
                        marginRight: "16px",
                      }}
                    />
                  </a>
                  <a href="https://www.instagram.com/cardseditor/" target="_blank">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{
                        width: "24px",
                        marginLeft: "4px",
                        marginRight: "16px",
                      }}
                    />
                  </a>
                  <a href="https://pc.gajeroll.com/" target="_blank">
                    <FontAwesomeIcon
                      icon={faPen}
                      style={{
                        width: "24px",
                        marginLeft: "4px",
                        marginRight: "16px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.png"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>
          {children}
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </main>
      </div>
      <footer className={styles.footer}>
        <small>© 2022-{new Date().getFullYear()} {name}</small>
      </footer>
    </div>
  )
}
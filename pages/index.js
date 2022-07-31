import Head from 'next/head'
import Layout, { siteTitle } from '../componets/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../componets/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.selfIntro}>I’m CardsEditor!</p>

        <p className={utilStyles.selfIntro}>
          <a href='https://twitter.com/CardsEditor' target="_blank">Twitter</a>
        </p>
        <p className={utilStyles.selfIntro}>
          <a href='https://www.instagram.com/cardseditor/' target="_blank">Instagram</a>
        </p>
        <p className={utilStyles.selfIntro}>
          <a href='https://github.com/cardseditor' target="_blank">GitHub</a>
        </p>
        <p className={utilStyles.selfIntro}>
          <a href='https://www.youtube.com/channel/UCD4Vokjng44fu0vBpY50odg' target="_blank">YouTube</a>
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>          ))}
        </ul>
      </section>
    </Layout>
  )
}

import Head from 'next/head'
import Layout, { siteTitle } from '../componets/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm CardsEditor!</p>
        <p>
          Twitter:{' '}
          <a href="https://twitter.com/CardsEditor">CardsEditor</a>
        </p>
      </section>
    </Layout>
  )
}
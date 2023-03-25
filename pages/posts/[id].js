import Layout from '../../componets/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../componets/date'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>
          <span className='material-symbols-outlined article-icon'>{postData.icon}</span>
          {postData.title}
        </h1>
        <div className='date'>
          <Date dateString={postData.date} />
        </div>
        <section>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
import Layout from '../../../componets/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Date from '../../../componets/date'
import { postIcon } from '../../../componets/icons'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((p) => ({ id: p.params.id }))
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id)
  return { title: postData.title }
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id)
  return (
    <Layout>
      <article>
        <h1>
          {postIcon(postData.icon)}
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

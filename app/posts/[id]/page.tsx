import Layout from '../../../componets/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Date from '../../../componets/date'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((p) => ({ id: p.params.id }))
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostData(id)
  return { title: postData.title }
}

export default async function Post({ params }: any) {
  const { id } = await params
  const postData = await getPostData(id)
  return (
    <Layout>
      <article>
        <h1>
          <span className="material-symbols-outlined article-icon">
            {postData.icon}
          </span>
          {postData.title}
        </h1>
        <div className="date">
          <Date dateString={postData.date ?? ''} />
        </div>
        <section>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </article>
    </Layout>
  )
}

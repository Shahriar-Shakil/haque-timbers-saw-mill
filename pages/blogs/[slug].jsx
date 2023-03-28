import Layout from '@/components/layout'
import PostBody from '@/components/posts/PostBody'
import PostHeader from '@/components/posts/PostHeader'
import Skeleton from '@/components/ui/Skeleton'
import { client } from '@/lib/contentful/client'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Post = ({ post, categories, includes }) => {
  const router = useRouter()
  const coverImageUrl = post?.fields?.coverImage?.fields?.file?.url ?? {}
  const seoImageUrl = post?.fields?.seo?.fields?.image?.fields?.file?.url ?? {}
  const title = post?.fields?.title
  const { title: SEOTitle, description } = post?.fields?.seo?.fields ?? {}
  return (
    <>
      <Head>
        <title key='title'>{SEOTitle || title}</title>

        <meta property='og:url' content='https://haquetimbersbd.netlify.app/' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={SEOTitle || title} />
        <meta
          property='og:description'
          content={description || post?.fields?.excerpt}
        />
        <meta property='og:image' content={seoImageUrl || coverImageUrl} />
      </Head>
      <Layout categories={categories}>
        <section className=''>
          <div className='container'>
            <article className='prose mx-auto'>
              {router.isFallback ? (
                <Skeleton />
              ) : (
                <>
                  <PostHeader post={post} />
                  <PostBody post={post} />
                </>
              )}
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params, preview = false }) => {
  const { slug } = params
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  })
  const categoriesResponse = await client.getEntries({
    content_type: 'categories'
  })
  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: response?.items?.[0],
      categories: categoriesResponse.items
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' })
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post

import CTAsection from '@/components/homePage/CTAsection'
import Testimonial from '@/components/homePage/Testimonial'
import Layout from '@/components/layout'
import { client } from '@/lib/contentful/client'
import Head from 'next/head'

const Homepage = ({ categories }) => {
  return (
    <>
      <Head>
        <title key='title'>Haque Timbers and Saw mill</title>

        <>
          <meta property='og:title' content={'Haque Timbers and Saw mill'} />
          <meta
            property='og:url'
            content='https://haquetimbersbd.netlify.app/'
          />
          <meta property='og:type' content='article' />
          <meta
            property='og:title'
            content='Exploring the World of Wood with Haque Timbers and sawmill'
          />
          <meta
            property='og:description'
            content='আমারা সব ধরনের কাঠের সরবরাহকারী এবং কাঠের তৈরি সব ধরনের ফার্নিচার আমাদের কাছে পাবেন।'
          />
          {/* <meta
          property='og:image:secure'
          content='https://images.ctfassets.net/3b4yutsngovu/2GX63fLLFkwlCTVXLY9BPH/424dbe3a623bc261f83d7bb7509b6323/hero1.jpg?w=640&q=75'
        /> */}
        </>

        {/* {metaTags.title && (
          <>
            <title key="title">{metaTags.title}</title>
            <meta key="og:title" property="og:title" content={metaTags.title} />
          </>
        )}
        {metaTags.description && (
          <>
            <meta key="description" name="description" content={metaTags.description} />
            <meta key="og:description" property="og:description" content={metaTags.description} />
          </>
        )}
      */}
        {/* {robots.length > 0 && <meta key="robots" name="robots" content={robots.join(', ')} />} */}
      </Head>
      <Layout categories={categories}>
        <CTAsection />
        <Testimonial />
      </Layout>
    </>
  )
}
export const getStaticProps = async () => {
  try {
    // const featuredProducts = await client.getEntries({
    //   'metadata.tags.sys.id[all]': 'featured',
    //   limit: 3
    // })
    const categoriesResponse = await client.getEntries({
      content_type: 'categories'
    })
    // const response = await client.getEntries({ content_type: 'blogPost' })

    return {
      props: {
        // featuredProducts: featuredProducts.items,
        categories: categoriesResponse.items
        // blogs: response.items
        // revalidate: 60
      },
      revalidate: 60 * 10
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}
export default Homepage

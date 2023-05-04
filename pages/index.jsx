import Contacts from '@/components/homePage/Contacts'
import CTAsection from '@/components/homePage/CTAsection'
import Testimonial from '@/components/homePage/Testimonial'
import Layout from '@/components/layout'
import Head from 'next/head'

const Homepage = () => {
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
      <Layout>
        <CTAsection />
        <Testimonial />
        <Contacts />
      </Layout>
    </>
  )
}

export default Homepage

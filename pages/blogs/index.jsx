import Layout from '@/components/layout'
import ContentfulImage from '@/components/ui/ContentfulImage'
import DateComponent from '@/components/ui/DateComponent'
import { client } from '@/lib/contentful/client'
import Head from 'next/head'
import Link from 'next/link'

const Posts = ({ posts, categories }) => {
  return (
    <>
      <Head>
        <title key='title'>
          Discover the Best Quality Wood Products in Bangladesh - Haque Timber
          and Saw Mill Blog
        </title>
        <meta
          key='og:title'
          property='og:title'
          content={
            'Explore the world of wood products with Haque Timber and Saw Mill blog. Get expert insights, tips, and latest trends on round logs, swan timber, and more. Discover the premium quality wood products in Bangladesh today!'
          }
        />
      </Head>
      <Layout categories={categories}>
        <div className='bg-white '>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Exploring the World of Wood
              </h2>
              <p className='mt-2 text-sm font-normal leading-6 text-gray-600'>
                ফার্নিচার তৈরিতে ভালো কাঠের ব্যাপারে সচেতন হওয়া উচিত। গাছ এবং
                কাঠ সম্পর্কে ধারনা না থাকলে প্রতারিত হতে পারেন। খারাপ কাঠের
                ফার্নিচার দ্রুত নষ্ট হয়ে যায়। তাছাড়া ভালো কাঠ ছাড়া ভালো মানের
                ডিজাইন করা সম্ভব না যত ভালোই কারিগর হোক না কেন। এ ব্যাপারে হক
                টিম্বারস এন্ড স-মিল তাদের দুই যুগের অভিজ্ঞতা আপনাদের সাথে শেয়ার
                করছে এই ব্লগে। যেকোন প্রশ্ন, পরামর্শ অথবা মতামত জানাতে আমাদের
                সাথে যোগাযোগ করুন।
              </p>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {posts.map(post => (
                <article
                  key={post.fields.title}
                  className='flex flex-col items-start justify-between'
                >
                  <div className='relative w-full '>
                    <ContentfulImage
                      alt={`Cover Image for ${post.fields.title}`}
                      src={post.fields.coverImage.fields.file.url}
                      width={
                        post.fields.coverImage.fields.file.details.image.width
                      }
                      height={
                        post.fields.coverImage.fields.file.details.image.height
                      }
                      // className='rounded-md'
                    />
                    <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='max-w-xl'>
                    <div className='mt-8 flex items-center gap-x-4 text-xs'>
                      <DateComponent dateString={post.fields.date} />
                    </div>
                    <div className='group relative'>
                      <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                        <Link href={`/blogs/${post.fields.slug}`}>
                          <span className='absolute inset-0' />
                          {post.fields.title}
                        </Link>
                      </h3>
                      <p className='mt-5 text-sm leading-6 text-gray-600 line-clamp-3'>
                        {post.fields.excerpt}
                      </p>
                    </div>
                    {post?.fields?.author ? (
                      <div className='relative mt-8 flex items-center gap-x-4'>
                        <ContentfulImage
                          src={
                            post?.fields?.author?.fields.image?.fields.file.url
                          }
                          width={
                            post.fields.author.fields.image.fields.file.details
                              .image.width
                          }
                          height={
                            post.fields.author.fields.image.fields.file.details
                              .image.height
                          }
                          alt=''
                          className='h-10 w-10 rounded-full bg-gray-100'
                        />
                        <div className='text-sm leading-6'>
                          <p className='font-semibold text-gray-900 capitalize'>
                            <span className='absolute inset-0' />
                            {post.fields.author.fields.name}
                          </p>
                          <p className='text-gray-600'>
                            {post.fields.author.fields.bio
                              ? post.fields.author.fields.bio
                              : 'Content Writer'}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt'
  })
  const categoriesResponse = await client.getEntries({
    content_type: 'categories',
    order: 'sys.createdAt'
  })

  return {
    props: {
      posts: response.items,
      categories: categoriesResponse.items
    },
    revalidate: 60 * 10
  }
}

export default Posts

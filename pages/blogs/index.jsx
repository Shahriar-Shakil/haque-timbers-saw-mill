import Layout from '@/components/layout'
import ContentfulImage from '@/components/ui/ContentfulImage'
import DateComponent from '@/components/ui/DateComponent'
import { client } from '@/lib/contentful/client'
import Link from 'next/link'

const Posts = ({ posts, categories }) => {
  return (
    <Layout categories={categories}>
      <div className='bg-white '>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Discover the Beauty and Versatility of Wood
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Explore the endless possibilities of woodworking with Haque Timber
              and Saw Mill.With a commitment to craftsmanship and customer
              satisfaction, we are your go-to source for round logs, swan
              timber, and more.
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
                        <p className='text-gray-600'>Content Writer</p>
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
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: 'sys.updatedAt'
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
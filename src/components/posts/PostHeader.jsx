import { FacebookIcon, FacebookShareButton } from 'next-share'
import { useRouter } from 'next/router'
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date } = post.fields ?? {}
  const router = useRouter()
  const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`
  return (
    <>
      <h2>{title}</h2>

      <div className=' flex items-center justify-between md:mb-10'>
        {/* <Avatar name={author.fields.name} picture={author.fields.image} /> */}
        <DateComponent dateString={date} className='text-sm text-gray-400' />
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-400 pr-1'></span>
          <FacebookShareButton
            url={baseURL}
            quote={
              'next-share is a social share buttons for your next React apps.'
            }
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        {/* <Avatar name={author.fields.name} picture={author.fields.picture} /> */}
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div>
    </>
  )
}

export default PostHeader

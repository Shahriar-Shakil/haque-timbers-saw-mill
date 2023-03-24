import Link from 'next/link'
import Router from 'next/router'
import CategoriesLink from '../Categories/CategoriesLink'
import ContentfulImage from '../ui/ContentfulImage'
const ProductCard = ({ product }) => {
  const { title, slug, affiliateLink, coverImage, categories, price } =
    product.fields ?? {}
  const handleClick = e => {
    e.preventDefault()
    Router.push(`/${slug}`)
  }
  return (
    <div onClick={handleClick} className='group relative'>
      <div className='  w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none '>
        <ContentfulImage
          className='object-contain'
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='mt-2 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <Link href={`/${slug}`}>
              <h2
                title={title}
                className=' line-clamp-3  text-sm font-normal  text-indigo-600 hover:text-indigo-700 pt-2'
              >
                {title}
              </h2>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

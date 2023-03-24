import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ShopLayout({ categories, children }) {
  const router = useRouter()
  const { categorySlug, sort } = router.query
  return (
    <section className=''>
      <div className=''>
        <div className='grid grid-cols-12 gap-4 mt-3 mb-20'>
          <div className='col-span-2'>
            <ul className='mb-10'>
              <li className='py-1 text-base uppercase font-bold tracking-wide'>
                All Categories
              </li>
              <li
                className={`py-1 uppercase ${
                  router.pathname === '/shop' ? 'underline' : ''
                }`}
              >
                <Link href='/shop'>Shop all</Link>
              </li>
              {categories?.map(item => (
                <li
                  className={`py-1 uppercase ${
                    categorySlug === item.fields.slug ? 'underline' : ''
                  }`}
                  key={item.fields.slug}
                >
                  <Link href={`/shop/${item.fields.slug}`}>
                    {item.fields.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-8'>{children}</div>
        </div>
      </div>
    </section>
  )
}

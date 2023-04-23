import React from 'react'
import ContentfulImage from '../ui/ContentfulImage'
import hero from '../../../public/assets/hero.jpg'
import hero1 from '../../../public/assets/hero1.jpg'
import hero2 from '../../../public/assets/hero2.jpg'
import hero3 from '../../../public/assets/hero3.jpg'
import Link from 'next/link'
import { motion } from 'framer-motion'

const variants = {
  initial: {},
  animate: {},
  whileHover: {
    y: -50,
    scale: 1.05,
    rotateZ: -2,
    originX: 0.5,
    transition: { duration: 1, stiffness: 200, type: 'spring', delay: 0.5 }
  }
}

export default function CTAsection() {
  return (
    <div data-scroll-section className='overflow-hidden '>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Nature&apos;s Finest for Your Spaces - Haque Timber and Saw Mill
            </h2>

            <p className='mt-6 text-xl leading-8 text-gray-600'>
              Discover the finest quality round logs and swan timber at Haque
              Timber and Saw Mill - your trusted source for premium wood
              products in Bangladesh. Explore our wide selection of top-grade
              lumber and experience exceptional customer service. Visit us
              online today!
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              Haque Timber and Saw Mill is committed to delivering top-notch
              wood products while protecting our environment.
            </p>
            <div className='mt-10 flex'>
              <Link
                href='/blogs'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Read More<span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <motion.div
                initial='initial'
                animate='animate'
                whileHover='whileHover'
                variants={variants}
              >
                <ContentfulImage
                  src={hero}
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </motion.div>
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                <motion.div
                  initial='initial'
                  animate='animate'
                  whileHover='whileHover'
                  variants={variants}
                >
                  <ContentfulImage
                    src={hero1}
                    alt=''
                    className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </motion.div>
              </div>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <ContentfulImage
                  src={hero2}
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <ContentfulImage
                  src={hero3}
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

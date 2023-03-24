import React, { useState } from 'react'
import Modal from '../ui/Modal'
import PriceComponent from '../ui/PriceComponent'

export default function ProductDetails({ product }) {
  const [open, setOpen] = useState(false)

  const { title, updateAt, affiliateLink, price } = product?.fields ?? {}
  return (
    <>
      <div className='space-y-2'>
        <h1 className='text-xl font-medium text-gray-900 '>{title}</h1>
        <div className='italic text-gray-900'>
          <button
            onClick={() => setOpen(true)}
            type='button'
            className='rounded  py-1 px-2 italic  text-indigo-600  hover:text-indigo-900'
          >
            Any Query
          </button>{' '}
        </div>
      </div>

      <Modal title='Details' open={open} setOpen={setOpen}>
        <p className='text-sm leading-5 text-left text-justify'>
          বিস্তারিত জানতে সরাসরি যোগাযোগ করুন অথবা মেইল করুন
        </p>
      </Modal>
    </>
  )
}

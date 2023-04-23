import {
  DevicePhoneMobileIcon,
  PhoneArrowUpRightIcon
} from '@heroicons/react/20/solid'
import { Tooltip } from 'flowbite-react'
import React from 'react'

export default function CallMobile() {
  return (
    <>
      <Tooltip content='+8801718024450' placement='right' trigger='click'>
        <a
          className='h-10 w-10 bg-light-alpha-25 border border-light-alpha-40 text-main-color rounded-full inline-flex justify-center items-center'
          href='tel:+8801718024450'
        >
          <PhoneArrowUpRightIcon className='w-6 h-6' />
        </a>
      </Tooltip>
    </>
  )
}

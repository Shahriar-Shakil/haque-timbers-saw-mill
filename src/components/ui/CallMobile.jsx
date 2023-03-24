import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function CallMobile() {
  return (
    <p title='Call US' className='flex text-green-600'>
      <DevicePhoneMobileIcon className='w-6 h-6' />
      <a href='tel:+8801718024450'>+8801718024450</a>
    </p>
  )
}

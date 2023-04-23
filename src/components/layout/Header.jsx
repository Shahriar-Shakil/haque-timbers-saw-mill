import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logo from '../../../public/assets/logo.png'
import CallMobile from '../ui/CallMobile'
import ContentfulImage from '../ui/ContentfulImage'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ categories }) {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.asPath])
  return (
    <header className=' top-0 z-50 shadow-md'>
      <nav
        className='mx-auto max-h-24 flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        {/* <div className='flex lg:flex-1'></div> */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden z-50 lg:flex lg:gap-x-12'>
          <Link
            href='/'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Home
          </Link>

          <Link
            href='/blogs'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Blogs
          </Link>
          <Link
            href='/profile'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            About us
          </Link>
          <Link
            href='#contacts'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Contacts
          </Link>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <CallMobile />
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-10 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link
                  href='/blogs'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Blogs
                </Link>
                <Link
                  href='/profile'
                  className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

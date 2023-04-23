import React from 'react'

export default function Contacts() {
  return (
    <div data-scroll-section id='contacts' className=' py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
            যোগাযোগ
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          <div>
            <h3 className='border-l border-indigo-600 pl-6 font-semibold text-gray-900'>
              হক টিম্বেরস এন্ড স-মিল
            </h3>
            <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600'>
              <p>পালিচাড়া হাট</p>
              <p>সদর থানা, রংপুর</p>
            </address>
          </div>
          <div className='col-span-3'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d483.7670777370203!2d89.1824801718789!3d25.68291753428956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e33366002c2f37%3A0x58fb4e3a1c2db546!2z4Ka54KaVIOCmn-Cmv-CmruCnjeCmrOCmvuCmsOCmuCDgpoXgp43gpq_gpr7gpqjgp43gpqEg4Ka4LeCmruCmv-Cmsg!5e0!3m2!1sen!2sbd!4v1680760508456!5m2!1sen!2sbd'
              width='100%'
              height='400'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

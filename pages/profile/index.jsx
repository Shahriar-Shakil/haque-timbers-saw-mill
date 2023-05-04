import Layout from '@/components/layout'
import ContentfulImage from '@/components/ui/ContentfulImage'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from '../../public/shaheen.jpg'
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment'
]
export default function TeamPage() {
  return (
    <Layout>
      <div className='section '>
        <div className='relative isolate'>
          <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='mx-auto   flex max-w-2xl flex-col gap-16 bg-white/5   ring-1 ring-white/10 sm:rounded-3xl  lg:mx-0 lg:max-w-none lg:flex-row lg:items-center  xl:gap-x-20 '>
              <div>
                <ContentfulImage
                  className=' flex-none rounded-xl shadow-xl   lg:h-auto lg:max-w-sm'
                  src={Image}
                  alt='image of managing director of Hoque Timbers'
                />
              </div>

              <div className='w-full flex-auto'>
                <div>
                  <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                    মোঃ শাহীন আনোয়ার
                  </h2>
                  <p className=' text-lg leading-8 text-gray-৪00'>
                    ব্যবস্থাপনা পরিচালক
                  </p>
                </div>
                <div className='space-y-2 mt-6'>
                  <p>
                    বাংলাদেশের উত্তরবঙ্গের শহর রংপুরের অন্যতম শীর্ষস্থানীয়
                    কাঠের কোম্পানী <b>হক টিম্বেরস এন্ড স মিল</b> সেই ১৯৯৫ সাল
                    থেকে সফল ভাবে এবং বিশ্বস্থাতার সাথে কাঠ ব্যবসা পরিচালনা করে
                    আসতেছে।
                  </p>
                  <p>
                    আমরা আমাদের মূল্যবান গ্রাহকদের সন্তুষ্ট এবং যতটা সম্ভব তাদের
                    প্রত্যাশা পূরণ করতে বদ্ধপরিকর। ১৯৯৫ সালে{' '}
                    <b>জনাব হাজী মোঃ আব্দুল হক (মৃত)</b> , হক টিম্বেরস এন্ড স
                    মিল নামে কাঠ ব্যবসা শুরু করেন। অত্যন্ত সফলতার সাথে ২০০৪ সাল
                    তার মৃত্যুর আগ পর্যন্ত তিনি প্রতিষ্ঠানটি পরিচালনা করেন ।
                  </p>
                  <p>
                    তার মৃত্যুর পর তার বড় ছেলে <b>হাজী মোঃ শাহিন আনোয়ার </b>
                    প্রতিষ্ঠানটির ব্যবস্থপনা পরিচালক হিসেবে দায়িত্ব পালন করছেন।
                  </p>
                  <p>
                    আমরা সারাদেশে গোল ও সাইজ কাঠ স্লাপাই করে থাকি । পাশাপাশি
                    উৎকৃষ্ট মানের কাঠ দিয়ে ফার্নিচার বানিয়ে থাকি । সেই শুরু হতে
                    বছরের পর বছর ধরে আপনাদের আন্তরিক সহযোগিতা ও পরামর্শ আমাদেরকে
                    সুনামের সহিত শীর্ষ স্থানীয় কাঠ ব্যবসায়ী প্রতিষ্ঠানে
                    রুপান্তরিত করেছে। আশাকরি ভবিষ্যতেও আপনাদের সহযোগিতা ও
                    পরামর্শ অব্যাহত থাকবে।
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
            <svg
              viewBox='0 0 1318 752'
              className='w-[82.375rem] flex-none'
              aria-hidden='true'
            >
              <path
                fill='url(#ee394704-5802-4a27-9451-3d29bf7415a3)'
                fillOpacity='.25'
                d='m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z'
              />
              <defs>
                <linearGradient
                  id='ee394704-5802-4a27-9451-3d29bf7415a3'
                  x1='1452.56'
                  x2='-101.59'
                  y1='515.446'
                  y2='760.592'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4F46E5' />
                  <stop offset={1} stopColor='#80CAFF' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  )
}

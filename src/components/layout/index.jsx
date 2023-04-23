import React from 'react'
import Header from './Header'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Footer from './Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

const Layout = ({ children, categories }) => {
  const ref = useRef(null)
  const options = {
    smooth: true
  }
  return (
    <>
      <AnimatePresence
        mode='wait'
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <div className='overscroll-none'>
          <Header categories={categories} />
          <motion.main
            variants={fadeIn('up')}
            initial='initial'
            animate='animate'
            exit='exit'
            className='container px-2 sm:px-8 py-8 mb-32 mx-auto  max-w-[75rem] bg-light-alpha-25 backdrop-blur-[20px] mt-[60px] rounded-xl'
            data-scroll-container
            ref={ref}
          >
            {children}
            <Footer />
          </motion.main>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Layout

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
          {/* <LocomotiveScrollProvider options={options} containerRef={ref}> */}
          <motion.main
            variants={fadeIn('up')}
            initial='initial'
            animate='animate'
            exit='exit'
            className='container p-8 mb-32  '
            data-scroll-container
            ref={ref}
          >
            {children}
          </motion.main>
          <Footer />
          {/* </LocomotiveScrollProvider> */}
        </div>
      </AnimatePresence>
    </>
  )
}

export default Layout

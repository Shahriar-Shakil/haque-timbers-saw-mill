import React from 'react'
import Header from './Header'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Footer from './Footer'
// import MessengerCustomerChat from 'react-messenger-customer-chat'

const Layout = ({ children, categories }) => {
  return (
    <>
      <AnimatePresence
        mode='wait'
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <div className='relative'>
          <Header categories={categories} />

          <motion.main
            variants={fadeIn('up')}
            initial='initial'
            animate='animate'
            exit='exit'
            className='container p-8 mb-32 min-h-screen'
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      </AnimatePresence>
      {/* <MessengerCustomerChat
        pageId='100091314007749'
        appId='1666002803829805'
      /> */}
    </>
  )
}

export default Layout

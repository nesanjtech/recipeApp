// import React from 'react'
import BackToTop from './BackToTop'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
    <Navbar />
    <main className='flex-grow-1'>
      <Outlet />
    </main>
    <BackToTop />
    <Footer />
    </div>
  )
}

export default Layout
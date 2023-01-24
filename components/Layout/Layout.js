import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout( {navitems, children} ) {
  return (
    <>
        <Header navitems={navitems || []}/>
            {children}
        <Footer />
    </>
  )
}

export default Layout

import React, { ReactChild } from 'react'
import SEO from "~/components/SEO"
import FilterProvider from "~/context/Filter"
import "./global.css"

interface Props {
  children: ReactChild
}

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <>
      {/* <BurgerProvider>
        <Header ></Header>
      </BurgerProvider> */}
      <SEO></SEO>
      <FilterProvider>
        {children}
      </FilterProvider>
    </>
  )
}

export default Layout

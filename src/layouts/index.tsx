import React, { ReactChild } from 'react'
import Header from "~/components/Header/index"
import SEO from "~/components/SEO"
import BurgerProvider from '~/context/BurgerMenu'
import FilterProvider from "~/context/Filter"
import "./global.css"

interface Props {
  children: ReactChild
}

const Layout: React.FC<Props> = ({ children }) => {

  return (
    <>
      <SEO></SEO>
      <BurgerProvider>
        <Header ></Header>
      </BurgerProvider>
      <FilterProvider>
        {children}
      </FilterProvider>
    </>
  )
}

export default Layout

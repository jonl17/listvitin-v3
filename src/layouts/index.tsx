import React, { ReactChild } from 'react'
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
      <FilterProvider>
        {children}
      </FilterProvider>
    </>
  )
}

export default Layout

import React, { ReactChild } from 'react'
import "./global.css"

import Header from "~/components/Header/index"
import Provider from '~/context/BurgerMenu'

interface Props {
  children: ReactChild
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Provider>
        <Header></Header>
      </Provider>
      {children}
    </>
  )
}

export default Layout

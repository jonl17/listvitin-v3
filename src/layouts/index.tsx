import React, { ReactChild } from 'react'
import styled from "styled-components"
import Header from "~/components/Header/index"
import SEO from "~/components/SEO"
import BurgerProvider from '~/context/BurgerMenu'
import FilterProvider from "~/context/Filter"
import "./global.css"

interface Props {
  children: ReactChild;
  location: Location;
}

const PageWrap = styled.div`
  margin-top: var(--mediumPad);
`

const Layout: React.FC<Props> = ({ children, location }) => {

  return (
    <>
      <SEO></SEO>
      <BurgerProvider>
        <Header pathname={location.pathname}></Header>
      </BurgerProvider>
      <FilterProvider>
        <PageWrap id="content">
          {children}
        </PageWrap>
      </FilterProvider>
    </>
  )
}

export default Layout

import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from 'react'
import Burger from "~/components/Burger"
import { BurgerMenuContext } from '~/context/BurgerMenu'
import { HeaderMetaData } from '~/types'
import Listvitinn from '../Listvitinn'
import { HeaderContainer } from "./styled"


const Header = () => {
  const data: HeaderMetaData = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
        pages {
          name {
            is
            en
          }
          slug
        }
      }
    }
  }
  `)
  const { site: { siteMetadata: { title, pages } } } = data
  const { open, setOpen } = useContext(BurgerMenuContext)
  return (
    <HeaderContainer open={open ? "open" : null}>
      <Listvitinn title={title}></Listvitinn>
      <div className="pages-wrap">
        {pages.map((page, index) => (
          <p key={index}>
            <Link activeClassName="active" onClick={() => setOpen(false)} to={page.slug}>{page.name.is}</Link>
          </p>
        ))}
      </div>
      <Burger open={open} onClick={() => setOpen(!open)}></Burger>
    </HeaderContainer>
  )
}

export default Header

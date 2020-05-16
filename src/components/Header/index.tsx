import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { HeaderMetaData } from '~/types'

import { HeaderContainer } from "./styled"
import Burger from "~/components/Burger"
import { BurgerMenuContext } from '~/context/BurgerMenu'

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
      <h1 className="title">
        <Link to="/">
          {title}
        </Link>
      </h1>
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

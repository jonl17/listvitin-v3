import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from 'react'
import Burger from "~/components/Burger"
import { BurgerMenuContext } from '~/context/BurgerMenu'
import { HeaderMetaData } from '~/types'
import Listvitinn from '../Listvitinn'
import { HeaderContainer } from "./styled"


const Header: React.FC<{ pathname: string }> = ({ pathname }) => {
  const data: HeaderMetaData = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
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
  const { site: { siteMetadata: { pages } } } = data
  const { open, setOpen } = useContext(BurgerMenuContext)

  return (
    <HeaderContainer open={open ? "open" : null} >
      <Listvitinn></Listvitinn>
      <div className="pages-wrap">
        {pages.map((page, index) => (
          <p key={index}>
            <Link partiallyActive={page.name.is === "Sýningar" && pathname.includes("/syningar/")} activeClassName="active" onClick={() => setOpen(false)} to={page.slug}>{page.name.is}</Link>
          </p>
        ))}
      </div>
      <Burger open={open} onClick={() => setOpen(!open)}></Burger>
    </HeaderContainer>
  )
}

export default Header

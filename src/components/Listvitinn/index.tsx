import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import React from 'react'
import { Mynd } from "~/types"
import { Anchor } from "./styled"

interface QueryProps {
  imageSharp: Mynd
}

const Listvitinn: React.FC<{ title: string }> = ({ title }) => {
  const data: QueryProps = useStaticQuery(graphql`
    {
      imageSharp (fluid: {originalName: {eq: "listvitinn-logo2.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  const { imageSharp: { fluid } } = data
  return (
    <Anchor to="/">
      <Img style={{ height: "100%" }} imgStyle={{ objectFit: "contain" }} fluid={fluid}></Img>
    </Anchor>
  )
}

export default Listvitinn

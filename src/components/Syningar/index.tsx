import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { Syning as SyningType } from "~/types"
import { Container } from "./styled"
import Syning from './Syning'

interface Props {
  exhibitions: {
    nodes: SyningType[];
  }
}

const Syningar = () => {
  const data: Props = useStaticQuery(graphql`
  {
    exhibitions: allContentfulExhibition {
      nodes {
        title
        opnun
        lokun
        slug
        mynd {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        stadur {
          id
          title
          slug
          mynd {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
        artist {
          id
          nafn
        }
      }
    }
  }
  `)
  return (
    <Container>
      {data.exhibitions.nodes.map(syning => (
        <Syning syning={syning}></Syning>
      ))}
    </Container>
  )
}

export default Syningar

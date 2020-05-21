import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from 'react'
import { FilterContext } from "~/context/Filter"
import { exhibitionFilter } from "~/shared/methods"
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

  const { filter } = useContext(FilterContext)

  const filteredData = data.exhibitions.nodes.filter(syning => exhibitionFilter(syning, filter))

  return (
    <Container>
      {filteredData.map((syning, index) => (
        <Syning key={index} syning={syning}></Syning>
      ))}
    </Container>
  )
}

export default Syningar

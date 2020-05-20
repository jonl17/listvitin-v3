import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from 'react'
import { FilterContext } from "~/context/Filter"
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

  const filteredData = data.exhibitions.nodes.filter(syning => {

    const today = new Date()
    const opnun = new Date(syning.opnun)
    const lokun = new Date(syning.lokun)
    if (filter === "opna bráðum") {
      return today < opnun
    }
    else if (filter === "opnar") {
      return today >= opnun && today <= lokun
    }
    else if (filter === "afstaðnar") {
      return today > lokun
    }
  })
  return (
    <Container>
      {filteredData.map((syning, index) => (
        <Syning key={index} syning={syning}></Syning>
      ))}
    </Container>
  )
}

export default Syningar

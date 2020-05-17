import React from 'react'
import { graphql } from "gatsby"
import { Syning } from '~/types'
import { exhibitionFilter } from "~/shared/methods"

interface Props {
  data: {
    exhibitions: {
      nodes: Syning[];
    }
  }
}

const Index: React.FC<Props> = ({ data: { exhibitions: { nodes } } }) => {
  exhibitionFilter("opna bráðum", nodes)
  return (
    <div>
      <p>
        listvitinn
      </p>
    </div>
  )
}

export const query = graphql`
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
`

export default Index

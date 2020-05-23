import { graphql } from "gatsby"
import React from 'react'
import { Syning } from "~/types"
import About from "./components/About"
import { Image, PageWrap } from "./styled"

interface Props {
  pageContext: {
    id: string;
  }
  data: {
    contentfulExhibition: Syning;
  }
}


const SyningTemplate: React.FC<Props> = ({ pageContext, data }) => {
  const { contentfulExhibition: syning } = data
  return (
    <PageWrap>
      <div className="left-side-wrap">
        <div className="image-wrap">
          <Image imgStyle={{ objectFit: "contain" }} fluid={syning.mynd.fluid}></Image>
        </div>
      </div>
      <About syning={syning}></About>
    </PageWrap>
  )
}

export const query = graphql`
query($id: String) {
  contentfulExhibition (id: {eq: $id}) {
      id
      title
      slug
      opnun
      lokun
      stadur {
        title
        slug
        mynd {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      artist {
        nafn
        id
      }
      mynd {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      texti_is {
        childContentfulRichText {
          html
        }
      }
      texti_en {
        childContentfulRichText {
          html
        }
      }
    }
}
`

export default SyningTemplate

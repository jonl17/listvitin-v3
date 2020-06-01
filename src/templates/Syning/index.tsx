import { graphql, Link } from "gatsby"
import React from 'react'
import About from "~/components/About"
import Countdown from "~/components/Countdown"
import ExhibitionDate from "~/components/ExhibitionDate"
import { Syning } from "~/types"
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

        <div className="info-box">

          {syning.stadur && <p className="syningarstadur-link">
            <Link to={"/syningarstadir/" + syning.stadur.slug}>{syning.stadur.title}</Link>
          </p>}

          <ExhibitionDate opnun={syning.opnun} lokun={syning.lokun}></ExhibitionDate>

          <Countdown opnun={syning.opnun} lokun={syning.lokun}></Countdown>

        </div>
        {/* opið í dag */}
        {/* sýningarstaður excerpt */}
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

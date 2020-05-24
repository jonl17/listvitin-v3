import React from 'react'
import { Syning } from '~/types'
import ExhibitionDate from "./ExhibitionDate"
import { Container } from "./styled"


const About: React.FC<{ syning: Syning }> = ({ syning }) => {
  const { title } = syning
  return (
    <Container>
      <div className="top-box">
        <p className="title">{title}</p>
        <ExhibitionDate opnun={syning.opnun} lokun={syning.lokun}></ExhibitionDate>
      </div>
      {syning.texti_is && <div className="about-text" dangerouslySetInnerHTML={{ __html: syning.texti_is.childContentfulRichText.html }}></div>}
    </Container>
  )
}

export default About

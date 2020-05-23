import Img from "gatsby-image"
import styled from "styled-components"

export const PageWrap = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--smallPad) var(--mediumPad);
  gap: var(--smallPad);
  .left-side-wrap {
    .image-wrap {
      height: 25rem;
      position: relative;
    }
  }
`
export const Image = styled(Img)`
  width: 100%;
  position: absolute;
`
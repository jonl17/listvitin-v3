import Img from "gatsby-image"
import styled from "styled-components"

export const PageWrap = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--smallPad) var(--mediumPad);
  gap: var(--smallPad);
  .left-side-wrap {
    display: grid;
    grid-auto-rows: var(--largeBoxSize);
    .image-wrap {
      position: relative;
    }
  }
`
export const Image = styled(Img)`
  height: 100%;
  position: absolute;
`
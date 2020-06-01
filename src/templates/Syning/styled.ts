import Img from "gatsby-image"
import styled from "styled-components"

export const PageWrap = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--smallPad) var(--mediumPad);
  gap: var(--smallPad);
  .left-side-wrap {
    display: flex;
    flex-direction: column;
    .info-box {
      text-align: center;
      .syningarstadur-link {
        font-size: var(--titleSize);
      }
    }
    .image-wrap {
      position: relative;
      max-height: 25rem;
    }
  }
`
export const Image = styled(Img)`
  width: 100%;
  max-height: 25rem;
`
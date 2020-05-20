import Img from "gatsby-image"
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`


export const Image = styled(Img)`
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-in forwards;
`
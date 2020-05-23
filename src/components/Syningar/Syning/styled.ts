import { Link } from "gatsby"
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

export const Anchor = styled(Link)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
`


export const Image = styled(Img)`
position: absolute;
height: 100%;
width: 100%;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-in forwards;
`
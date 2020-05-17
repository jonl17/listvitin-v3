import styled, { css } from "styled-components"
import { breakpoints } from "~/shared/constants"
import { Open } from "~/types"

export const HeaderContainer = styled.div`
  position: relative;
  height: var(--mediumPad);
  display: grid;
  grid-template-columns: minmax(auto, var(--largePad)) auto;
  padding: 0 var(--mediumPad);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 var(--smallestPad);
  }
  .title {
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }
  .pages-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
      margin-left: var(--mediumPad);
    }
     
    @media (max-width: ${breakpoints.mobile}) {
      height: 100vh;
      width: 0%;
      pointer-events: none;
      overflow: hidden;
      
      transition: .1s;
      position: fixed;
      top: 0;
      right: 0;
      background: var(--white);
      flex-direction: column;
      justify-content: center;
      p {
        opacity: 0;
        font-size: 2em;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: 0;
      }
      ${(props: Open) => props.open && css`
        width: 100%;
        pointer-events: all;
        p {
          opacity: 1;
          transition: .2s;
        }
      `};
    }
  }


`
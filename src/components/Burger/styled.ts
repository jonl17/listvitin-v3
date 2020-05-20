import styled, { css } from "styled-components"
import { breakpoints } from "~/shared/constants"
import { Open } from "~/types"

export const BurgerContainer = styled.div`
  display: none;
  
  position: absolute;
  right: var(--smallPad);
  box-sizing: border-box;
  padding: 5px;
  z-index: 4;
  float: right;
  justify-self: flex-end;
  align-self: center;
  height: var(--smallPad);
  width: var(--smallPad);

  flex-direction: column;
  justify-content: space-evenly;

  &&:hover {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }
  span {
    width: 100%;
    height: 3px;
    border-bottom: 2px solid var(--black);
    transition: .05s;
  }

  ${(props: Open) => props.open && css`
    justify-content: center;
    #one {
      transform: rotate(45deg) translateX(4px);
    }
    #two {
      transform: rotate(-45deg) translateX(2px) translateY(-1px);
    }
  `}

`
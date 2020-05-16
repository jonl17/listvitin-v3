import React from 'react'

import { BurgerContainer } from "./styled"

interface Props {
  open: boolean;
  onClick: () => void;
}

const Burger: React.FC<Props> = ({ open, onClick }) => {
  return (
    <BurgerContainer open={open ? "open" : null} onClick={onClick}>
      <span id="one"></span>
      <span id="two"></span>
      {!open && <span></span>}
    </BurgerContainer>
  )
}

export default Burger

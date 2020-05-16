import React, { createContext, useState } from 'react'

interface ContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenuContext = createContext({} as ContextProps)

const Provider: React.FC<any> = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <BurgerMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </BurgerMenuContext.Provider>
  )
}

export default Provider

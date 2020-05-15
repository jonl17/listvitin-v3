import React, { ReactChild } from 'react'

interface Props {
  children: ReactChild
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout

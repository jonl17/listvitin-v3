import React from 'react'
import styled from "styled-components"
import Syningar from "~/components/Syningar"

const PageWrap = styled.div`
  display: grid;
  grid-template-columns: var(--boxSize) 1fr;
`

const Index = () => {
  return (
    <PageWrap>
      <div>ble</div>
      <Syningar></Syningar>
    </PageWrap>
  )
}

export default Index

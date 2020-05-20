import React from 'react'
import Filter from "~/components/Filter"
import { PageWrap } from "~/components/PageWrap"
import Syningar from "~/components/Syningar"

const Index = () => {
  return (
    <PageWrap>
      <Filter></Filter>
      <Syningar></Syningar>
    </PageWrap>
  )
}

export default Index

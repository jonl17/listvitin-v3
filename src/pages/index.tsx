import React from 'react'
import Listvitinn from "~/components/Listvitinn"
import { PageWrap } from "~/components/PageWrap"

const Index = () => {
  return (
    <PageWrap>
      {/* <Filter></Filter>
      <Syningar></Syningar> */}
      <div style={{ color: "var(--primary)" }}>
        <Listvitinn></Listvitinn>
        <p>Þessi síða er í vinnslu / Site in development</p>
      </div>
    </PageWrap>
  )
}

export default Index

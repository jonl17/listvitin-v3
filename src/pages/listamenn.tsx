import React from 'react'
import ListamennList from "~/components/ListamennList"
import { PageWrap } from "~/components/PageWrap"
import Search from "~/components/Search"

const Listamenn = () => {
  return (
    <PageWrap>
      <Search></Search>
      <ListamennList></ListamennList>
    </PageWrap>
  )
}

export default Listamenn

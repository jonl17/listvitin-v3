import React from 'react'
import ListamennList from "~/components/ListamennList"
import { PageWrap } from "~/components/PageWrap"
import SearchProvider from "~/context/Search"

const Listamenn = () => {
  return (
    <PageWrap>
      <SearchProvider>
        <ListamennList></ListamennList>
      </SearchProvider>
    </PageWrap>
  )
}

export default Listamenn

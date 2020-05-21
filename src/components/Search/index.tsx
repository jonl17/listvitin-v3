import React, { useContext } from 'react'
import { SearchContext } from "~/context/Search"
import { Container } from "./styled"

const Search = () => {
  const { setSearchParam } = useContext(SearchContext)
  const validate = (param: string) => {
    return param !== "" && param !== " "
  }
  return (
    <>
      <Container>
        <div className="search-wrap">
          <div className="icon-wrap">
            <i className="gg-search"></i>
          </div>
          <input onChange={(e) => setSearchParam(validate(e.target.value) ? e.target.value : "")} placeholder="Listamaður" type="text"></input>
        </div>
      </Container>
      <link href='https://css.gg/search.css' rel='stylesheet'></link>
    </>
  )
}

export default Search

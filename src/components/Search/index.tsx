import React from 'react'
import { Container } from "./styled"

const Search = () => {
  return (
    <>
      <Container>
        <div className="search-wrap">
          <div className="icon-wrap">
            <i className="gg-search"></i>
          </div>
          <input placeholder="Listamaður" type="text"></input>
        </div>
      </Container>
      <link href='https://css.gg/search.css' rel='stylesheet'></link>
    </>
  )
}

export default Search

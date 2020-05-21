import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from 'react'
import Search from "~/components/Search"
import { SearchContext } from "~/context/Search"
import { Artist as ArtistType } from "~/types"
import Artist from "./Artist"
import { Container } from "./styled"

interface QueryProps {
  artists: {
    nodes: ArtistType[]
  }
}

const Listamennlist = () => {
  const data: QueryProps = useStaticQuery(graphql`
  {
    artists: allContentfulArtist (sort: {fields: nafn}) {
      nodes {
        id
        nafn
        exhibition {
          title
          slug
          opnun
          lokun
        }
      }
    }
  }
  `)

  const { searchParam } = useContext(SearchContext)

  const filteredArtists = data.artists.nodes.filter(artist => artist.nafn.toLowerCase().includes(searchParam.toLowerCase()))

  return (
    <Container>
      <Search></Search>
      <div className="list-wrap">
        {filteredArtists.map((artist, index) => (
          <Artist key={index} artist={artist}></Artist>
        ))}
      </div>
    </Container>
  )
}

export default Listamennlist

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
    artists: allContentfulArtist {
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

  const matcher = new RegExp(searchParam, "gi")
  const filteredArtists = data.artists.nodes.filter(artist => {
    return artist.nafn.match(matcher)
  })

  // alphabetically sort by icelandic first names

  const collator = new Intl.Collator("is")
  filteredArtists.sort((a, b) => {
    return collator.compare(a.nafn, b.nafn)
  })


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

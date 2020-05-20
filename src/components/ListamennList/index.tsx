import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
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
        }
      }
    }
  }
  `)
  return (
    <Container>
      <div className="list-wrap">
        {data.artists.nodes.map((artist, index) => (
          <Artist key={index} artist={artist}></Artist>
        ))}
      </div>
    </Container>
  )
}

export default Listamennlist

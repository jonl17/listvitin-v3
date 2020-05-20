import React from 'react'
import { Artist as ArtistType } from '~/types'
import { ItemWrap } from "./styled"

const Artist: React.FC<{ artist: ArtistType }> = ({ artist }) => {
  return (
    <ItemWrap>
      <p>{artist.nafn}</p>
    </ItemWrap>
  )
}

export default Artist

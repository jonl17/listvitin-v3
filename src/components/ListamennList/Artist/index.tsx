import React from 'react'
import { exhibitionFilter } from "~/shared/methods"
import { Artist as ArtistType } from '~/types'
import { ItemWrap } from "./styled"


const Artist: React.FC<{ artist: ArtistType }> = ({ artist }) => {
  return (
    <ItemWrap>
      <p>{artist.nafn}</p>
      <div className="exhibition-wrap">
        {artist.exhibition ?
          artist.exhibition.map(syning => (
            <p style={exhibitionFilter(syning.opnun, syning.lokun, "opnar") ? { color: "var(--primary)" } : { color: "initial" }}>{syning.title}</p>
          ))
          : null
        }
      </div>
    </ItemWrap>
  )
}

export default Artist

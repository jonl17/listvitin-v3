import React, { useContext } from 'react'
import { FilterContext } from "~/context/Filter"
import { ExhibitionFilterType } from '~/types'
import { ItemBox } from "./styled"

const Item: React.FC<{ name: ExhibitionFilterType }> = ({ name }) => {
  const { filter, setFilter } = useContext(FilterContext)
  return (
    <ItemBox onClick={() => setFilter(name)} active={filter === name}>
      <span></span>
      <p>
        {name}
      </p>
    </ItemBox>
  )
}

export default Item

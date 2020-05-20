import React from 'react'
import { ExhibitionFilterType } from '~/types'
import FilterItem from "./Item"
import { Wrap } from "./styled"

const Filter = () => {
  const filters: ExhibitionFilterType[] = ["opna bráðum", "opnar", "afstaðnar"]
  return (
    <Wrap>
      <div className="filter-box">
        {filters.map((item, index) => (
          <FilterItem key={index} name={item}></FilterItem>
        ))}
      </div>
    </Wrap>
  )
}

export default Filter

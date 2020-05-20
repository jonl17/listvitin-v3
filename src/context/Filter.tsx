import React, { createContext, useState } from 'react'
import { ExhibitionFilterType } from '~/types'

interface ContextProps {
  filter: ExhibitionFilterType;
  setFilter: React.Dispatch<React.SetStateAction<ExhibitionFilterType>>;
}

export const FilterContext = createContext({} as ContextProps)

const Filter: React.FC<any> = ({ children }) => {
  const [filter, setFilter] = useState<ExhibitionFilterType>("opnar")
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default Filter

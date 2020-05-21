import React, { createContext, useState } from 'react'

interface ContextProps {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext({} as ContextProps)

const Search: React.FC<any> = ({ children }) => {
  const [searchParam, setSearchParam] = useState("")
  return (
    <SearchContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </SearchContext.Provider>
  )
}

export default Search

import React from 'react'
import { verboseDate } from "~/shared/methods"
import { Wrap } from "./styled"

const ExhibitionDate: React.FC<{ opnun: string; lokun: string; }> = ({ opnun, lokun }) => {
  return (
    <Wrap>
      <p>{verboseDate(new Date(opnun), true)} - {verboseDate(new Date(lokun), true)}</p>
    </Wrap>
  )
}

export default ExhibitionDate

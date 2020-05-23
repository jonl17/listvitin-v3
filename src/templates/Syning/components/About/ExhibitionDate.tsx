import React from 'react'

const ExhibitionDate: React.FC<{ opnun: string; lokun: string; }> = ({ opnun, lokun }) => {
  return (
    <div>
      <p>{opnun.replace(/-/g, ".")} - {lokun.replace(/-/g, ".")}</p>
    </div>
  )
}

export default ExhibitionDate

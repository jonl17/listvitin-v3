import React from 'react'
import { Syning as SyningType } from '~/types'
import { Image } from "./styled"

interface Props {
  syning: SyningType;
}

const Syning: React.FC<Props> = ({ syning }) => {

  return (
    <Image fluid={syning.mynd.fluid}>
    </Image>
  )
}

export default Syning

import React from 'react'
import { Syning as SyningType } from '~/types'
import { Anchor, Image } from "./styled"

interface Props {
  syning: SyningType;
}

const Syning: React.FC<Props> = ({ syning }) => {

  return (
    <Anchor to={"/syningar/" + syning.slug}>
      <Image fluid={syning.mynd.fluid}>
      </Image>
    </Anchor>
  )
}

export default Syning

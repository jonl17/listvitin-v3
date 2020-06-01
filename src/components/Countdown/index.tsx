import React, { useEffect, useState } from 'react'
import { exhibitionFilter, getDaysToDate } from "~/shared/methods"
import { ExhibitionFilterType } from '~/types'
import { Container } from "./styled"

interface Props {
  opnun: string;
  lokun: string;
}

const Countdown: React.FC<Props> = ({ opnun, lokun }) => {
  const [status, setStatus] = useState<ExhibitionFilterType | undefined>(undefined)
  useEffect(() => {
    // sýnum ekkert ef sýning er afstaðin
    if (!exhibitionFilter(opnun, lokun, "afstaðnar")) {
      if (exhibitionFilter(opnun, lokun, "opnar")) {
        setStatus("opnar")
      }
      else if (exhibitionFilter(opnun, lokun, "opna bráðum")) {
        setStatus("opna bráðum")
      }
    }
  }, [])
  return (
    <Container>
      {status === "opnar" && <p><span>{getDaysToDate(new Date(lokun))}</span> dagar eftir</p>}
      {status === "opna bráðum" && <p><span>{getDaysToDate(new Date(opnun))}</span> dagar í opnun</p>}
    </Container>
  )
}

export default Countdown

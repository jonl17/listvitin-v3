import { ExhibitionFilterType, Syning } from "~/types";


export const exhibitionFilter = (syning: Syning, filter: ExhibitionFilterType) => {
  const today = new Date()
  const opnun = new Date(syning.opnun)
  const lokun = new Date(syning.lokun)
  if (filter === "opna bráðum") {
    return today < opnun
  }
  else if (filter === "opnar") {
    return today >= opnun && today <= lokun
  }
  else if (filter === "afstaðnar") {
    return today > lokun
  }
}
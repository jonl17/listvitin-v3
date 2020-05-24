import { ExhibitionFilterType } from "~/types";

export const exhibitionFilter = (syningOpnun: string, syningLokun: string, filter: ExhibitionFilterType) => {
  const today = new Date()
  const opnun = new Date(syningOpnun)
  const lokun = new Date(syningLokun)
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
export const getDaysToDate = (date: Date) => {
  // get difference in ms
  // input is always a date in the future, opnun / lokun
  const difference = date.getTime() - new Date().getTime()
  // convert to days
  const seconds = Math.floor(difference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  return days.toString()
}
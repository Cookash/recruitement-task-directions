import { useContext } from "react"
import { DataContext } from "./DataContext"

export default function History(prop) {
  const {directionsData} = useContext(DataContext)
  return (<><h2>History:</h2>
  <ul>{directionsData.origin}</ul></>)
}
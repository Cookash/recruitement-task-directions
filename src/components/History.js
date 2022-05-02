import { useContext, useEffect } from "react";
import { DataContext } from "./DataContext";
import { HistoryContext } from "./HistoryContext";

export default function History() {
  const [historyData, addToHistory] = useContext(HistoryContext);
  const { directionsData } = useContext(DataContext);
  useEffect(() => {// eslint-disable-next-line
    addToHistory([...historyData,[directionsData.origin, directionsData.destination],]);}, [directionsData]);
      return (historyData.map(id => {
        if(id[0] !== undefined && id[0] !== '' && id[1] !== '' && id[1] !== '')
            return <>
                      <hr></hr>
                      <p  key={id[0]}>
                          Origin Adress: {id[0]}
                      </p>
                      <p  key={id[1]}>
                          Destination Adress: {id[1]}
                      </p>
                  </>
        return (null)
    })
      )}

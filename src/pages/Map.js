import { React, useContext} from "react";

import { DataContext } from "../components/DataContext";
import GoBackButton from "../components/GoBackButton";
import GetMapEmbed from "../APIs/GetMapEmbed";
import ShowRouteDetails from "../components/ShowRouteDetails";

export default function Map() {
  const { directionsData } = useContext(DataContext);
  if (directionsData.length < 2 || directionsData.origin ==='' || directionsData.destination === '') {
    return (<><p>There is no data to show</p>
    <GoBackButton where="/" description="Go Back" /></>)
  } else {
  return (
    <>
      <GoBackButton where="/" description="Go Back" />
      <GetMapEmbed origin={directionsData.origin} destination={directionsData.destination}/>
      <ShowRouteDetails start={directionsData.origin} finish={directionsData.destination} />
    </>
  );
}
}

import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";

import History from "../components/History";
import { DataContext } from "../components/DataContext";

export default function Search() {
  const { changeDirectionsData } = useContext(DataContext);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const updateOriginData = (event) => {
    setOrigin(event.target.value);
  };
  const updateDirecionsData = (event) => {
    setDestination(event.target.value);
  };

  const logValue = () => {
    changeDirectionsData({ origin, destination });
  };

  return (
    <>
      <form>
        <input
          onChange={updateOriginData}
          name="origin"
          value={origin}
          placeholder="Enter Origin"
        />
        <input
          onChange={updateDirecionsData}
          name="destination"
          value={destination}
          placeholder="Enter Destination"
        />
      </form>
      <Link to={"./map"}>
        <button onClick={logValue}>Get Directions</button>
      </Link>
      <h2>History:</h2>
      <History />
    </>
  );
}

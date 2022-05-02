import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DataContext } from "./components/DataContext";

import Map from "./pages/Map";
import Search from "./pages/Search";

function App() {
  const [directionsData, changeDirectionsData] = useState([])
  const value = { directionsData, changeDirectionsData };
  return (
  <DataContext.Provider value={value}>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="map" element={<Map />} />
    </Routes>
  </DataContext.Provider>);
}

export default App;

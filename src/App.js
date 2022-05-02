import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HistoryContext } from "./components/HistoryContext";
import { DataContext } from "./components/DataContext";

import Map from "./pages/Map";
import Search from "./pages/Search";

function App() {
  const [directionsData, changeDirectionsData] = useState([]);
  const value = { directionsData, changeDirectionsData };

  const [historyData, addToHistory] = useState([]);
  const history = [historyData, addToHistory];

  return (
    <DataContext.Provider value={value}>
      <HistoryContext.Provider value={history}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </HistoryContext.Provider>
    </DataContext.Provider>
  );
}

export default App;

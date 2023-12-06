import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  // State for all bots
  const [allBots, setAllBots] = useState([])

  // UseEffect for fetching bots data
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => {
        setAllBots(data)
      })
  }, [])

  return (
    <div className="App">
      <BotsPage bots={allBots} />
    </div>
  );
}

export default App;

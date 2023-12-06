import React, { useState } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [allBots, setAllBots] = useState()
  console.log(allBots)

  useState(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => {
        setAllBots(data)
      })
  })


  return (
    <div className="App">
      <BotsPage />
    </div>
  );
}

export default App;

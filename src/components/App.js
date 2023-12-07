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
      .catch((error) => console.log("An Error occurred", error))
  }, [])

  // Function for deleting a bot from the main array
  function deleteFromMain(remainBots) {
    setAllBots(remainBots)
  }


  return (
    <div className="App">
      <BotsPage bots={allBots} handleRemove={deleteFromMain} />
    </div>
  );
}

export default App;

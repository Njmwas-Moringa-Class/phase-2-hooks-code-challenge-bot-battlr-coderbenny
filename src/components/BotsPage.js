import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const initAllBots = []
  const [allBots, setAllBots] = useState(initAllBots)

  // UseEffect for fetching bots data
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => {
        setAllBots(data)
      })
  }, [])

  // Function for removing Collection bots from main state
  function handleRemoveFromMain(botId) {
    const details = allBots.filter((bot) => bot.id === botId)
    if (allBots.includes(details)) {
      const afterBotRemove = allBots.filter((singlebot) => singlebot.id !== botId)
      setAllBots(afterBotRemove)
    }
  }

  // State for bot army
  const [myBotArmy, setMyBotArmy] = useState([])
  console.log(myBotArmy)

  // Function for removing bot from Army
  function removeFromArmy(botId) {
    const updatedArray = myBotArmy.filter((myBot) => myBot.id !== botId)
    setMyBotArmy(updatedArray)
  }

  // Function for adding bots to the army array
  function handleAddBot(botId) {
    const botDetails = allBots.find((bot) => bot.id === botId)
    if (!myBotArmy.includes(botDetails)) {
      const updatedBots = [...myBotArmy, botDetails]
      setMyBotArmy(updatedBots)
    }
  }

  return (
    <div>
      <YourBotArmy totalBots={myBotArmy} handleRemove={removeFromArmy} />
      <BotCollection allBots={allBots} addBot={handleAddBot} removeCollectionBot={handleRemoveFromMain} />
    </div>
  )
}

export default BotsPage;

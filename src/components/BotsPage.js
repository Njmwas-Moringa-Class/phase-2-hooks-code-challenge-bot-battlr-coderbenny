import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, handleRemove }) {
  //start here with your code for step one

  // State for bot army
  const [myBotArmy, setMyBotArmy] = useState([])
  console.log(myBotArmy)

  // Function for adding bot to the bot army array
  function handleAddBot(botId) {

    const botDetails = bots.find((bot) => bot.id === botId)
    if (!myBotArmy.includes(botDetails)) {
      const updatedBots = [...myBotArmy, botDetails]
      setMyBotArmy(updatedBots)
    }
  }

  function removeArmyBot(updatedArray) {
    setMyBotArmy(updatedArray)
  }

  function removeFromCollectionBots(remainBots) {
    handleRemove(remainBots)
  }

  return (
    <div>
      <YourBotArmy myBots={myBotArmy} removeBot={removeArmyBot} />
      <BotCollection allBots={bots} addBot={handleAddBot} handleRemoveBotFromCollection={removeFromCollectionBots} />
    </div>
  )
}

export default BotsPage;

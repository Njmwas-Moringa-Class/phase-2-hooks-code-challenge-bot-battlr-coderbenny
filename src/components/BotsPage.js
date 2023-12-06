import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots }) {
  //start here with your code for step one


  // State for bot army
  const [myBotArmy, setMyBotArmy] = useState([])
  console.log(myBotArmy)

  // Function for adding bot to the bot army array
  function handleAddBot(botID) {

    const botDetails = bots.find((bot) => bot.id === botID)
    if (!myBotArmy.includes(botDetails)) {
      const updatedBots = [...myBotArmy, botDetails]
      setMyBotArmy(updatedBots)
    }
  }

  return (
    <div>
      <YourBotArmy myBots={myBotArmy} />
      <BotCollection allBots={bots} addBot={handleAddBot} />
    </div>
  )
}

export default BotsPage;

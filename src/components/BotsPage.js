import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots }) {
  //start here with your code for step one


  // State for bot army
  const [myBotArmy, setMyBotArmy] = useState([])

  return (
    <div>
      <YourBotArmy myBots={myBotArmy} />
      <BotCollection allBots={bots} />
    </div>
  )
}

export default BotsPage;

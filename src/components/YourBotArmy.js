import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ myBots, removeBot }) {
  //your bot army code here...

  function removeFromArmy(botId) {
    const updatedArray = myBots.filter((myBot) => myBot.id !== botId)
    removeBot(updatedArray)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {myBots.map((myBot) => {
            return (
              <BotCard key={myBot.id} bot={myBot} handleAdd={removeFromArmy} handleRemoveBot={removeFromArmy} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

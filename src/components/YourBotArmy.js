import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ totalBots, handleRemove }) {
  //your bot army code here...

  // Function for removing bots from the army
  function handleRemoveArmy(botId) {
    handleRemove(botId)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {totalBots.map((myBot) => {
            return (
              <BotCard key={myBot.id} bot={myBot} handleAdd={() => handleRemoveArmy(myBot.id)} handleRemoveBot={() => handleRemoveArmy(myBot.id)} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

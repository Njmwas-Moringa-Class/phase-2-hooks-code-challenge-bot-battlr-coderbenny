import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, removeCollectionBot, addBot }) {

  // Your code here

  // Function for removing bot from the main array
  function deletingBot(botId) {
    removeCollectionBot(botId)
  }


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {allBots.map((oneBot) => {
          return (
            <BotCard key={oneBot.id} bot={oneBot} handleAdd={addBot} handleRemoveBot={deletingBot} />
          )
        })}
      </div>
    </div>
  );
}

export default BotCollection;

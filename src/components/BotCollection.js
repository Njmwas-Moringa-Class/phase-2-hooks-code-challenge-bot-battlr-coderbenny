import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, addBot }) {
  // Your code here
  function deletingBot(botId) {
    const remainBots = allBots.filter((bot) => bot.id !== botId)
    console.log(remainBots)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {allBots.map((myBot) => {
          return (
            <BotCard key={myBot.id} bot={myBot} handleAdd={addBot} handleRemoveBot={deletingBot} />
          )
        })}
      </div>
    </div>
  );
}

export default BotCollection;

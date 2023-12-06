import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, addBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {allBots.map((myBot) => {
          return (
            <BotCard bot={myBot} handleAdd={addBot} />
          )
        })}
      </div>
    </div>
  );
}

export default BotCollection;

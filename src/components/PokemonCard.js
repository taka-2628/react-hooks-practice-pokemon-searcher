import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;
  const { front, back} = sprites;
  
  const [isFront, setIsFront] = useState(true)
  
  function toggleSprite(){
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div onClick={toggleSprite}>
        <div className="image">
          <img alt="oh no!" src={isFront ? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

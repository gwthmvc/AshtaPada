import { useState } from "react";
import "../styles/Button.css"

export default function Button() {

     function rollDice(){

        const diceRolls = [1, 2, 3, 4, 8];
  
        const [index, setIndex] = useState(0);

  };


        return 

        }
    return (

        <div className="button-container">
            <button 
            className='btn'
            onClick={rollDice}
            >Click to Roll</button>
        </div>
    
);
}
import { useState } from "react";
import "../styles/Button.css";

export default function Button() {
    const [roll, setRoll] = useState(0);

    function rollDice() {
        const diceRolls = [1, 2, 3, 4, 8];
        const randomIndex = Math.floor(Math.random() * diceRolls.length);
        setRoll(diceRolls[randomIndex]);
    }

    return (
        <div className="button-container">
            <button className="btn" onClick={rollDice}>
                Click to Roll
            </button>
            <span>Roll: {roll}</span>
        </div>
    );
}
import Header from "../components/Header";
import Button from "../components/Button";
import Board from "../components/Board";
import "../styles/GamePage.css"
import RollBoard from "../components/RollBoard";
import PlayerBoard from "../components/PlayerBoard";

export default function GamePage(){
    return(
        <>
        <Header />
        <div className="FullLayout">
            
            <PlayerBoard />
            
            <div className="Gamepage">
            <Board />
            
            </div>
            <div className="ScoreBoard">
                <RollBoard/>
            </div>
         </div>
         <Button />
        </>
       
    )
}
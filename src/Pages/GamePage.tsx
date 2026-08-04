import Header from "../components/Header";
import Button from "../components/Button";
import Board from "../components/Board";
import "../styles/GamePage.css"
import RollBoard from "../components/RollBoard";

export default function GamePage(){
    return(
        <>
        <div className="FullLayout">
            <div className="PlayerBoard"></div>
            <div className="Gamepage">
            <Header />
            <Board />
            <Button />
            </div>
            <div className="ScoreBoard">
                <RollBoard/>
            </div>
         </div>
        </>
       
    )
}
import Header from "../components/Header";
import Button from "../components/Button";
import Board from "../components/Board";
import "../styles/GamePage.css"

export default function GamePage(){
    return(
        <>
        <div className="Gamepage">
        <Header />
        <Board />
        <Button />
        </div>
        </>
    )
}
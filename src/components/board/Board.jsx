
import Cell from "../cell/Cell";
import '../board/Board.css'
import { useState } from "react";

const Board = () => {

  const [cellClass, setCellClass] = useState("plain-cell");
  const [command, setCommand] = useState("")

  

  const renderCells = () => (
    Array.from({ length: 25 }, (_, index) => <Cell key={index} id={index + 1} className={cellClass} text={"tadaaa"}/>)
  );
    return(
        <>
          <div id='board'>
            
         {renderCells()}

          </div>
        </>
    )
}
export default Board;
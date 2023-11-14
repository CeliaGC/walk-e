
import Cell from "../cell/Cell";
import '../board/Board.css'
import { useState } from "react";

const Board = () => {

  const [cellClass, setCellClass] = useState("plain-cell");
  const [command, setCommand] = useState("")
  const handleChange = event => {
    setCommand(event.target.value);

    console.log('value is:', event.target.value);
  }

  

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
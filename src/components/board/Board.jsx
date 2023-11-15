import React, { useState } from "react";
import CommandForm from "../commandForm/commandForm";
import Cell from "../cell/Cell";
import "../board/Board.css";

const Board = () => {

  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, facing: "" });
  const [wallPosition, setWallPosition] = useState({ x: 0, y: 0});
  const [cellId, setCellId] = useState(0);
  const [arrayOfCells, setArrayOfCells] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      className: "plain-cell",  
    }))
  );

  const updateCellState = (newArrayOfCells) => {
    setArrayOfCells(newArrayOfCells);
  };

  const locateCell = () =>{
        let cellNumber = (5 - robotPosition.y) * 5 + parseInt(robotPosition.x)
        setCellId(cellNumber)
       }

  const handleCommandSubmit = (command) => {
    const [action, params] = command.split(' ');

    if(command=== 'MOVE'){

        if(robotPosition.facing = 'NORTH'){
          setRobotPosition({x:robotPosition.x, y:parseInt(robotPosition.y) + 1, facing:robotPosition.facing})
          locateCell()
          arrayOfCells.forEach((cell) => cell.id === cellId? cell.className = 'ROBOT-'+robotPosition.facing : cell.className = 'plain-cell')

        }
    }else{
      const [y, x, facing] = params.split(',')

   

    arrayOfCells.forEach(cell => {
      switch (action) {
      case 'PLACE_ROBOT':
        // Actualizar el estado del robot con las nuevas coordenadas y orientación
        setRobotPosition({ x: x, y: y, facing:facing});
        locateCell();
        
        
        
        if(cell.id === cellId){
          cell.className = "ROBOT-"+ facing;
          
        }
      break;
      case 'PLACE_WALL':
        setWallPosition({x:x, y:y})

        const locateWall = () =>{
          let wallCell = (5 - wallPosition.y) * 5 + parseInt(wallPosition.x)
          setCellId(wallCell)
        }
        locateWall()
        if(cell.id === cellId){
          cell.className = "PLACE_WALL"
        }
      break;
     

      // Otros casos para otros tipos de comandos como MOVE, PLACE_WALL, etc.

      default:
        console.log('Comando no reconocido');
    }
    //   const newArrayOfCells = 

    // // Llama a la función de actualización proporcionada desde las props
    // updateCellState(newArrayOfCells);

    });
    }

   
  };

  const renderCells = () =>
    
    arrayOfCells.map((cell) => (
    
      <Cell key={cell.id} id={cell.id} className={cell.className } y/>
    
    ));

  return (
    <>
      <div id="board" className="grid-order">{renderCells()}</div>
      {/* Pasa la función de actualización como prop a CommandForm */}
      <CommandForm updateCellState={updateCellState} onCommandSubmit={handleCommandSubmit} />
    </>
  );
};

export default Board;

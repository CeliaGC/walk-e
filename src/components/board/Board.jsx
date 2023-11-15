import React, { useState } from "react";
import CommandForm from "../commandForm/commandForm";
import Cell from "../cell/Cell";
import "../board/Board.css";

const Board = () => {

  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, facing: "" });
  const [cellId, setCellId]=useState(0)

  const [arrayOfCells, setArrayOfCells] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      className: "plain-cell",
      
      
    }))
  );


  

  const updateCellState = (newArrayOfCells) => {
    setArrayOfCells(newArrayOfCells);
  };

  const handleCommandSubmit = (command) => {
    const [action, params] = command.split(' ');

    arrayOfCells.forEach(cell => {
      switch (action) {
      case 'PLACE_ROBOT':
        const [y, x, facing] = params.split(',');
        // Actualizar el estado del robot con las nuevas coordenadas y orientación
        setRobotPosition({ x: x, y: y, facing:facing})
        const cellId = (5 - y) * 5 + parseInt(x);
        if(cell.id === cellId){
         
          cell.className = "ROBOT-"+ facing;
          
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
    

    // Lógica para interpretar y ejecutar el comando
    console.log("Executing command:" + command);
    // Actualizar el estado del robot si es necesario

    // Por ejemplo, actualiza las celdas de manera ficticia
   
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

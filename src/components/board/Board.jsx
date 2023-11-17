import React, { useEffect, useState } from "react";
import CommandForm from "../commandForm/commandForm";
import Cell from "../cell/Cell";
import "../board/Board.css";

const Board = () => {


  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, facing: "" });
  const [wallPosition, setWallPosition] = useState({ x: 0, y: 0 });
  const [cellId, setCellId] = useState(0);
  const [arrayOfCells, setArrayOfCells] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      className: "plain-cell",
    }))
  );
  useEffect(() => {
    // locateCell();

    setArrayOfCells((prevArray) => {
      const newArray = [...prevArray];

      newArray.forEach((cell) => {
        if (cell.id === cellId) {
          if(cellId === (5 - wallPosition.y) * 5 + wallPosition.x && wallPosition.x != 0 && cell.className === "plain-cell"){
            cell.className = "PLACE_WALL"
          }else if(cell.id != ((5 - wallPosition.y) * 5 + wallPosition.x) && cell.className === robotPosition.facing){
            cell.className = cell.className
          }else if(cellId=== (5 - robotPosition.y) * 5 + robotPosition.x && cell.className !='PLACE_WALL'){
            cell.className = 'ROBOT-' + robotPosition.facing;
          }
        } else if(cell.id === (5 - robotPosition.y) * 5 + robotPosition.x || cell.className === "PLACE_WALL"){
          cell.className = cell.className
        } else{
          cell.className = 'plain-cell'
        }
      });

      return newArray;
    });
  }, [robotPosition, cellId, wallPosition]);

  const handleCommandSubmit = (command) => {
    const [action, params] = command.split(' ');
    
    if (command === "MOVE"){
    const arrayOfWalls = arrayOfCells.filter((c) => c.className ==="PLACE_WALL");  
    
      if (robotPosition.facing === 'NORTH') {
        let WallId = (5 - robotPosition.y-1) * 5 + robotPosition.x;
        let blockingCell = arrayOfWalls.find((w) => w.id == WallId);
        if (!blockingCell){
          setCellId((5 - robotPosition.y-1) * 5 + robotPosition.x);
          setRobotPosition({x:robotPosition.x, y:robotPosition.y+1, facing:robotPosition.facing})
        } 
      } else if(robotPosition.facing === 'EAST'){
        let WallId = (5 - robotPosition.y) * 5 + robotPosition.x+1;
        let blockingCell = arrayOfWalls.find((w) => w.id == WallId);
        if(!blockingCell){
          setCellId((5 - robotPosition.y) * 5 + robotPosition.x+1);
          setRobotPosition({x:robotPosition.x+1, y:robotPosition.y, facing:robotPosition.facing})  
        } 
      }else if(robotPosition.facing === 'SOUTH'){
        let WallId = (5 - robotPosition.y+1) * 5 + robotPosition.x;
        let blockingCell = arrayOfWalls.find((w) => w.id == WallId);
        if(!blockingCell)
        {
          setCellId((5 - robotPosition.y+1) * 5 + robotPosition.x);
          setRobotPosition({x:robotPosition.x, y:robotPosition.y-1, facing:robotPosition.facing})            
        }

      }else if (robotPosition.facing === 'WEST'){
        let WallId = (5 - robotPosition.y) * 5 + robotPosition.x-1;
        let blockingCell = arrayOfWalls.find((w) => w.id == WallId);
        if(!blockingCell){
          setCellId((5 - robotPosition.y) * 5 + robotPosition.x-1);
          setRobotPosition({x:robotPosition.x-1, y:robotPosition.y, facing:robotPosition.facing})            
        }
      }
    } else {
      const [y, x, facing] = params.split(',');
      const parsedX = Number(x);
      const parsedY = Number(y);
      if(parsedX <= 5 && parsedY <= 5){
        switch (action) {
        case 'PLACE_ROBOT':
          if(facing === "NORTH" || facing==="EAST" || facing==="SOUTH" || facing==="WEST")
          {
            setRobotPosition({
        x: parsedX,
        y: parsedY,
        facing: String(facing),
        });
          setCellId((5 - parsedY) * 5 + parsedX)
          }
          
          break;
        case 'PLACE_WALL':
          if(!facing){
            setWallPosition({ x: parsedX, y: parsedY });
          setCellId((5 - parsedY) * 5 + parsedX);
          }
          
          break;
        default:
          console.log('Comando no reconocido');
      }
      }
      
    }
  };

  const renderCells = () =>
    arrayOfCells.map((cell) => <Cell key={cell.id} id={cell.id} className={cell.className} y />);

  return (
    <>
      <div id="board" className="grid-order">
        {renderCells()}
      </div>
      {/* Pasa la función de actualización como prop a CommandForm */}
      <CommandForm onCommandSubmit={handleCommandSubmit} />
    </>
  );
};

export default Board;
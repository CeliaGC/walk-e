import React, { useEffect, useState, useCallback } from "react";
import CommandForm from "../commandForm/CommandForm";
import Cell from "../cell/Cell";
import "../board/Board.css";
import ReportModal from '../reportModal/ReportModal';
import { UpdateCellState } from "../../logic/UpdateCellState";
import { Title } from "../title/Title";

const Board = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, facing: "" });
  const [wallPosition, setWallPosition] = useState({ x: 0, y: 0 });
  const [cellId, setCellId] = useState(0);
  const [robotReport, setRobotReport] = useState("");
  const [showModal, setShowModal] = useState(false);
  const createInitialCells = () => {
    const cells = Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      className: "plain-cell",
      text: "" // Agrega una propiedad 'text'
    }));
  
    // Asigna texto específico a las celdas con id 5 y 20
    cells[4].text = "5,5";
    cells[20].text = "1,1";
  
    return cells;
  };
  const [arrayOfCells, setArrayOfCells] = useState(createInitialCells);
 

  useEffect(() => {


    setArrayOfCells((prevArray) => {
      const newArray = [...prevArray];

      newArray.forEach((cell) => {
        if (cell.id === cellId) {
          if (cellId === (5 - wallPosition.y) * 5 + wallPosition.x && wallPosition.x != 0 && cell.className === "plain-cell") {
            cell.className = "PLACE_WALL"
          } else if (cell.id != ((5 - wallPosition.y) * 5 + wallPosition.x) && cell.className === robotPosition.facing) {
            cell.className = cell.className
          } else if (cellId === (5 - robotPosition.y) * 5 + robotPosition.x && cell.className != 'PLACE_WALL') {
            cell.className = 'ROBOT-' + robotPosition.facing;
          }
        } else if (cell.id === (5 - robotPosition.y) * 5 + robotPosition.x || cell.className === "PLACE_WALL") {
          cell.className = cell.className
        } else {
          cell.className = 'plain-cell'
        }
        return cell;
      });

      return newArray;
      
    });}, [robotPosition, cellId, wallPosition]);


    const handleCommandSubmit = useCallback((command) => {
      UpdateCellState({
        command,
        robotPosition,
        wallPosition,
        cellId,
        robotReport,
        setRobotReport,
        setRobotPosition,
        setCellId,
        setShowModal,
        arrayOfCells,
        setArrayOfCells,
        setWallPosition,
      });}, [robotPosition,
             wallPosition, 
             cellId, 
             robotReport, 
             setRobotReport, 
             setRobotPosition, 
             setCellId, 
             setShowModal, 
             arrayOfCells, 
             setArrayOfCells, 
             setWallPosition]);
    

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderCells = () => arrayOfCells.map((cell) => <Cell key={cell.id} id={cell.id} className={cell.className} text={cell.text}/>);
  
    
  


  return (
    <>
      <div id="board" className="grid-order">
        {renderCells()}
      </div>
      <CommandForm onCommandSubmit={handleCommandSubmit} />
      {showModal && <ReportModal onHide={handleCloseModal} text={robotReport} />}
      <Title/>
    </>
  );
};

export default Board;

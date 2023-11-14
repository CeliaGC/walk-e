import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/board/Board'
import CommandForm from './components/commandForm/commandForm'
import Cell from './components/cell/Cell'



function App() {
  
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, facing: "NORTH" });

  const handleCommandSubmit = (command) => {
    // Lógica para interpretar y ejecutar el comando
    console.log(`Executing command: ${command}`);
    // Actualizar el estado del robot si es necesario
  };
  return(
    <>
    <Board/>
    <CommandForm onCommandSubmit={handleCommandSubmit} />
    

  </>
  )
  

}

export default App

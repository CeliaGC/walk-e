import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/board/Board'
import CommandForm from './components/commandForm/commandForm'
import Cell from './components/cell/Cell'



function App() {
  
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, facing: "" });

  const handleCommandSubmit = (command) => {

    const [action, params] = command.split(' ');
    switch (action) {
      case 'PLACE_ROBOT':
        const [x, y, facing] = params.split(',');
        // Actualizar el estado del robot con las nuevas coordenadas y orientación
        setRobotPosition({ x: x, y: y, facing:facing });
        console.log(robotPosition)
        break;
  
      // Otros casos para otros tipos de comandos como MOVE, PLACE_WALL, etc.
  
      default:
        console.log('Comando no reconocido');
    }
    
    // command.split((/(\d)/))

    // Lógica para interpretar y ejecutar el comando
    console.log("Executing command:" + command);
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

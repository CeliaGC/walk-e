import { render, fireEvent, screen, act } from '@testing-library/react';
import Board from './Board.jsx';
import '@testing-library/jest-dom';
import App from '../../App.jsx';
import { UpdateCellState } from '../../logic/UpdateCellState.js';

jest.mock('../../logic/UpdateCellState', () => ({
  __esModule: true,
  UpdateCellState: jest.fn(({ command, robotPosition, setShowModal, setRobotReport, setRobotPosition, setCellId,arrayOfCells}) => {
    
    const [action, params] = command.split(' ');
    if (command === "REPORT") {
      // Simular el comportamiento específico para el comando "REPORT"
      if (robotPosition.x !== 0 && robotPosition.y !== 0) {
        setRobotReport(`${robotPosition.y},${robotPosition.x},${robotPosition.facing}`);
        setShowModal(true);
      }
    } else if (command === "MOVE" || command === "LEFT" || command === "RIGHT") {
      const arrayOfWalls = arrayOfCells.filter((c) => c.className === "PLACE_WALL");
      if (robotPosition.facing === 'SOUTH') {
        switch (command) {
          case "MOVE":
              let nextCell = (5 - robotPosition.y + 1) * 5 + robotPosition.x;
              let blockingCell = arrayOfWalls.find((w) => w.id == nextCell);
              let oppositeRowCell = (5 - robotPosition.y - 4) * 5 + robotPosition.x;
              let blockingORCell = arrayOfWalls.find((w) => w.id === oppositeRowCell)
              if (!blockingCell && robotPosition.y - 1 >= 1) {
                  setCellId((5 - robotPosition.y + 1) * 5 + robotPosition.x);
                  setRobotPosition({ x: robotPosition.x, y: robotPosition.y - 1, facing: robotPosition.facing })
              } else if (!blockingORCell && !blockingCell) {
                  setCellId((5 - robotPosition.y - 4) * 5 + robotPosition.x);
                  setRobotPosition({ x: robotPosition.x, y: robotPosition.y + 4, facing: robotPosition.facing })
              }
              break;
          case "LEFT":
              setCellId((5 - robotPosition.y) * 5 + robotPosition.x)
              setRobotPosition({ x: robotPosition.x, y: robotPosition.y, facing: "EAST" })
              break;
      }
  }else if (robotPosition.facing === 'EAST') {
    switch (command) {
        case "MOVE":
            let nextCell = (5 - robotPosition.y) * 5 + robotPosition.x + 1;
            let blockingCell = arrayOfWalls.find((w) => w.id == nextCell);
            let firstRowCell = (5 - robotPosition.y) * 5 + robotPosition.x - 4;
            let firstRCBlocked = arrayOfWalls.find((w) => w.id === firstRowCell);
            if (!blockingCell && robotPosition.x + 1 <= 5) {
                setCellId((5 - robotPosition.y) * 5 + robotPosition.x + 1);
                setRobotPosition({ x: robotPosition.x + 1, y: robotPosition.y, facing: robotPosition.facing })
            }                        else if (!firstRCBlocked && !blockingCell) {
              setCellId((5 - robotPosition.y) * 5 + robotPosition.x - 4);
              setRobotPosition({ x: robotPosition.x - 4, y: robotPosition.y, facing: robotPosition.facing })
          }
          break;}}

    } else {
        const [y, x, facing] = params.split(',');
        const parsedX = Number(x);
        const parsedY = Number(y);
        if (parsedX <= 5 && parsedY <= 5) {
            switch (action) {
                case 'PLACE_ROBOT':
                    if (facing === "NORTH" || facing === "EAST" || facing === "SOUTH" || facing === "WEST") {
                        setRobotPosition({
                            x: parsedX,
                            y: parsedY,
                            facing: String(facing),
                        });
                        setCellId((5 - parsedY) * 5 + parsedX)
                    }

                    break;
            }}
    }
  }),
}));

jest.mock('../../App.jsx', () => ({
  __esModule: true,
  App: jest.fn(),
}));

test('simula la secuencia de comandos y muestra el informe correcto', async () => {
  render(<Board />);

  const textareaElement = screen.getByTestId('command');
  const commandValue = 'PLACE_ROBOT 3,4,SOUTH';

  await act(async () => {
    fireEvent.change(textareaElement, { target: { value: commandValue } });
    fireEvent.click(screen.getByTestId('submit'));

    fireEvent.change(textareaElement, { target: { value: 'MOVE' } });
    fireEvent.click(screen.getByTestId('submit'));

    
  });

  await act(async () => {

    fireEvent.change(textareaElement, { target: { value: 'MOVE' } });
    fireEvent.click(screen.getByTestId('submit'));

    fireEvent.change(textareaElement, { target: { value: 'LEFT' } });
    fireEvent.click(screen.getByTestId('submit'));

    fireEvent.change(textareaElement, { target: { value: 'MOVE' } });
    fireEvent.click(screen.getByTestId('submit'));
  });

  await act(async () => {
    fireEvent.change(textareaElement, { target: { value: 'MOVE' } });
    fireEvent.click(screen.getByTestId('submit'));


  });

  await act(async () => {
    fireEvent.change(textareaElement, { target: { value: 'REPORT' } });
    fireEvent.click(screen.getByTestId('submit'));
    await new Promise(resolve => setTimeout(resolve, 10));
  });


  // expect(UpdateCellState).toHaveBeenCalledTimes(9);
  expect(screen.getByTestId('final-report').textContent).toBe('1,1,EAST');


  });

  
  // await act(async () => {
  //   fireEvent.change(textareaElement, { target: { value: 'REPORT' } });
  //   fireEvent.click(screen.getByTestId('submit'));
    // await new Promise(resolve => setTimeout(resolve, 5));
  // });


  // expect(screen.getByTestId('final-report')).toBeInTheDocument();





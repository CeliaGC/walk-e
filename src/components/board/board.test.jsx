import { render, fireEvent, screen, act } from '@testing-library/react';
import Board from './Board';
import '@testing-library/jest-dom';
import App from '../../App.jsx';
import { UpdateCellState } from '../../logic/UpdateCellState.js';

jest.mock('../../logic/UpdateCellState', () => ({
  __esModule: true,
  UpdateCellState: jest.fn(({ command, robotPosition, setShowModal, setRobotReport, setRobotPosition, setCellId}) => {
    
    const [action, params] = command.split(' ');
    if (command === "REPORT") {
      // Simular el comportamiento específico para el comando "REPORT"
      if (robotPosition.x !== 0 && robotPosition.y !== 0) {
        setRobotReport(`${robotPosition.y},${robotPosition.x},${robotPosition.facing}`);
        setShowModal(true);
      }
    } else if (command === "MOVE" || command === "LEFT" || command === "RIGHT") {
      // Implementar lógica específica para estos comandos
      // ...
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

    
    await new Promise(resolve => setTimeout(resolve, 5));
  });

  // Verificar que UpdateCellState fue llamado con el comando correcto
//   expect(UpdateCellState).toHaveBeenCalledWith({
//     command: commandValue,
//     arrayOfCells: [
//          {
//            "className": "plain-cell",
//            "id": 1,
//          },
//         {
//            "className": "plain-cell",
//            "id": 2,
//          },
//         {
//            "className": "plain-cell",
//            "id": 3,
//          },
//          {
//            "className": "plain-cell",
//            "id": 4,
//          },
//          {
//            "className": "plain-cell",
//            "id": 5,
//          },
//          {
//            "className": "plain-cell",
//            "id": 6,
//          },
//          {
//            "className": "plain-cell",
//            "id": 7,
//          },
//          {
//            "className": "plain-cell",
//            "id": 8,
//          },
//          {
//            "className": "plain-cell",
//            "id": 9,
//          },
//          {
//            "className": "plain-cell",
//            "id": 10,
//          },
//          {
//            "className": "plain-cell",
//            "id": 11,
//          },
//          {
//            "className": "plain-cell",
//            "id": 12,
//          },
//          {
//            "className": "plain-cell",
//            "id": 13,
//          },
//           {
//            "className": "ROBOT-SOUTH",
//            "id": 14,
//          },
//          {
//            "className": "plain-cell",
//            "id": 15,
//          },
//          {
//            "className": "plain-cell",
//            "id": 16,
//          },
//          {
//            "className": "plain-cell",
//            "id": 17,
//          },
//          {
//            "className": "plain-cell",
//            "id": 18,
//          },
//          {
//            "className": "plain-cell",
//            "id": 19,
//          },
//          {
//            "className": "plain-cell",
//            "id": 20,
//          },
//          {
//            "className": "plain-cell",
//            "id": 21,
//          },
//          {
//            "className": "plain-cell",
//            "id": 22,
//          },
//          {
//            "className": "plain-cell",
//            "id": 23,
//          },
//          {
//            "className": "plain-cell",
//            "id": 24,
//          },
//          {
//            "className": "plain-cell",
//            "id": 25,
//          }
//        ],
//     robotPosition: { x: 0, y: 0, facing: '' }, 
//     wallPosition: { x: 0, y: 0}, 
//     cellId: 0,
//     robotReport: "",
//     setShowModal: expect.any(Function),
//     setRobotReport: expect.any(Function),
//     setRobotPosition: expect.any(Function),
//     setCellId: expect.any(Function),
//     setArrayOfCells: expect.any(Function),
//     setWallPosition: expect.any(Function),
//   });

  await act(async () => {
    fireEvent.change(textareaElement, { target: { value: 'REPORT' } });
    fireEvent.click(screen.getByTestId('submit'));

    
    await new Promise(resolve => setTimeout(resolve, 5));
  });

//   expect(UpdateCellState).toHaveBeenCalledWith({
//     command: 'REPORT',
//     arrayOfCells: [
//          {
//            "className": "plain-cell",
//            "id": 1,
//          },
//         {
//            "className": "plain-cell",
//            "id": 2,
//          },
//         {
//            "className": "plain-cell",
//            "id": 3,
//          },
//          {
//            "className": "plain-cell",
//            "id": 4,
//          },
//          {
//            "className": "plain-cell",
//            "id": 5,
//          },
//          {
//            "className": "plain-cell",
//            "id": 6,
//          },
//          {
//            "className": "plain-cell",
//            "id": 7,
//          },
//          {
//            "className": "plain-cell",
//            "id": 8,
//          },
//          {
//            "className": "plain-cell",
//            "id": 9,
//          },
//          {
//            "className": "plain-cell",
//            "id": 10,
//          },
//          {
//            "className": "plain-cell",
//            "id": 11,
//          },
//          {
//            "className": "plain-cell",
//            "id": 12,
//          },
//          {
//            "className": "plain-cell",
//            "id": 13,
//          },
//           {
//            "className": "ROBOT-SOUTH",
//            "id": 14,
//          },
//          {
//            "className": "plain-cell",
//            "id": 15,
//          },
//          {
//            "className": "plain-cell",
//            "id": 16,
//          },
//          {
//            "className": "plain-cell",
//            "id": 17,
//          },
//          {
//            "className": "plain-cell",
//            "id": 18,
//          },
//          {
//            "className": "plain-cell",
//            "id": 19,
//          },
//          {
//            "className": "plain-cell",
//            "id": 20,
//          },
//          {
//            "className": "plain-cell",
//            "id": 21,
//          },
//          {
//            "className": "plain-cell",
//            "id": 22,
//          },
//          {
//            "className": "plain-cell",
//            "id": 23,
//          },
//          {
//            "className": "plain-cell",
//            "id": 24,
//          },
//          {
//            "className": "plain-cell",
//            "id": 25,
//          }
//        ],
//     robotPosition: { x: 4, y: 3, facing: 'SOUTH' }, 
//     wallPosition: { x: 0, y: 0}, 
//     cellId: 14,
//     robotReport: "",
//     setShowModal: expect.any(Function),
//     setRobotReport: expect.any(Function),
//     setRobotPosition: expect.any(Function),
//     setCellId: expect.any(Function),
//     setArrayOfCells: expect.any(Function),
//     setWallPosition: expect.any(Function),
//   });

//   Verificar que el elemento con el data-testid 'final-report' esté presente
  expect(screen.getByTestId('final-report')).toBeInTheDocument();
  expect(screen.getByTestId('final-report').textContent).toBe('3,4,SOUTH');


});



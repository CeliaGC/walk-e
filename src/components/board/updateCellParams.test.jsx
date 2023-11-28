import { render, fireEvent,screen, getByTestId, waitFor} from '@testing-library/react';
import Board from './Board';
import '@testing-library/jest-dom';
import ReportModal from '../reportModal/ReportModal';
import { UpdateCellState } from '../../logic/UpdateCellState';
import App from '../../App';

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

test('sumbit calls updateCellState with parameters', async () => {
  render(<Board/>);

  const textareaElement = screen.getByTestId('command');
  const commandValue = 'PLACE_ROBOT 1,4,NORTH';

  fireEvent.change(textareaElement, { target: { value: 'PLACE_ROBOT 1,4,NORTH' } });

  fireEvent.click(screen.getByTestId('submit'));

    // fireEvent.change(screen.getByTestId('command'), { target: { value: 'REPORT' } });
    // fireEvent.click(screen.getByTestId('submit'));
  
    expect(UpdateCellState).toHaveBeenCalledWith({
    command: commandValue,
    arrayOfCells: [
         {
           "className": "plain-cell",
           "id": 1,
           "text": ""
         },
        {
           "className": "plain-cell",
           "id": 2,
           "text": ""
         },
        {
           "className": "plain-cell",
           "id": 3,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 4,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 5,
           "text": "5,5"
         },
         {
           "className": "plain-cell",
           "id": 6,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 7,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 8,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 9,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 10,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 11,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 12,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 13,
           "text": ""
         },
          {
           "className": "plain-cell",
           "id": 14,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 15,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 16,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 17,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 18,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 19,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 20,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 21,
           "text": "1,1",
         },
         {
           "className": "plain-cell",
           "id": 22,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 23,
           "text": ""
         },
         {
           "className": "ROBOT-NORTH",
           "id": 24,
           "text": ""
         },
         {
           "className": "plain-cell",
           "id": 25,
           "text": ""
         }
       ],
    robotPosition: { x: 0, y: 0, facing: '' }, 
    wallPosition: { x: 0, y: 0}, 
    cellId: 0,
    robotReport: "",
    setShowModal: expect.any(Function),
    setRobotReport: expect.any(Function),
    setRobotPosition: expect.any(Function),
    setCellId: expect.any(Function),
    setArrayOfCells: expect.any(Function),
    setWallPosition: expect.any(Function),
  });

});

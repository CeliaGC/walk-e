import { render, fireEvent, screen, act } from '@testing-library/react';
import Board from './Board.jsx';
import '@testing-library/jest-dom';
import App from '../../App.jsx';
import { UpdateCellState } from '../../logic/UpdateCellState.js';

jest.mock('../../logic/UpdateCellState', () => ({
    __esModule: true,
    UpdateCellState: jest.fn(({ command, robotPosition, setShowModal, setRobotReport, setRobotPosition, setCellId, arrayOfCells }) => {

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

                }
            }
        }
    }),
}));
test('simulates command lines and shows correct report', async () => {
    render(<Board />);

    const textareaElement = screen.getByTestId('command');
    const commandValue = 'PLACE_ROBOT 3,4,SOUTH';

    await act(async () => {
        fireEvent.change(textareaElement, { target: { value:'PLACE_ROBOT 3,4,SOUTH' } });
        fireEvent.click(screen.getByTestId('submit'));

        fireEvent.change(textareaElement, { target: { value: 'MOVE' } });
        fireEvent.click(screen.getByTestId('submit'));

        fireEvent.change(textareaElement, { target: { value: 'LEFT' } });
        fireEvent.click(screen.getByTestId('submit'));

    });

    expect(UpdateCellState).toHaveBeenCalledTimes(3);


});
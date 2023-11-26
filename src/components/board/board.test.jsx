import { render, fireEvent, screen, waitFor,act} from '@testing-library/react';
import Board from './Board';
import '@testing-library/jest-dom';
import { UpdateCellState } from '../../logic/UpdateCellState.js';


jest.mock('../../logic/UpdateCellState', () => ({
  UpdateCellState: jest.fn(),
}));

test('simula la secuencia de comandos y muestra el informe correcto', async () => {
  render(<Board />);

  const textareaElement = screen.getByTestId('command');

  fireEvent.change(textareaElement, { target: { value: 'PLACE_ROBOT 3,3,NORTH' } });
  fireEvent.click(screen.getByTestId('submit'));

  await act(async() => {
    fireEvent.change(screen.getByTestId('command'), { target: { value: 'REPORT' } });
    fireEvent.click(screen.getByTestId('submit'));
  });

  // Verifica cuántas veces se llamó a la función mockeada
  expect(UpdateCellState).toHaveBeenCalledTimes(2);

  // Verifica que el elemento con el data-testid 'report' esté presente
  expect(screen.getByTestId('final-report')).toBeInTheDocument();
});

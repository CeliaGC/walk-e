import { render, fireEvent,screen, getByTestId, waitFor} from '@testing-library/react';
import Board from './Board';
import '@testing-library/jest-dom';
import ReportModal from '../reportModal/ReportModal';
import { UpdateCellState } from '../../logic/UpdateCellState';
import App from '../../App';

jest.mock('../../logic/UpdateCellState', () => ({
  UpdateCellState: jest.fn(),
}));

test('simula la secuencia de comandos y muestra el informe correcto', async () => {
  render(<App/>);

  const textareaElement = screen.getByTestId('command');

  fireEvent.change(textareaElement, { target: { value: 'PLACE_ROBOT 3,3,NORTH' } });

  fireEvent.click(screen.getByTestId('submit'));

    fireEvent.change(screen.getByTestId('command'), { target: { value: 'REPORT' } });
    fireEvent.click(screen.getByTestId('submit'));
  
  expect(require('../../logic/UpdateCellState').UpdateCellState).toHaveBeenCalledTimes(2);

});

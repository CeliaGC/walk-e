import { render, fireEvent,screen, getByTestId, waitFor} from '@testing-library/react';
import Board from './Board';
import '@testing-library/jest-dom';
import ReportModal from '../reportModal/ReportModal';
import { UpdateCellState } from '../../logic/UpdateCellState';

jest.mock('../../logic/UpdateCellState', () => ({
  UpdateCellState: jest.fn(),
}));
// jest.mock('../../logic/updateCellState', () => () => UpdateCellState);

test('simula la secuencia de comandos y muestra el informe correcto', async () => {
  render(<Board/>);

  // Render the component
  // const finalReport = screen.getByText('5,5,EAST');
  const textareaElement = screen.getByTestId('command');
  // const textReport = screen.getByTestId('report');
  // const textReport = screen.getByTestId('final-report'); // Cambiado aquí

  // expect(screen.queryByText('5,5,EAST')).toBeNull();

  // Ingresa comandos
  fireEvent.change(textareaElement, { target: { value: 'PLACE_ROBOT 3,3,NORTH' } });

  // // Continue with your test logic...

  fireEvent.click(screen.getByTestId('submit'));

  // fireEvent.change(screen.getByTestId('command'), { target: { value: 'PLACE_WALL 3,5' } });
  // fireEvent.click(screen.getByTestId('submit'));

  // fireEvent.change(screen.getByTestId('command'), { target: { value: 'MOVE' } });
  // fireEvent.click(screen.getByTestId('submit'));

  // fireEvent.change(screen.getByTestId('command'), { target: { value: 'MOVE' } });
  // fireEvent.click(screen.getByTestId('submit'));

  // fireEvent.change(screen.getByTestId('command'), { target: { value: 'RIGHT' } });
  // fireEvent.click(screen.getByTestId('submit'));

  // fireEvent.change(screen.getByTestId('command'), { target: { value: 'MOVE' } });
  // fireEvent.click(screen.getByTestId('submit'));

  // fireEvent.change(screen.getByTestId('command'), { target: { value: 'MOVE' } });
  // fireEvent.click(screen.getByTestId('submit'));

 
    fireEvent.change(screen.getByTestId('command'), { target: { value: 'REPORT' } });
    fireEvent.click(screen.getByTestId('submit'));
  

  expect(require('../../logic/UpdateCellState').UpdateCellState).toHaveBeenCalledTimes(2);
 

  // // Verifica que el informe sea correcto
  // expect(finalReport).toBeInTheDocument;
});

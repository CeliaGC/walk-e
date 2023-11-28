import CommandForm from "./commandForm";
import { render, screen } from '@testing-library/react';

test('app renders main buttons before click events', () => {
    render(<CommandForm />);
    const mainButtons = screen.getAllByRole('button');
    expect(mainButtons).toHaveLength(7);
});


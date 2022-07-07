import { render, screen } from '@testing-library/react'
import Attandance from './Attendance';


describe('Attandance Component', () => {
    it('should render the component onto the screen', () => {
        render(<Attandance />);
        expect(screen.getByText("Attendance")).toBeInTheDocument();
    });
})
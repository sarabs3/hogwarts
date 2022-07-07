import { render, screen } from '@testing-library/react'
import Schedule from './Schedule';


describe('Schedule Component', () => {
    it('should render the component onto the screen', () => {
        render(<Schedule />);
        expect(screen.getByText("Current Schedule")).toBeInTheDocument();
    });
})
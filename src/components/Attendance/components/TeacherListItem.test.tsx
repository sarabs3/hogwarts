import { render, screen } from '@testing-library/react'
import { teachersData } from '../../../data/Teachers';
import TeacherListItem from './TeacherListItem';


describe('Attandance Component', () => {
    it('should render the component onto the screen', () => {
        const teacher = teachersData[0];
        render(<TeacherListItem teacher={teacher} />);
        expect(screen.getByText(teacher.name)).toBeInTheDocument();
    });
})
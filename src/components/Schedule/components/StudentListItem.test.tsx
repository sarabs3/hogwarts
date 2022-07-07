import { render, screen } from '@testing-library/react'
import { AvailabilityProvider } from '../../../context/AvailabilityContext';
import { students } from '../../../data/students';
import StudentListItem from './StudentListItem';

describe('Student List Item Component', () => {
    it('should render the component onto the screen', () => {
        const student = students[3];
        render(<StudentListItem student={student} />);
        expect(screen.getByText(student.name)).toBeInTheDocument();
        expect(screen.getByText('Not Assigned')).toBeInTheDocument();
    });
    it('should render the component onto the screen with teacher name', () => {
        const student = students[3];
        render(<AvailabilityProvider>
            <StudentListItem student={student} />
        </AvailabilityProvider>);
        expect(screen.getByText(student.name)).toBeInTheDocument();
        expect(screen.getByText('Horace Slughorn')).toBeInTheDocument();
    });
})
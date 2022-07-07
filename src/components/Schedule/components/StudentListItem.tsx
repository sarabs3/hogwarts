import React, { useContext } from 'react';
import AvailabilityContext from '../../../context/AvailabilityContext';
import { Student } from '../../../types';

type Props = {
    student: Student,
};

const StudentListItem: React.FC<Props> = ({ student }) => {
    const {getTeacher} = useContext(AvailabilityContext);
    
    const teacher = getTeacher(student.teacherId, student.subject.id);
    return (
        <div key={student.id}>
            {student.name} | {student.subject.name} | {teacher && teacher?.name}
        </div>
    )
};

export default StudentListItem;
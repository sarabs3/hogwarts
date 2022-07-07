import React, { ChangeEvent, useContext } from 'react';
import { AvailabilityContext } from '../../../context/AvailabilityContext';
import { AvailableOptions, Teacher } from '../../../types';

type Props = {
    teacher: Teacher,
};

const TeacherListItem: React.FC<Props> = ({ teacher }) => {
    const { updateTeacher } = useContext(AvailabilityContext);
    
    const updateAvailability = (e: ChangeEvent<HTMLSelectElement>) => {
        updateTeacher(teacher.id, e.target.value === AvailableOptions.PRESENT)
    };
    const value = teacher.available ? AvailableOptions.PRESENT : AvailableOptions.ABSENT;

    return (
        <div key={teacher.id}>
            {teacher.name} | 
            <select onChange={updateAvailability} value={value}>
            <option value={AvailableOptions.PRESENT}>Present</option>
            <option value={AvailableOptions.ABSENT}>Absent</option>
        </select>
    </div>
    )
};

export default TeacherListItem;
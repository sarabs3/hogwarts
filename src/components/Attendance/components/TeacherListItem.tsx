import React, { ChangeEvent, useContext } from 'react';
import { AvailabilityContext } from '../../../context/AvailabilityContext';
import { AvailableOptions, Teacher } from '../../../types';
import styles from './TeacherListItem.module.css';

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
        <div className={styles.attandance}>
            <div className={styles.listItem}>
                <div>{teacher.name}</div>
                <div className={styles.availability}>
                    <select data-testid={`changeAvailability${teacher.id}`} className={styles.dropdown} onChange={updateAvailability} value={value}>
                        <option value={AvailableOptions.PRESENT}>Present</option>
                        <option value={AvailableOptions.ABSENT}>Absent</option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default TeacherListItem;
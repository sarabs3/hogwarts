import React, { useContext } from 'react';
import AvailabilityContext from '../../../context/AvailabilityContext';
import { Student } from '../../../types';
import { getTeacher } from '../../../utils';
import styles from './StudentListItem.module.css';

type Props = {
    student: Student,
};

const StudentListItem: React.FC<Props> = ({ student }) => {
    const { teachers } = useContext(AvailabilityContext);

    const teacher = getTeacher(teachers, student.teacherId, student.subject.id);
    return (
        <tr data-testid={`student${student.id}`} className={styles.row}>
            <td className={styles.item}>{student.name}</td>
            <td className={styles.item}>{student.subject.name}</td>
            <td className={styles.item}>{teacher ? teacher.name : 'Not Assigned'}</td>
        </tr>

    )
};

export default StudentListItem;
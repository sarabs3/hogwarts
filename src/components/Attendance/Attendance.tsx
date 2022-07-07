import { useContext } from 'react';
import AvailabilityContext from '../../context/AvailabilityContext';
import TeacherListItem from './components/TeacherListItem';
import styles from './attandance.module.css';

const Attandance = () => {
    const { teachers } = useContext(AvailabilityContext);
    return (
        <div className={styles.attandanceContainer}>
            <h4 className={styles.heading}>Attendance</h4>
            <div className={styles.attandance}>
                {teachers.map(teacher => (
                    <TeacherListItem key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    )
};

export default Attandance;
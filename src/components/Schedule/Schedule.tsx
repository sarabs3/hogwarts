import { students } from '../../data/students';
import StudentListItem from './components/StudentListItem';
import styles from './Schedule.module.css';

const Schedule = () => (
  <div className={styles.scheduleContainer}>
    <h4 className={styles.heading}>Today's Schedule</h4>
    <div className={styles.schedule}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeading}>Student Name</th>
            <th className={styles.tableHeading}>Subject Name</th>
            <th className={styles.tableHeading}>Teacher Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentListItem key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Schedule;
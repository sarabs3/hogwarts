import { students } from '../../data/students';
import StudentListItem from './components/StudentListItem';

const Schedule = () => (
  <div>
    {students.map(student => (
      <div key={student.id}>
        <StudentListItem student={student} />
      </div>
    )
    )}
  </div>
);

export default Schedule;
import { useContext } from 'react';
import AvailabilityContext from '../../context/AvailabilityContext';
import TeacherListItem from './components/TeacherListItem';

const Attandance = () => {
    const { teachers } = useContext(AvailabilityContext);
    return (
        <div>
            {teachers.map(teacher => (
                <div key={teacher.id}>
                    <TeacherListItem teacher={teacher} />
                </div>
            ))}
        </div>
    )
};

export default Attandance;
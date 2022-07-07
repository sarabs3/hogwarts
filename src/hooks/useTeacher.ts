import { useState } from 'react';
import { teachersData } from '../data/Teachers';
import { Teacher } from '../types';

const useTeacher = (): {teachers: Teacher[], updateTeacher: (id: number, available: boolean) => void} => {
    const [teachers, setTeachers] = useState(teachersData);

    const updateTeacher = (id: number, available: boolean) => {
        const selectedTeacher = teachers.findIndex(t => t.id === id);
        if (selectedTeacher > 0) {
            teachers[selectedTeacher].available = available;
            setTeachers([...teachers]);
        }
    }

    return {teachers, updateTeacher};
};

export default useTeacher;

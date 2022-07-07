import { subjects } from "./data/Subjects";
import { Teacher } from "./types";

export const findTeacher = (teachers: Teacher[], id: number | null): Teacher | null => {
    if (!id) return null;
    const teacher = teachers.find(teacher => teacher.id === id);
    if (!teacher) return null;
    return teacher;
};

export const getStandByTeacherForSubject = (subjectId: number) => {
    const subject = subjects.find(sub => sub.id === subjectId);
    if (!subject) return null;
    return subject.standByTeacherId;
};

export const getTeacherId = (id: number | null, subjectId: number) => {
    if (id) return id;
    return getStandByTeacherForSubject(subjectId);;
}

export const getTeacher = (teachers: Teacher[], id: number | null, subjectId: number): Teacher | null => {
    const teacherId = getTeacherId(id, subjectId);
    const teacher = findTeacher(teachers, teacherId);
    if (!teacher) return null;
    if (teacher.available) return teacher;
    if (!teacher.superTeacherId) return null;
    return getTeacher(teachers, teacher.superTeacherId, subjectId);
};
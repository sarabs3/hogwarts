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
import { teachersData } from "./data/Teachers";
import { findTeacher, getStandByTeacherForSubject, getTeacher, getTeacherId } from "./utils";

describe('Find Teacher', () => {
    it('should find and return the teacher', () => {
        const teacher = findTeacher(teachersData, 1);
        expect(teacher).toBe(teachersData[0]);
        const teacher2 = findTeacher(teachersData, 2);
        expect(teacher2).toBe(teachersData[1]);
    });

    it('should find return null if no teacher id present', () => {
        const teacher = findTeacher(teachersData, null);
        expect(teacher).toBe(null);
    })
    it('should find return null if no teacher found', () => {
        const teacher = findTeacher(teachersData, 10);
        expect(teacher).toBe(null);
    })
});

describe('get stand by teacher for subject', () => {
    it('should return stand by teacher', () => {
        const teacher = getStandByTeacherForSubject(1);
        expect(teacher).toBe(3);
    });
    it('should return null if no stand by teacher mentioned', () => {
        const teacher = getStandByTeacherForSubject(3);
        expect(teacher).toBe(null);
    })
});

describe('Get Teacher for students', () => {
    it('should return Professor Dumbledore for the given subject', () => {
        const teacher = getTeacher(teachersData, 1, 1);
        expect(teacher).toBe(teachersData[0]);
    });
    it('should return Rubeus Hagrid for the given subject', () => {
        const teacher = getTeacher(teachersData, null, 1);
        expect(teacher).toBe(teachersData[2]);
    });
    it('should return Horace Slughorn for the given subject', () => {
        const teacher = getTeacher(teachersData, 5, 1);
        expect(teacher).toBe(teachersData[3]);
    });
    it('should return Horace Slughorn for the subject', () => {
        const teacher = getTeacher(teachersData, 4, 1);
        expect(teacher).toBe(teachersData[3]);
    });
    it('should return null if selected teacher is not in the list', () => {
        const teacher = getTeacher(teachersData, 30, 1);
        expect(teacher).toBe(null);
    });
    it('should return null if there is no super teacher', () => {
        const teachers = [...teachersData];
        teachers[0].available = false;
        const teacher = getTeacher(teachers, 1, 1);
        expect(teacher).toBe(null);
    });
});
describe('getTeacherId', () => {
    it('Should return selectedId', () => {
        const teacherId = getTeacherId(2, 2);
        expect(teacherId).toBe(2);
    });
    it('Should return subject standby teacher Id', () => {
        const teacherId = getTeacherId(null, 2);
        expect(teacherId).toBe(6);
    })
});
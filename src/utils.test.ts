import { teachersData } from "./data/Teachers";
import { findTeacher, getStandByTeacherForSubject } from "./utils";

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
})
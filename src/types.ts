export interface Student {
    id: number;
    name: string;
    subject: {
        id: number,
        name: string,
    };
    teacherId: number | null;
}

export interface Teacher {
    id: number;
    name: string;
    subjectId: number | null;
    superTeacherId: number | null;
    available: boolean;
}

export interface Subject {
    id: number;
    name: string;
    standByTeacherId: number;
}

export enum AvailableOptions {
    PRESENT = 'present',
    ABSENT = 'absent'
};
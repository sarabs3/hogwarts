import { Teacher } from "../types";

export const teachersData: Teacher[] = [
    {
        name: 'Professor Dumbledore',
        id: 1,
        subjectId: null,
        superTeacherId: null,
        available: true,
    },
    {
        name: 'Minerva McGonagall',
        id: 2,
        subjectId: 1,
        superTeacherId: 1,
        available: false,
    },
    {
        name: 'Rubeus Hagrid',
        id: 3,
        subjectId: 1,
        superTeacherId: 2,
        available: false,
    },
    {
        name: 'Horace Slughorn',
        id: 4,
        subjectId: 1,
        superTeacherId: 3,
        available: true,
    },
    {
        name: 'Severus Snape',
        id: 5,
        subjectId: 1,
        superTeacherId: 4,
        available: false,
    },
    {
        name: 'Alastor Moody',
        id: 6,
        subjectId: 1,
        superTeacherId: 2,
        available: false,
    },
    {
        name: 'Remus Lupin',
        id: 7,
        subjectId: 1,
        superTeacherId: 6,
        available: false,
    },
    {
        name: 'Gilderoy Lockhart',
        id: 8,
        subjectId: 1,
        superTeacherId: 7,
        available: false,
    }
];

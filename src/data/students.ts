import { Student } from "../types";

export const students: Student[] = [
    {
        name: 'Harry Potter',
        id: 1,
        subject: {
            id: 1,
            name: 'Potions Master'
        },
        teacherId: 4,
    },
    {
        name: 'Hermione Granger',
        id: 2,
        subject: {
            id: 1,
            name: 'Potions Master'
        },
        teacherId: null,
    },
    {
        name: 'Ron Weasley',
        id: 3,
        subject: {
            id: 1,
            name: 'Potions Master'
        },
        teacherId: 5,
    },
    {
        name: 'Draco Malfoy',
        id: 4,
        subject: {
            id: 1,
            name: 'Potions Master'
        },
        teacherId: 4,
    },
    {
        name: 'Padma Patil',
        id: 5,
        subject: {
            id: 2,
            name: 'Defense Against the Dark Arts'
        },
        teacherId: null,
    },
    {
        name: 'Luna Lovegood',
        id: 6,
        subject: {
            id: 2,
            name: 'Defense Against the Dark Arts'
        },
        teacherId: 8,
    },
];

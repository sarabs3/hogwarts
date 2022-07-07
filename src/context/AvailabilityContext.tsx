import React, { createContext } from "react";
import useTeacher from "../hooks/useTeacher";
import { Teacher } from "../types";

export const AvailabilityContext = createContext<{ 
    teachers: Teacher[],
    updateTeacher: (id: number, available: boolean) => void}>({
    teachers: [],
    updateTeacher: () => {},
});

type Props = {
    children: React.ReactNode,
};

export const AvailabilityProvider: React.FC<Props> = ({ children }) => {
    const {teachers, updateTeacher} = useTeacher();

    return <AvailabilityContext.Provider value={{ teachers, updateTeacher }}>
        {children}
    </AvailabilityContext.Provider>
};

export default AvailabilityContext;

import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useTeacher from "./useTeacher";

describe('Use Teacher Hook', () => {
    it('Should update a teacher availability', () => {
        const { result: { current: { updateTeacher, teachers } } } = renderHook(() => useTeacher());
        act(() => updateTeacher(teachers[1].id, true))
        expect(teachers[0].available).toBe(true);
    });
    it('Should not update a teacher availability', () => {
        const { result: { current: { updateTeacher } } } = renderHook(() => useTeacher());
        act(() => updateTeacher(40, true))
    });
});
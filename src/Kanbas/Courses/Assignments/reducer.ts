import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    newAssignmentCreated: false,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: assignment._id,
                course: assignment.course,
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                available_from: assignment.available_from,
                available_until: assignment.available_until,
                due_date: assignment.due_date,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
            state.newAssignmentCreated = true;
        },

        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a) as any;
        },

        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter((a: any) =>
                a._id !== assignmentID) as any;
        },

        switchCreationStatus: (state) => {
            if (state.newAssignmentCreated === true) {
                state.newAssignmentCreated = false;
            } else {
                state.newAssignmentCreated = true;
            }
        },
    }
});

export const { addAssignment, updateAssignment, deleteAssignment, switchCreationStatus } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
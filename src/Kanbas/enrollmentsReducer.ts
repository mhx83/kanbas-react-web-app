import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },

        enroll: (state, { payload: { userId, courseId } }) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: userId,
                course: courseId,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },

        unenroll: (state, { payload: { userId, courseId } }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment: any) =>
                    enrollment.user !== userId || enrollment.course !== courseId
            ) as any;
        },
    },
});

export const { enroll, unenroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
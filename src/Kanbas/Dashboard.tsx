import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enroll, unenroll } from "./enrollmentsReducer";

export default function Dashboard({
    courses, course, setCourse, addNewCourse, deleteCourse, updateCourse
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const dispatch = useDispatch();

    const enrollCourse = ({ course }: { course: any }) => {
        const newEnrollment = {
            user: currentUser._id,
            course: course._id,
        };
        dispatch(enroll(newEnrollment));
    };

    const createCourse = () => {
        const newCourse = addNewCourse();
        enrollCourse({ course: newCourse });
    };

    const dropCourse = ({ course }: { course: any }) => {
        const enrollment = enrollments.find((e: any) =>
            e.user === currentUser._id && e.course === course._id);
        dispatch(unenroll(enrollment._id));
    };

    const isCourseEnrolled = (course: any) =>
        enrollments.some((enrollment: any) =>
            enrollment.user === currentUser._id && enrollment.course === course._id);

    // Filter show courses
    const filteredCourses = showAllCourses
        ? courses
        : courses.filter((course) => isCourseEnrolled(course));

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            {currentUser.role === "FACULTY" && (
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end mb-3" onClick={createCourse}>Add</button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse}>Update</button>
                    </h5>
                    <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr />
                </div>
            )}

            {currentUser.role === "STUDENT" && (
                <div>
                    {showAllCourses ? (
                        <button className="btn btn-success float-end" onClick={() => setShowAllCourses(false)}>Done</button>
                    ) : (
                        <button className="btn btn-primary float-end" onClick={() => setShowAllCourses(true)}>Enrollments</button>
                    )}
                    <br /><br /><hr />
                </div>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {filteredCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <img src={`/images/${course._id}.jpg`} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        {currentUser.role === "STUDENT" && (
                                            <div className="d-flex justify-content-between">
                                                {showAllCourses ? (
                                                    isCourseEnrolled(course) ? (
                                                        // Show "Unenroll" button
                                                        <button
                                                            id="wd-unenroll-course-click"
                                                            className="btn btn-danger"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                dropCourse({ course });
                                                            }}>Unenroll</button>
                                                    ) : (
                                                        // Show "Enroll" button
                                                        <button
                                                            id="wd-enroll-course-click"
                                                            className="btn btn-success"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                enrollCourse({ course });
                                                            }}>Enroll</button>
                                                    )
                                                ) : (
                                                    // Show Go button (Hide Unenroll)
                                                    <button className="btn btn-primary">Go</button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

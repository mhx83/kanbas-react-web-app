import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

export default function Courses({ courses, isFaculty }: { courses: any[]; isFaculty: boolean }) {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                {/*me-4: right margin (end margin) of 1.5rem (24px)*/}
                {/*fs-4: This sets the font size to the fourth size*/}
                {/*mb-1: This adds a small bottom margin (0.25rem or 4px), which separates the icon from the text underneath.*/}
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            {/*applies the Flex Container, enabling flexbox layout inside that div*/}
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home isFaculty={isFaculty} />} />
                        <Route path="Modules" element={<Modules isFaculty={isFaculty} />} />
                        <Route path="Assignments" element={<Assignments isFaculty={isFaculty} />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor isFaculty={isFaculty} />} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

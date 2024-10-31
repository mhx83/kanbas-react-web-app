import { useState } from "react";
import { useParams } from "react-router";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { assignments } from "../../Database"
import { useSelector } from "react-redux";

import AssignmentsControls from "./AssignmentsControls";
import AssignmentsPercentage from "./AssignmentsPercentage";
import AssignmentEditButtons from "./AssignmentEditButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div id="wd-assignments">
            {currentUser.role === "FACULTY" &&
                <div>
                    <AssignmentsControls />
                </div>
            }
            <ul id="wd-assignment-list" className="list-group rounded-0 fs-5">
                <div className="wd-assignments-title wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <button className="btn btn-link p-0" onClick={toggleCollapse} style={{ color: 'black' }}>
                        {isCollapsed ? <FaCaretRight className="me-2" /> : <FaCaretDown className="me-2" />}
                    </button>
                    ASSIGNMENTS
                    {currentUser.role === "FACULTY" &&
                        <div className="ms-auto">
                            <AssignmentsPercentage />
                        </div>
                    }
                </div>

                {!isCollapsed && assignments.filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                            {currentUser.role === "FACULTY" && <AssignmentEditButtons /> }
                            <div>
                                {/* Assignment Title Link */}
                                <a className="wd-assignment-link"
                                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </a>
                                {/* Assignment Details */}
                                <div className="wd-assignment-details">
                                    <span className="text-danger">Multiple Modules</span> |
                                    <strong className="ms-2">Not available until</strong> {assignment.available_from} at 12:00am |
                                    <br />
                                    <strong>Due </strong>{assignment.due_date} at 11:59pm |&nbsp; {assignment.points} pts
                                </div>
                            </div>
                            {currentUser.role === "FACULTY" &&<AssignmentControlButtons assignmentID={assignment._id} />}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
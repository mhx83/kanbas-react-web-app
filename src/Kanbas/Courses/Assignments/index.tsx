import { useParams } from "react-router";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentPercentageButtons from "./AssignmentPercentageButtons";
import AssignmentsMoveButtons from "./AssignmentsMoveButtons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAssignment, setAssignment, setAssignments } from "./reducer";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentDelete from "./AssignmentDelete";

export default function Assignments({ isFaculty }: { isFaculty: boolean }) {
    const { cid } = useParams();
    const navigate = useNavigate();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);

    const fetchAssignments = async () => {
        const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    }

    useEffect(() => {
        fetchAssignments();
    }, [])

    const startAddAssignment = () => {
        if (!cid) return;
        navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
        const newAssignment = {
            title: "",
            description: "",
            points: 100,
            due_date: "",
            available_from: "",
            available_until: "",
        };
        dispatch(setAssignment(newAssignment));
    };

    const handleDeleteAssignment = async () => {
        if (assignmentToDelete) {
            await assignmentsClient.deleteAssignment(assignmentToDelete);
            dispatch(deleteAssignment(assignmentToDelete));
            setAssignmentToDelete(null); // reset after deletion
        }
    };

    return (
        <div id="wd-assignments">
            <div><AssignmentsControls
                handleAddAssignment={startAddAssignment}
                isFaculty={isFaculty}
            /></div>

            <ul id="wd-assignment-list" className="list-group rounded-0 fs-5">
                <div className="wd-assignments-title wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaCaretDown className="me-2" />
                    ASSIGNMENTS
                    <AssignmentPercentageButtons />
                </div>
                {assignments.map((assignment: any) => (
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
                        <AssignmentsMoveButtons />
                        <div>
                            <a className="wd-assignment-link"
                                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                {assignment.title}
                            </a>
                            {/* Assignment Details */}
                            <div className="wd-assignment-details">
                                <span className="text-danger">Multiple Modules</span> |
                                <strong className="ms-2">Not available until</strong> {assignment.available_from} |
                                <br />
                                <strong>Due</strong> {assignment.due_date} | {assignment.points} pts
                            </div>
                        </div>
                        <div className="d-flex align-items-center ms-auto">
                            {isFaculty && <FaTrash className="text-danger me-3 mb-1"
                                data-bs-toggle="modal"
                                data-bs-target="#wd-delete-assignment-dialog"
                                onClick={() => setAssignmentToDelete(assignment._id)}
                            />}
                            <GreenCheckmark />
                            <IoEllipsisVertical className="ms-3 mb-1 fs-4" />
                            <AssignmentDelete
                                deleteAssignment={() => { isFaculty && handleDeleteAssignment() }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

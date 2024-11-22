import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function AssignmentControlButtons({ assignmentID }: { assignmentID: string }) {

    const dispatch = useDispatch();

    const deleteCurrentAssignment = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (isConfirmed) {
            dispatch(deleteAssignment(assignmentID));
        }
    }

    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={deleteCurrentAssignment} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
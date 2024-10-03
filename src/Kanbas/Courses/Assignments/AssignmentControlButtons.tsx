import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
    return (
        <div className="d-flex align-items-center ms-auto">
            <GreenCheckmark />
            <IoEllipsisVertical className="ms-3 mb-1 fs-4" />
        </div>
    )
}
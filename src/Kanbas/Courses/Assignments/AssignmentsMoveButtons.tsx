import { BsGripVertical } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";

export default function AssignmentsMoveButtons() {
    return (
        <div className="d-flex align-items-center me-2">
            <BsGripVertical className="me-2 fs-3" />
            <RiFileEditLine className="text-success me-2 fs-3" />
        </div>
    )
}
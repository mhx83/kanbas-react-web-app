import {BsGripVertical} from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";


export default function AssignmentEditButtons() {
  return (
    <div className="d-flex align-items-center me-2">
        <BsGripVertical className="me-2 fs-3"/>
        <FaRegEdit className="text-success me-2 fs-3"/>
    </div>
  )
}
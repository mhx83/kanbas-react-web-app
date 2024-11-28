import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule, isFaculty }:
    { moduleId: string;
      deleteModule: (moduleId: string) => void;
      editModule: (moduleId: string) => void;
      isFaculty: boolean;
    }
) {
  return (
    <div className="float-end">
      {isFaculty && <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3"/>}
      {isFaculty && <FaTrash className="text-danger me-3 mb-1" onClick={() => deleteModule(moduleId)}/>}
      <GreenCheckmark />
      <FaPlus className = "me-1 ms-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );}

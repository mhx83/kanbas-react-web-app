import { GoPlus } from "react-icons/go";
import {IoEllipsisVertical} from "react-icons/io5";


export default function AssignmentsPercentage() {
  return (
    <div className="d-flex align-items-center float-end">
      {/* Pill-shaped button */}
      <span className="badge-pill percentage-button">
        40% of Total
      </span>

      {/* Plus icon */}
      <GoPlus className="ms-1 me-2 fs-3" /> {/* Space on left and right of the plus icon */}

      {/* Ellipsis icon */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
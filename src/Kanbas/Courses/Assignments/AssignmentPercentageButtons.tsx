import { GoPlus } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentPercentageButtons() {
    return (
        <div className="d-flex align-items-center float-end">
            <span className="badge-pill percentage-button">
                40% of Total
            </span>

            <GoPlus className="ms-1 me-2 fs-3" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
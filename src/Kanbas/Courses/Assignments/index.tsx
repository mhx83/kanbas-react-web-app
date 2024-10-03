import { useState } from "react";
import { useParams } from "react-router";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";

import AssignmentsControls from "./AssignmentsControls";
import AssignmentsPercentage from "./AssignmentsPercentage";
import AssignmentEditButtons from "./AssignmentEditButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div id="wd-assignments">
      <div>
        <AssignmentsControls />
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0 fs-5">
        <div className="wd-assignments-title wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <button className="btn btn-link p-0" onClick={toggleCollapse} style={{ color: 'black' }}>
            {isCollapsed ? <FaCaretRight className="me-2" /> : <FaCaretDown className="me-2" />}
          </button>
          ASSIGNMENTS
          <div className="ms-auto">
            <AssignmentsPercentage />
          </div>
        </div>

        {!isCollapsed && (
          <>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <AssignmentEditButtons />
              <div>
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/123`}>
                  A1
                </a>
                <div className="wd-assignment-details">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong className="ms-2">Not available until</strong> May 6 at 12:00am |
                  <br />
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <AssignmentEditButtons />
              <div>
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/124`}>
                  A2
                </a>
                <div className="wd-assignment-details">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong className="ms-2">Not available until</strong> May 13 at 12:00am |
                  <br />
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <AssignmentEditButtons />
              <div>
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/124`}>
                  A3
                </a>
                <div className="wd-assignment-details">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong className="ms-2">Not available until</strong> May 20 at 12:00am |
                  <br />
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

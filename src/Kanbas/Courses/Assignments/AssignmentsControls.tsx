import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentsControls() {
    const navigate = useNavigate();
    const { cid } = useParams(); // 获取课程 ID

    // 点击 "Add Assignment" 按钮时的处理函数
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/New`); // 跳转到新增作业页面
    };

    return (
        <div id="wd-assignmentsControls" className="d-flex mb-4">
            {/* Search Input */}
            <div className="input-group me-2" style={{ width: "350px" }}>
                <span className="input-group-text bg-white" id="basic-addon1">
                    <label htmlFor="wd-search-assignment">
                        <CiSearch className="fs-4" />
                    </label>
                </span>
                <input
                    id="wd-search-assignment"
                    type="text"
                    placeholder="Search..."
                    className="form-control search-input me-4 fs-5"
                />
            </div>

            <div className="ms-auto d-flex align-items-center">
                {/* Group Button */}
                <button
                    id="wd-add-assignment-group"
                    className="btn btn-lg btn-secondary d-flex align-items-center me-1"
                >
                    <GoPlus className="fs-4" /> Group
                </button>

                {/* Assignment Button */}
                <button
                    id="wd-add-assignment"
                    className="btn btn-lg btn-danger d-flex align-items-center me-1"
                    onClick={handleAddAssignment} // 点击时调用 handleAddAssignment
                >
                    <GoPlus className="fs-4" /> Assignment
                </button>
            </div>
        </div>
    );
}

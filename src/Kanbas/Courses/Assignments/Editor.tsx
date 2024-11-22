import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, switchCreationStatus, deleteAssignment } from "./reducer";
import Select from 'react-select';

const options = [
    { value: 'everyone', label: 'Everyone' },
    { value: 'specific-students', label: 'Specific Students' },
    { value: 'groups', label: 'Groups' },
];

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignments, newAssignmentCreated } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    
    // 获取特定的 assignment
    const assignment = assignments.find((assignment: any) => assignment._id === aid);

    // 使用 useState 管理组件的本地状态
    const [title, setTitle] = useState(assignment && assignment.title);
    const [description, setDescription] = useState(assignment && assignment.description);
    const [points, setPoints] = useState(assignment && assignment.points);
    const [available_from, setAvailableFrom] = useState(assignment && assignment.available_from);
    const [available_until, setUntil] = useState(assignment && assignment.available_until);
    const [due_date, setDue] = useState(assignment && assignment.due_date);
    const [selectedOptions, setSelectedOptions] = useState([{ value: 'everyone', label: 'Everyone' }]);

    // 更新选择项
    const handleSelectChange = (selectedOptions: any) => {
        setSelectedOptions(selectedOptions || []);
    };

    // 取消操作
    const cancel = () => {
        if (newAssignmentCreated === true) {
            dispatch(deleteAssignment(aid));
            dispatch(switchCreationStatus());
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    // 保存操作
    const save = () => {
        const currentAssignment = {
            _id: aid,
            course: cid,
            title: title,
            description: description,
            points: points,
            available_from: available_from,
            available_until: available_until,
            due_date: due_date,
        };

        if (newAssignmentCreated === true) {
            dispatch(switchCreationStatus());
        }
        dispatch(updateAssignment(currentAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container">
            <h1>Assignment Editor</h1>

            {/* Assignment Name */}
            <div className="mb-4">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                {currentUser.role === "FACULTY" ? (
                    <input
                        id="wd-name"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <p>{title}</p>
                )}
            </div>

            {/* Description */}
            <div className="mb-4">
                <label htmlFor="wd-description" className="form-label">Description</label>
                {currentUser.role === "FACULTY" ? (
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={10}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    <p>{description}</p>
                )}
            </div>

            {/* Points */}
            <div className="mb-4">
                <label htmlFor="wd-points" className="form-label">Points</label>
                {currentUser.role === "FACULTY" ? (
                    <input
                        id="wd-points"
                        className="form-control w-25"
                        value={points}
                        onChange={(e) => setPoints(e.target.value)}
                    />
                ) : (
                    <p>{points}</p>
                )}
            </div>

            {/* Assign */}
            <div className="mb-5">
                <label className="form-label">Assign</label>
                <Select
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    options={options}
                    isMulti
                    placeholder="Assign to..."
                />
            </div>

            {/* Due and Availability Dates */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                    <input
                        type="date"
                        id="wd-due-date"
                        className="form-control"
                        value={due_date}
                        onChange={(e) => setDue(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                    <input
                        type="date"
                        id="wd-available-from"
                        className="form-control"
                        value={available_from}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                    <input
                        type="date"
                        id="wd-available-until"
                        className="form-control"
                        value={available_until}
                        onChange={(e) => setUntil(e.target.value)}
                    />
                </div>
            </div>

            {/* Save and Cancel */}
            <div className="d-flex justify-content-end">
                {currentUser.role === "FACULTY" ? (
                    <>
                        <button className="btn btn-secondary me-2" onClick={cancel}>Cancel</button>
                        <button className="btn btn-danger" onClick={save}>Save</button>
                    </>
                ) : (
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light border">Go Back</Link>
                )}
            </div>
        </div>
    );
}

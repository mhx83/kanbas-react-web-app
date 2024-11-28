import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as assignmentsClient from "./client";

export default function AssignmentEditor({ isFaculty }: { isFaculty: boolean }) {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const { assignments, newAssignment } = useSelector((state: any) =>
        state.assignmentsReducer
    );
    const assignment = assignments.find((assignment: any) => assignment._id === aid);

    const navigate = useNavigate();
    const [title, setTitle] = useState(newAssignment.title);
    const [description, setDescription] = useState(newAssignment.description);
    const [points, setPoints] = useState(newAssignment.points);
    const [due_date, setDue] = useState("");
    const [available_from, setAvailableFrom] = useState("");
    const [available_until, setUntil] = useState("");

    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title);
            setDescription(assignment.description);
            setPoints(assignment.points);
            setDue(assignment.due_date);
            setAvailableFrom(assignment.available_from);
            setUntil(assignment.available_until);
        }
    }, [assignment]);

    const handleAddAssignment = async (assignment: any) => {
        if (!cid) return;
        const newAssignment = await assignmentsClient.createAssignment(cid, assignment);
        dispatch(addAssignment(newAssignment));
    };

    const handleUpdateAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    }

    const save = () => {
        const updatedAssignment = {
            _id: aid,
            course: cid,
            title: title,
            description: description,
            points: points,
            available_from: available_from,
            available_until: available_until,
            due_date: due_date,
        };

        assignment ? handleUpdateAssignment(updatedAssignment) : handleAddAssignment(updatedAssignment);

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }

    const cancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }

    const options = [
        { value: 'everyone', label: 'Everyone' },
        { value: 'specific-students', label: 'Specific Students' },
        { value: 'groups', label: 'Groups' },
    ];
    const [selectedOptions, setSelectedOptions] = useState([{ value: 'everyone', label: 'Everyone' }]);
    const [submissionType, setSubmissionType] = useState("Online");
    const handleSelectChange = (selectedOptions: any) => {
        setSelectedOptions(selectedOptions || []);
    };

    const handleSubmissionTypeChange = (e: any) => {
        setSubmissionType(e.target.value);
    };

    return (
        <div id="wd-assignments-editor" className="container">
            <h1>Assignment Editor</h1>

            {/* Assignment Name */}
            <div className="mb-4">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                {isFaculty ? (
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
                {isFaculty ? (
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
                {isFaculty ? (
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
                {isFaculty ? (
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

//     return (
//         <div id="wd-assignments-editor" className="container">
//             <h1>Assignment Editor</h1>
            
//             {/* Assignment Name */}
//             {isFaculty && <div className="mb-4">
//                 <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//                 <input
//                     id="wd-name"
//                     className="form-control"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//             </div>}
            
//             {!isFaculty &&
//                 <div className="row mb-4">
//                     <h2>{title}</h2>
//                     <br /><br /><br />
//                     <hr />
//                 </div>}

//             {!isFaculty &&
//                 <div className="row mb-4">
//                     <div className="col-md-2">
//                         <strong>Due</strong> &nbsp;&nbsp;{due_date}
//                     </div>
//                     <div className="col-md-2">
//                         <strong>Points</strong> &nbsp;&nbsp; {points}
//                     </div>
//                     <div className="col-md-3">
//                         <strong>Available From</strong> &nbsp;&nbsp; {available_from}
//                     </div>
//                     <div className="col-md-3">
//                         <strong>Available Until</strong> &nbsp;&nbsp; {available_until}
//                     </div>
//                     <br /><br />
//                     <hr />
//                 </div>
//             }

//             {/* Description */}
//             {isFaculty && <div className="mb-4">
//                 <textarea
//                     id="wd-description" className="form-control" rows={10} value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//             </div>}
//             {!isFaculty &&
//                 <div className="row mb-4">
//                     <p>{description}</p>
//                 </div>
//             }

//             {/* Points */}
//             {isFaculty && <div className="row mb-4">
//                 <div className="col-md-3  text-end">
//                     <label htmlFor="wd-points" className="form-label">Points</label>
//                 </div>
//                 <div className="col-md-9">
//                     <input
//                         type="number"
//                         id="wd-points" className="form-control" value={points}
//                         onChange={(e) => setPoints(parseInt(e.target.value, 10))} />
//                 </div>
//             </div>}

//             {/* Assignment Group */}
//             {isFaculty && <div className="row mb-4">
//                 <div className="col-md-3 text-end">
//                     <label htmlFor="wd-group" className="form-label">Assignment Group</label>
//                 </div>
//                 <div className="col-md-9">
//                     <select id="wd-group" className="form-select">
//                         <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                         <option value="QUIZZES">QUIZZES</option>
//                     </select>
//                 </div>
//             </div>}

//             {/* Grade */}
//             {isFaculty && <div className="row mb-4">
//                 <div className="col-md-3  text-end">
//                     <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
//                 </div>
//                 <div className="col-md-9">
//                     <select id="wd-display-grade-as" className="form-select">
//                         <option value="Percentage">Percentage</option>
//                         <option value="Complete/Incomplete">Complete/Incomplete</option>
//                     </select>
//                 </div>
//             </div>}

//             {/* Submission Type */}
//             {isFaculty && <div className="row mb-4">
//                 <div className="col-md-3 text-end">
//                     <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//                 </div>
//                 <div className="col-md-9">
//                     <div className="wd-assignment-editor-frame">
//                         <select id="wd-submission-type" className="form-select">
//                             <option value="Online">Online</option>
//                             <option value="On Paper">On Paper</option>
//                         </select>

//                         {/* Online Entry Options */}
//                         <div className="mt-3">
//                             <label><strong>Online Entry Options</strong></label>
//                             <div className="form-check mt-3">
//                                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-text-entry" />
//                                 <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
//                             </div>
//                             <div className="form-check mt-3">
//                                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-website-url"
//                                     defaultChecked />
//                                 <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
//                             </div>
//                             <div className="form-check mt-3">
//                                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-media-recordings" />
//                                 <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
//                             </div>
//                             <div className="form-check mt-3">
//                                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-student-annotation" />
//                                 <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
//                             </div>
//                             <div className="form-check mt-3 mb-2">
//                                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-file-upload" />
//                                 <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>}

//             {/* Assign */}
//             {isFaculty && <div className="row mb-5">
//                 <div className="col-md-3 text-end">Assign</div>
//                 <div className="col-md-9">
//                     <div className="wd-assignment-editor-frame">
//                         <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
//                         <Select
//                             value={selectedOptions}
//                             onChange={handleSelectChange}
//                             options={options}
//                             isMulti
//                             placeholder="Assign to..."
//                         />
//                         {/* Due Date */}
//                         <label htmlFor="wd-due-date" className="form-label pt-3"><strong>Due</strong></label>
//                         <input
//                             type="date" id="wd-due-date" className="form-control" value={due_date}
//                             onChange={(e) => setDueDate(e.target.value)}
//                         />
//                         {/*From - Until*/}
//                         <div className="row mt-3 mb-3">
//                             <div className="col-md-6">
//                                 <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
//                                 <input
//                                     type="date" id="wd-available-from" className="form-control" value={available_from}
//                                     onChange={(e) => setAvailableFrom(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-md-6">
//                                 <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
//                                 <input
//                                     type="date" id="wd-available-until" className="form-control" value={available_until}
//                                     onChange={(e) => setAvailableUntil(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             }

//             {isFaculty && <hr />}

//             {/* Save and Cancel Buttons */}
//             {isFaculty && <div className="d-flex justify-content-end">
//                 <button id="wd-cancel" className="btn btn-secondary me-1"
//                     onClick={handleCancel}>
//                     Cancel
//                 </button>
//                 <button id="wd-save" className="btn btn-danger me-2"
//                     onClick={handleSave}>
//                     Save
//                 </button>
//             </div>}
//         </div>
//     );
// };

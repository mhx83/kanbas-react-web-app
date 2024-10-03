import { SetStateAction, useState } from 'react';
import Select from 'react-select';
import "react-datetime/css/react-datetime.css";

const options = [
    { value: 'everyone', label: 'Everyone' },
    { value: 'specific-students', label: 'Specific Students' },
    { value: 'groups', label: 'Groups' },
];

export default function AssignmentEditor() {
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
            {/* Assignment Name */}
            <div className="mb-4">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value="A1" />
            </div>

            {/* Description */}
            <div className="mb-4">
                <textarea id="wd-description" className="form-control" rows={10}>
                    The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
                    The landing page should include the following:
                    Your full name and section
                    Links to each of the lab assignments
                    Links to the Kanbas application
                    Links to all relevant source code repositories
                    The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
            </div>

            {/* Points */}
            <div className="row mb-4">
                <div className="col-md-3  text-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-9">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>

            {/* Assignment Group */}
            <div className="row mb-4">
                <div className="col-md-3 text-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-9">
                    <select id="wd-group" className="form-select">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECTS">PROJECTS</option>
                    </select>
                </div>
            </div>

            {/* Display Grade As */}
            <div className="row mb-4">
                <div className="col-md-3  text-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
                <div className="col-md-9">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="Percentage">Percentage</option>
                        <option value="Letter Grade">Letter Grade</option>
                        <option value="Complete/Incomplete">Complete/Incomplete</option>
                    </select>
                </div>
            </div>

            {/* Submission Type */}
            <div className="row mb-4">
                <div className="col-md-3 text-end">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-9">
                    <div className="wd-assignment-editor-frame">
                        {/* Checking submission type, collapse Online Entry Options when user select on paper */}
                        <select id="wd-submission-type" className="form-select" value={submissionType} onChange={handleSubmissionTypeChange}>
                            <option value="Online">Online</option>
                            <option value="On Paper">On Paper</option>
                        </select>

                        {/* Online Entry Options */}
                        {submissionType === "Online" && (
                        <div className="mt-3">
                            <label><strong>Online Entry Options</strong></label>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-website-url"
                                    defaultChecked />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check mt-3 mb-2">
                                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-file-upload" />
                                <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Assign */}
            <div className="row mb-5">
                <div className="col-md-3 text-end">Assign</div>
                <div className="col-md-9">
                    <div className="wd-assignment-editor-frame">
                        <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
                        <Select
                            value={selectedOptions}
                            onChange={handleSelectChange}
                            options={options}
                            isMulti
                            placeholder="Assign to..."
                        />
                        
                        <label htmlFor="wd-due-date" className="form-label pt-3"><strong>Due</strong></label>
                        <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                        
                        <div className="row mt-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
                                <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                                <input type="date" id="wd-available-until" className="form-control" value="2024-05-28" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* Save and Cancel*/}
            <div className="d-flex justify-content-end">
                <button id="wd-cancel" className="btn btn-secondary me-1">Cancel</button>
                <button id="wd-save" className="btn btn-danger me-2">Save</button>
            </div>
        </div>
    );
}



// import { useState } from 'react';
// import Select from 'react-select';
// import Datetime from 'react-datetime';
// import moment from 'moment';
// import "react-datetime/css/react-datetime.css";

// const options = [
//   { value: 'everyone', label: 'Everyone' },
//   { value: 'specific-students', label: 'Specific Students' },
//   { value: 'groups', label: 'Groups' },
// ];

// export default function AssignmentEditor() {
//   const [selectedOptions, setSelectedOptions] = useState([{ value: 'everyone', label: 'Everyone' }]);
//   const [dueDate, setDueDate] = useState(moment('2024-05-13T23:59:00')); // 使用 moment 来管理日期状态
//   const [availableFrom, setAvailableFrom] = useState(moment('2024-05-06T00:00:00'));
//   const [availableUntil, setAvailableUntil] = useState(moment('2024-05-28T23:59:00'));

//   const handleSelectChange = (selectedOptions: any) => {
//     setSelectedOptions(selectedOptions || []); // 如果没有选择任何选项，则设置为空数组
//   };


//   const handleDueDateChange = (date: moment.MomentInput) => {
//     setDueDate(moment(date)); // Ensure it's a moment object
//   };

//   const handleAvailableFromChange = (date: moment.MomentInput) => {
//     setAvailableFrom(moment(date));
//   };

//   const handleAvailableUntilChange = (date: moment.MomentInput) => {
//     setAvailableUntil(moment(date));
//   };

//   return (
//     <div id="wd-assignments-editor" className="container">
//       {/* Assignment Name */}
//       <div className="mb-4">
//         <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//         <input id="wd-name" className="form-control" value="A1" />
//       </div>

//       {/* Description */}
//       <div className="mb-4">
//         <textarea id="wd-description" className="form-control" rows={10}>
//           The assignment is available online. 
//           Submit a link to the landing page of your Web application running on Netlify.
//           The landing page should include the following:
//           Your full name and section
//           Links to each of the lab assignments
//           Links to the Kanbas application
//           Links to all relevant source code repositories
//           The Kanbas application should include a link to navigate back to the landing page.
//         </textarea>
//       </div>

//       {/* Points */}
//       <div className="row mb-4">
//         <div className="col-md-3 text-end">
//           <label htmlFor="wd-points" className="form-label">Points</label>
//         </div>
//         <div className="col-md-9">
//           <input id="wd-points" className="form-control" value={100} />
//         </div>
//       </div>

//       {/* Assignment Group */}
//       <div className="row mb-4">
//         <div className="col-md-3 text-end">
//           <label htmlFor="wd-group" className="form-label">Assignment Group</label>
//         </div>
//         <div className="col-md-9">
//           <select id="wd-group" className="form-select">
//             <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             <option value="QUIZZES">QUIZZES</option>
//           </select>
//         </div>
//       </div>

//       {/* Display Grade As */}
//       <div className="row mb-4">
//         <div className="col-md-3 text-end">
//           <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
//         </div>
//         <div className="col-md-9">
//           <select id="wd-display-grade-as" className="form-select">
//             <option value="Percentage">Percentage</option>
//             <option value="Complete/Incomplete">Complete/Incomplete</option>
//           </select>
//         </div>
//       </div>

//       {/* Submission Type */}
//       <div className="row mb-4">
//         <div className="col-md-3 text-end">
//           <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
//         </div>
//         <div className="col-md-9">
//           <div className="wd-assignment-editor-frame">
//             <select id="wd-submission-type" className="form-select">
//               <option value="Online">Online</option>
//               <option value="On Paper">On Paper</option>
//             </select>

//             {/* Online Entry Options */}
//             <div className="mt-3">
//               <label><strong>Online Entry Options</strong></label>
//               <div className="form-check mt-3">
//                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-text-entry" />
//                 <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
//               </div>
//               <div className="form-check mt-3">
//                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-website-url" defaultChecked />
//                 <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
//               </div>
//               <div className="form-check mt-3">
//                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-media-recordings" />
//                 <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
//               </div>
//               <div className="form-check mt-3">
//                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-student-annotation" />
//                 <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
//               </div>
//               <div className="form-check mt-3 mb-2">
//                 <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-file-upload" />
//                 <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Assign */}
//       <div className="row mb-5">
//         <div className="col-md-3 text-end">Assign</div>
//         <div className="col-md-9">
//           <div className="wd-assignment-editor-frame">
//             <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
//             <Select
//               value={selectedOptions}
//               onChange={handleSelectChange}
//               options={options}
//               isMulti // 允许多选
//               placeholder="Assign to..."
//             />

//             {/* Due Date */}
//             <label htmlFor="wd-due-date" className="form-label pt-3"><strong>Due</strong></label>
//             <Datetime
//               value={dueDate}
//               onChange={handleDueDateChange}
//               dateFormat="YYYY-MM-DD"
//               timeFormat="HH:mm" // 支持小时和分钟
//             />

//             {/*From - Until*/}
//             <div className="row mt-3 mb-3">
//               <div className="col-md-6">
//                 <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
//                 <Datetime
//                   value={availableFrom}
//                   onChange={handleAvailableFromChange}
//                   dateFormat="YYYY-MM-DD"
//                   timeFormat="HH:mm" // 支持小时和分钟
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
//                 <Datetime
//                   value={availableUntil}
//                   onChange={handleAvailableUntilChange}
//                   dateFormat="YYYY-MM-DD"
//                   timeFormat="HH:mm" // 支持小时和分钟
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Line */}
//       <hr />

//       {/* Save and Cancel Buttons */}
//       <div className="d-flex justify-content-end">
//         <button id="wd-cancel" className="btn btn-secondary me-1">Cancel</button>
//         <button id="wd-save" className="btn btn-danger me-2">Save</button>
//       </div>
//     </div>
//   );
// }

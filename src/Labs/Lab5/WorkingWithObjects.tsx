import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module",
    description: "Learn NodeJS within 1 hour",
    course: "Web Development",
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>
      {/*edit assignment title*/}
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <input className="form-control w-50" id="wd-assignment-title"
             defaultValue={assignment.title} onChange={(e) =>
        setAssignment({...assignment, title: e.target.value})}/><br/>

      {/*edit assignment score*/}
      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <input className="form-control w-50" id="wd-assignment-score"
             type="number"
             defaultValue={assignment.score} onChange={(e) =>
        setAssignment({...assignment, score: parseInt(e.target.value)})}/><br/>

      {/*edit assignment completed*/}
      <div className="d-flex align-items-center mb-3">
        <input
          className="form-check-input me-2"
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({...assignment, completed: e.target.checked})
          }
        />
        <label htmlFor="wd-assignment-completed" className="me-auto">
          Assignment Completed
        </label>
        <a
          id="wd-update-assignment-completed"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Assignment Completed
        </a>
      </div>

      {/*edit module name*/}
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input className="form-control w-50" id="wd-module-name"
             defaultValue={module.name} onChange={(e) =>
        setModule({...module, name: e.target.value})}/> <br/>

      {/*edit module description*/}
      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module description
      </a>
      <input className="form-control w-50" id="wd-module-description"
             defaultValue={module.description} onChange={(e) =>
        setModule({...module, description: e.target.value})}/>
      <hr/>


      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-modules" className="btn btn-danger ms-3"
         href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-title" className="btn btn-danger ms-3"
         href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr/>
    </div>
  );
}

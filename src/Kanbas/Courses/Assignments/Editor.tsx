export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" cols={45} rows={10}>
                The assignment is available online.
                Submit a link to the landing page of your Web application running on Netlify.
                The landing page should include the following:
                Your full name and section
                Links to each of the lab assignments
                Links to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />

            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Letter Grade">Letter Grade</option>
                            <option value="Complete/Incomplete">Complete/Incomplete</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="On Paper">On Paper</option>
                        </select>
                        <br /><br />

                        <label>Online Entry Options</label><br />
                        <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
                        <input type="checkbox" id="wd-website-url" /> Website URL<br />
                        <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
                        <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
                        <input type="checkbox" id="wd-file-upload" /> File Upload<br />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone" />
                        <br /><br />

                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date" id="wd-due-date" value="2024-05-13" /><br />
                        <br />

                        <td>
                            <label htmlFor="wd-available-from">Available From</label><br />
                            <input type="date" id="wd-available-from" value="2024-05-06" />
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label><br />
                            <input type="date" id="wd-available-until" value="2024-05-28" />
                        </td>

                    </td>
                </tr>




            </table>
            <hr />

            <div style={{ textAlign: 'right' }}>
                <button id="wd-cancel" style={{ marginRight: '5px' }}>Cancel</button>
                <button id="wd-save">Save</button>
            </div>
        </div>
    );
}

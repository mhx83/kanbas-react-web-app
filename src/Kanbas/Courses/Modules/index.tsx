export default function Modules() {
    return (
        <div>
            <div className="wd-modules-buttons">
                <button id="wd-collapse-all" style={{ marginRight: '5px' }}>
                    Collapse All
                </button>

                <button id="wd-view-progress" style={{ marginRight: '5px' }}>
                    View Progress
                </button>

                <select id="wd-select-publish" style={{ marginRight: '5px' }}>
                    <option selected value="PUBLISHALL"> Publish All</option>
                    <option value="PUBLISHWEEK1">Publish 1</option>
                    <option value="PUBLISHWEEK2">Publish 2</option>
                </select>

                <button id="wd-add-module">+ Module</button>
            </div>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP Server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings and</li>
                                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

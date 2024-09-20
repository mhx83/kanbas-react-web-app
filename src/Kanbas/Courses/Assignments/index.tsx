import { useParams } from "react-router";

export default function Assignments() {
    const { cid } = useParams();

    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments"
                style={{ marginRight: '5px' }} />
            <button id="wd-add-assignment-group" style={{ marginRight: '5px' }}>+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>

            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/123`}>
                        A1 - ENV + HTML
                    </a>

                    <div className="wd-assignment-details">
                        Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am
                        <br />
                        <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                </li>

                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/124`}>
                        A2 - CSS + BOOTSTRAP
                    </a>

                    <div className="wd-assignment-details">
                        Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am
                        <br />
                        <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                </li>

                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/125`}>
                        A3 - JAVASCRIPT + REACT
                    </a>

                    <div className="wd-assignment-details">
                        Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am
                        <br />
                        <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                </li>
            </ul>
        </div>
    );
}

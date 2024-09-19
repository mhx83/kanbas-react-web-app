import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.png" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1235/Home">
                        <img src="/images/Python.png" width={200} />
                        <div>
                            <h5>
                                CS1235 Python
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Python Development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1236/Home">
                        <img src="/images/java.png" width={200} />
                        <div>
                            <h5>
                                CS1236 Java
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Object-Oriented Programming
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1237/Home">
                        <img src="/images/database.png" width={200} />
                        <div>
                            <h5>
                                CS1237 Database
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Data is at the heart of most significant programs
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1238/Home">
                        <img src="/images/ds_algo.png" width={200} />
                        <div>
                            <h5>
                                CS1238 Data Structure and Algorithm
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Learn data structures like stacks, queues, trees, and graphs to solve challenging problems.
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1239/Home">
                        <img src="/images/disc_math.jpg" width={200} />
                        <div>
                            <h5>
                                CS1239 Discrete Mathematics
                            </h5>
                            <p className="wd-dashboard-course-title">
                                CS is basically a runaway branch of applied math, so learning math will give you a competitive advantage.
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1240/Home">
                        <img src="/images/distributed_system.png" width={200} />
                        <div>
                            <h5>
                                CS1240 Distributed System
                            </h5>
                            <p className="wd-dashboard-course-title">
                                These days, most systems are distributed systems.
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1241/Home">
                        <img src="/images/computer_archi.png" width={200} />
                        <div>
                            <h5>
                                CS1241 Computer Architecture
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Description of the structure of a computer system made from component parts
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

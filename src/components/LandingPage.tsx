import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <h1>Minghong Xia - Section #01</h1>
            <ul>
                <li><Link to="/Labs/Lab1">Lab 1</Link></li>
                <li><Link to="/Labs/Lab2">Lab 2</Link></li>
                <li><Link to="/Labs/Lab3">Lab 3</Link></li>
                <li><Link to="/kanbas">Kanbas Application</Link></li>
            </ul>
            <p>Find all the source code here: <a href="https://github.com/mhx83/kanbas-react-web-app">GitHub Repository</a></p>
        </div>
    );
}

export default LandingPage;

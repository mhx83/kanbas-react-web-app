// import Lab1 from "./Lab1";
// import { Routes, Route, Navigate, Link } from 'react-router-dom';
// import TOC from "./TOC";
// import Lab2 from "./Lab2";
// import Lab3 from "./Lab3";

// export default function Labs() {
//   return (
//     <div id="wd-labs">
//       <h1>Labs</h1>
//       <p>Your Full Name: John Doe</p> {/* 替换成你的名字，名在前，姓在后 */}
//       <TOC />
//       <Link to="/">Back to Landing Page</Link>
//       <Routes>
//         {/* <Route path="/" element={<Navigate to="Lab1" />} /> */}
//         <Route path="Lab1" element={<Lab1 />} />
//         <Route path="Lab2" element={<Lab2 />} />
//         <Route path="Lab3" element={<Lab3 />} />
//       </Routes>
//     </div>
//   );
// }


import { Routes, Route, Navigate, Link } from 'react-router-dom';
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import React from "react";
export default function Labs() {
    return (
        <div>
            <h1>Labs - Minghong Xia</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
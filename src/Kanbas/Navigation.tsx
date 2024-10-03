import { NavLink } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            
            {/* Northeastern University logo */}
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" alt="NEU logo" /></a>
            
            {/* Account link */}
            <NavLink to="/Kanbas/Account" id="wd-account-link"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className="fs-1" /><br />
                Account </NavLink>
            
            {/* Dashboard link */}
            <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard </NavLink>
            
            {/* Courses link */}
            <NavLink to="/Kanbas/Courses" id="wd-course-link"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses </NavLink>
            
            {/* Calendar link */}
            <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar </NavLink>
            
            {/* Inbox link */}
            <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox </NavLink>
            
            {/* Labs link */}
            <NavLink to="/Labs" id="wd-labs-link"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <AiOutlineSetting className="fs-1 text-danger" /><br />
                Labs </NavLink>
            
            {/* Landing Page */}
            <NavLink to="/"
                className={({ isActive }) => `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaHome className="fs-1 text-danger" /><br />
                Landing Page </NavLink>
        </div>
    );
}

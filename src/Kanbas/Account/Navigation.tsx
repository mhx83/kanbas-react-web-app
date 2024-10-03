// import { Link } from "react-router-dom";

// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to={`/Kanbas/Account/Signin`}
//             className="list-group-item active border border-0"> Signin  </Link>
//       <Link to={`/Kanbas/Account/Signup`}
//             className="list-group-item text-danger border border-0"> Signup  </Link>
//       <Link to={`/Kanbas/Account/Profile`}
//             className="list-group-item text-danger border border-0"> Profile </Link>
//     </div>
//   );}

import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink
                to={`/Kanbas/Account/Signin`}
                className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
                }
            >
                Signin
            </NavLink>

            <NavLink
                to={`/Kanbas/Account/Signup`}
                className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
                }
            >
                Signup
            </NavLink>

            <NavLink
                to={`/Kanbas/Account/Profile`}
                className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
                }
            >
                Profile
            </NavLink>
        </div>
    );
}

import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <>
      
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? css.active : css.navLinkItem
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? css.active : css.navLinkItem
            }
          >
            Login
          </NavLink>
      
    </>
  );
};

export default AuthNav;

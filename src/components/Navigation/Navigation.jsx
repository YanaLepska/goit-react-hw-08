import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.links}>
      
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.navLinkItem
            }
          >Home</NavLink>

          {isLoggedIn && (
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? css.active : css.navLinkItem
              }
            >
              Contacts
            </NavLink>
          )}
        
    </div>
  );
};

export default Navigation;

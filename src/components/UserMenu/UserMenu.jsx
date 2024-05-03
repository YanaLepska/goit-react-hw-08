import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUser);

    const onLogOut = () => {
        dispatch(logout());
}

  return (
      <div className={css.welcome}>
          <span className={css.userName}>Welcome, {userData.name}</span>
          <button className={css.logoutBtn} onClick={onLogOut} type="button"> Log Out</button>
    </div>
  )
}

export default UserMenu
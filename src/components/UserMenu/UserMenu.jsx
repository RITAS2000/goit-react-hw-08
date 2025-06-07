import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.container}>
      <p className={css.username}>
        Welcome, <span className={css.span}>{user.name}</span>
      </p>
      <button className={css.button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}

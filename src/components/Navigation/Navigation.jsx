import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.isActive}` : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.isActive}` : css.link
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

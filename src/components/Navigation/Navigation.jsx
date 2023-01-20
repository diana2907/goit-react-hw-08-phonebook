import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  let activeStyle = {
    textStroke: '1px #080858',
    transform: 'scale(1.2)',
  };

  return (
    <nav>
      <NavLink
        className={css.link}
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

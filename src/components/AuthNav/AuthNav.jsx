import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  let activeStyle = {
    textStroke: '1px #080858',
    transform: 'scale(1.4)',
  };

  return (
    <div>
      <NavLink
        className={css.link}
        to="/register"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Register
      </NavLink>
      <NavLink
        className={css.link}
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Log In
      </NavLink>
    </div>
  );
};

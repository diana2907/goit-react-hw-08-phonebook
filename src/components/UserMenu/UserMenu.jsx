import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { FaRegUserCircle } from 'react-icons/fa';

import css from './UserMenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <FaRegUserCircle />

        <p className={css.username}>{user.name}</p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

import css from 'components/Home/Home.module.css';
import { useAuth } from 'hooks';

export function Home() {
  const { isLoggedIn, user } = useAuth();
  return !isLoggedIn ? (
    <div className={css.container}>
      <h1 className={css.title}>
        Register or login to access phonebook
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  ) : (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to your phonebook, {user.name}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

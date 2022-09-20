import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.scss';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.link}`
            }
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default AppBar;

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export default function Layout() {
  return (
    <>
      <header>
        <nav className={styles.navigation}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.navItem
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNav : styles.navItem
            }
            to="movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

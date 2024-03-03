import { NavLink, Outlet } from "react-router-dom";

import css from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink className={css.link} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main><Outlet/></main>
    </>
  );
}

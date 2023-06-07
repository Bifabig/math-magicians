import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <div>
    <div className={styles.navbar}>
      <h1>Math Magicians</h1>
      <nav>
        <ul className={styles.menu}>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <li>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
    <Outlet />
  </div>
);

export default Navbar;

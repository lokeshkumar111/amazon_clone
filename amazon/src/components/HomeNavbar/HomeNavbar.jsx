import React from 'react';
import styles from './HomeNavbar.module.css';
import { Link } from 'react-router-dom';
const HomeNavbar = () => {
  return (
    <div>
      <style>
        {`
          .navbar {
            padding: 0;
            background-color: var(--bs-tertiary-bg-rgb); /* Use your desired background color here */
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className={`${"container-fluid"} ${styles.mainNav}`}>
          <Link to='/' className={`${"navbar-brand"} ${styles.logo}`}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">"&times"</span>
          </button>
          <div className={`${"collapse navbar-collapse"} ${styles.navContent}`} id="navbarSupportedContent">
            <ul className={`${"navbar-nav me-auto mb-2 mb-lg-0"} ${styles.navButton}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className={`${"d-flex"} ${styles.searchBar}`} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;

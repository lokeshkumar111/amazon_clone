import React from 'react';
import styles from './HomeNavbar.module.css';
import { Link } from 'react-router-dom';
import amazonLogo from '../images/amazonLogoW.png';
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className={`${"container-fluid"} ${styles.mainNav}`}>
          <Link to='/' className={`${"navbar-brand"} ${styles.logo}`}><img style={{'width':'100px'}} src={amazonLogo}/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">Menu</span>
          </button>
          <form className={`${"d-flex"} ${styles.searchBar}`} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Amazon.in"
                aria-label="Search"
              />
               <button type="submit"><i class="fa fa-search"></i></button>
            
          </form>
          <div className={styles.navButton}>
            <Link to='/products'>Products</Link>
            <Link to='/signin'>Login</Link>
            <Link to='cart'>Cart</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;

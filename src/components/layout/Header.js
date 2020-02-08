import React from "react";
import { Link } from 'react-router-dom'

import {IoIosHome, IoIosAdd, IoIosInformation} from 'react-icons/io'
import "./../header.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <IoIosHome/>
              </Link>
              </li>
          <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                Add <IoIosAdd/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About <IoIosInformation/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { NavLink } from 'react-router-dom';

import logo from "../assets/e-logo.png";

const NavBar = () => {
    return (
      <nav className="mb-20 fixed top-0 left-0 w-full bg-white text-gray-800 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 py-6">
          <NavLink
              to="/home"
              className="hover:text-gray-400 transition-colors duration-300 font-bold"
              activeClassName="text-yellow-400"
          >
            <div className="flex items-center space-x-3 ">
              <img src={logo} className="h-10 w-10"/>
              <span className="text-black font-semibold">
              Ethan Lin
              </span>
            </div>
          </NavLink>
          <div className="flex items-center space-x-8">
            {[
              { path: '/about', label: 'About' },
              { path: '/projects', label: 'Projects' },
              { path: '/experience', label: 'Experience' },
              { path: '/resume', label: 'Resume' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
                <NavLink
                  to={path}
                  className="hover:text-gray-400 transition-colors duration-300 font-bold"
                  activeClassName="text-yellow-400"
                >
                  {label}
                </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
};

export default NavBar;
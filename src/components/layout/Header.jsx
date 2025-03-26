import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-200 shadow-lg h-32 flex items-center justify-end">
        <div className="flex-none border-b-2">
          <a className="btn btn-ghost text-xl">Portfolio</a>
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <p className="flex items-center text-lg mx-2">/</p>
            <li><a>Skills</a></li>
            <p className="flex items-center text-lg mx-2">/</p>
            <li><a>Projects</a></li>
            <p className="flex items-center text-lg mx-2">/</p>
            <li><a>About</a></li>      
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
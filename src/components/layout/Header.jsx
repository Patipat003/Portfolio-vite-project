import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-200 h-32 flex items-center justify-end">
        <div className="flex-none border-b-2 text-neutral-content">
          {/* <a className="btn btn-ghost text-4xl">Portfolio</a> */}
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-xl font-semibold">Home</a></li>
            <p className="flex items-center text-lg mx-2">/</p>
            <li><a className="text-xl font-semibold">Skills</a></li>
            <p className="flex items-center text-lg mx-2">/</p>
            <li><a className="text-xl font-semibold">Projects</a></li>
            <p className="flex items-center text-lg mx-2">/</p>
            <li><a className="text-xl font-semibold">About</a></li>      
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
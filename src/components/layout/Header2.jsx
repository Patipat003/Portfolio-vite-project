import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base-200/80 shadow-md">
      <div className="navbar h-24 flex items-center justify-end px-4 md:px-8">
        <div className="flex-none border-b-2 border-success text-neutral-content">
          <ul className="menu menu-horizontal px-1 text-success justify-end w-full">
            <li>
              <a href="#home" className="text-lg md:text-xl font-semibold transition-all duration-300">
                Home
              </a>
            </li>
            <span className="mx-2 text-lg text-success/50 hidden md:inline">/</span>
            <li>
              <a href="#skills" className="text-lg md:text-xl font-semibold transition-all duration-300">
                Skills
              </a>
            </li>
            <span className="mx-2 text-lg text-success/50 hidden md:inline">/</span>
            <li>
              <a href="#projects" className="text-lg md:text-xl font-semibold transition-all duration-300">
                Projects
              </a>
            </li>
            <span className="mx-2 text-lg text-success/50 hidden md:inline">/</span>
            <li>
              <a href="#about" className="text-lg md:text-xl font-semibold transition-all duration-300">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-base-200/80 shadow-md">
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar h-20 flex items-center justify-end px-4 md:px-8">
            <a
              href="#home"
              className="text-2xl md:text-4xl mx-2 flex-1 px-2 font-bold text-success"
            >
              PatipatS.
            </a>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <nav className="hidden flex-none border-b-2 border-success text-neutral-content lg:block">
              <ul className="menu menu-horizontal px-1 text-success justify-end w-full">
                <li>
                  <a
                    href="#home"
                    className="text-lg md:text-xl font-semibold transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <span className="mt-2 mx-2 text-lg text-success/50 hidden md:inline">
                  /
                </span>
                <li>
                  <a
                    href="#skills"
                    className="text-lg md:text-xl font-semibold transition-all duration-300"
                  >
                    Skills
                  </a>
                </li>
                <span className="mt-2 mx-2 text-lg text-success/50 hidden md:inline">
                  /
                </span>
                <li>
                  <a
                    href="#projects"
                    className="text-lg md:text-xl font-semibold transition-all duration-300"
                  >
                    Projects
                  </a>
                </li>
                <span className="mt-2 mx-2 text-lg text-success/50 hidden md:inline">
                  /
                </span>
                <li>
                  <a
                    href="#contact"
                    className="text-lg md:text-xl font-semibold transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-3/4 p-4">
            {/* Sidebar content here */}
            <li>
              <a
                href="#home"
                className="text-lg md:text-xl font-semibold transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-lg md:text-xl font-semibold transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg md:text-xl font-semibold transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg md:text-xl font-semibold transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

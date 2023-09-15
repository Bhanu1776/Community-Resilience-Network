const Navbar = () => {
  return (
    <>
      <body
        className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-pink-300
      to-indigo-400
    "
      >
        <header>
          <nav
            className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
          >
            <div>
              <a href="#">HackX</a>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <div
              className="hidden w-full md:flex md:items-center md:w-auto"
              id="menu"
            >
              <ul
                className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              >
                <li>
                  <a className="md:p-4 py-2 block hover:text-pink-400" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-2 block hover:text-pink-400" href="#">
                    Location
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-2 block hover:text-pink-400" href="#">
                    Guidelines
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-2 block hover:text-pink-400" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-pink-400 text-pink-500"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </body>
    </>
  );
};

export default Navbar;

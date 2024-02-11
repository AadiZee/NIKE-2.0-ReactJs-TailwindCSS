import { useState } from "react";
import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { x } from "../../assets/icons";
import { navLinks } from "../../constants";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img
            src={showMenu ? x : hamburger}
            alt="menu"
            width={25}
            height={25}
            onClick={() => setShowMenu((prevState) => !prevState)}
          />
          {showMenu && (
            <div className="absolute right-0 top-13 w-48 mt-2 py-2 bg-white border border-gray-300 rounded-lg shadow-xl">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  const toggleExpand = () => setExpandNav(!expandNav);

  const hamburgerButton = (
    <svg className="fill-current w-8" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );

  const cancelButton = (
    <svg className="fill-current w-8" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );

  return (
    <nav className=" relative z-10 bg-gray-900 shadow-md w-full text-white">
      <div className="flex justify-between py-2 px-8">
        <Link to="/" className="p-0 my-auto font-bold text-xl">
          Mobiter
        </Link>
        <button onClick={toggleExpand}>
          {expandNav ? cancelButton : hamburgerButton}
        </button>
      </div>
      <div
        className={`absolute w-full z-50 shadow-md flex flex-col justify-evenly bg-gray-700 overflow-hidden transition-all ease-out duration-300 ${
          expandNav ? "h-36" : "h-0"
        }`}
      >
        <Link to="/" className="px-4 py-1" onClick={toggleExpand}>
          Home
        </Link>
        <Link to="/stores" className="px-4 py-1" onClick={toggleExpand}>
          Pengaturan Toko
        </Link>
        <Link to="/dorayaki" className="px-4 py-1" onClick={toggleExpand}>
          Pengaturan Dorayaki
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import dropDownIcon from "../../assets/icons/dropdown.svg";
import { navbarList } from "../../utils/data";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="max-w-[1470px] m-auto p-5">
        <div className="flex items-center justify-between py-5">
          <Image src={logo} alt="logo" />
          <nav>
            <ul className="flex items-center gap-7">
              {navbarList.map(({ id, name, showDropdown }) => (
                <li
                  key={id}
                  className={`flex items-center gap-1 font-semibold ${
                    id === 1 ? "text-primary-red" : "text-black"
                  }`}
                >
                  {name}{" "}
                  <span className="mt-[1px]">
                    {showDropdown && (
                      <Image src={dropDownIcon} alt="dropdown" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 font-semibold hover:bg-slate-50 rounded-md transition-all duration-100 ease-in outline-none active:ring active:ring-slate-300">
              Daftar
            </button>
            <button className="px-5 py-2 font-semibold text-white bg-primary-red hover:bg-red-600 rounded-md transition-all duration-100 ease-in outline-none active:ring active:ring-red-300">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

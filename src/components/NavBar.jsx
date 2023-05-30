import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="w-full min-h-[50px] flex justify-between absolute z-10 text-white bg-gray-700">
        <ul className=" hidden md:flex px-4">
          <li>
            <a className="hover:text-[var(--primary-dark)]" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--primary-dark)]" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--primary-dark)]" href="#deals">
              Deals
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--primary-dark)]" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--primary-dark)]" href="#about">
              About
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-between px-4">
          <FaFacebookF className="mx-4 hover:text-[var(--primary-dark)]" />
          <FaTwitter className="mx-4 hover:text-[var(--primary-dark)]" />
          <FaGooglePlus className="mx-4 hover:text-[var(--primary-dark)]" />
          <FaInstagram className="mx-4 hover:text-[var(--primary-dark)]" />
        </div>

        {/* Hamburger Icon */}

        <div className="md:hidden flex items-center ">
          <FaBars
            onClick={() => setNav(!nav)}
            size={20}
            className="mr-4 cursor-pointer hover:text-[var(--primary-dark)]"
          />
        </div>

        {/* mobile nav bar */}

        <div
          className={
            nav
              ? "w-[60%] top-0 left-0 fixed bg-black text-white h-screen py-10 ease-in-out duration-300"
              : "ease-in-out duration-300 fixed left-[-100%]"
          }
        >
          <h1 className="text-xl font-bold p-4 text-[var(--primary-dark)]">
            MANOJTOUR
          </h1>
          <ul>
            <li>
              <a
                className="hover:text-[var(--primary-light)] border-b pb-2"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--primary-light)] border-b pb-2"
                href="#gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--primary-light)] border-b pb-2"
                href="#deals"
              >
                Deals
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--primary-light)] border-b pb-2"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--primary-light)] border-b pb-2"
                href="#about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

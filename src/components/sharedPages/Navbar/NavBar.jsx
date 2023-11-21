import React from 'react';
import enImg from '../../../assets/en.png'
import arImg from '../../../assets/sa.jpg'
import LanguageDopdown from './LanguageDopdown';



const NavBar = () => {
  return (
    <header className="bg-[#1C1C1D]">
      <nav
        id="nav"
        className="w-[90%] mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between py-4 md:py-4 text-md text-gray-300"
      >
        <div>
          <a href="#">
            <h1 className="uppercase tracking-widest text-white text-xl md:text-2xl navLink">
              Hotel Booking
            </h1>
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer xl:hidden block"
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

        <div className="hidden w-full xl:flex xl:items-center xl:w-auto" id="menu">
          <ul className="pt-4 md:flex md:justify-between md:pt-0 text-sm items-center">
            <li>
              <a className="md:p-4 py-2 block navLink" href="index.html">
                Home
              </a>
            </li>
            <li className="relative group">
              <a className="md:p-4 py-2 block navLink" href="#">
                Rooms
              </a>
              <ul className="absolute w-36 left-0 hidden pt-2 bg-white text-black group-hover:block z-10">
                <li>
                  <a className="p-2 block" href="/rooms/searchRoom.html">
                    Search Room
                  </a>
                </li>
                <li>
                  <a className="p-2 block" href="/rooms/roomRate.html">
                    Room Rates
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="md:p-4 py-2 block navLink" href="about.html">
                About
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block navLink"
                href="./promotions/Promotion-allRooms.html"
              >
                Promotions
              </a>
            </li>
            <li className="relative group">
              <a className="md:p-4 py-2 block navLink" href="#">
                Restaurant
              </a>
              <ul className="absolute w-36 left-0 hidden pt-2 space-y-2 bg-white text-black group-hover:block z-10">
                <li>
                  <a className="md:p-4 py-2 block" href="./restaurant/bookTable.html">
                    Book Table
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-2 block" href="#">
                    Menu
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="md:p-4 py-2 block navLink" href="contact.html">
                Contact
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block navLink" href="#">
                Book Now
              </a>
            </li>
            <li>
              <img className="md:p-4 py-2 navLink" src={arImg} alt="" />
              {/* <a className="md:p-4 py-2 block text-" href="#">Arabic</a> */}
            </li>
            <li>
              <img className="md:p-4 py-2 navLink" src={enImg} alt="" />
              {/* <a className="md:p-4 py-2 block text-" href="#">Eng</a> */}
            </li>
            <LanguageDopdown />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

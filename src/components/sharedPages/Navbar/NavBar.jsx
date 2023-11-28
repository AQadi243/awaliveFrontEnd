// import Link from "next/link";
import { useContext, useState } from "react";
// import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LanguageDopdown from "./LanguageDopdown";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AuthContext } from "../Context/AuthProvider";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Room Search", href: "/roomSearch" },
  { title: "About", href: "/about" },
  { title: "Restaurant", href: "/bookTable" },
  { title: "Contact", href: "/contact" },
];


const Navbar = () => {
  const { error, user, loading, setLoading, handleLogout} = useContext(AuthContext);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  console.log("user", user?.name);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogIn = () => {
    navigate("/login");
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSignIn = () => {
    navigate("/signin");
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav
        className=" w-[90%] mx-auto flex justify-between items-center py-8 lg:py-4 px-2"
        style={{ fontFamily: "Gilda Display, serif" }}
      >
        <div className=" flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-[#BE9874] rounded-full" />
          <span className="text-sm font-semibold tracking-widest">
            Awalive Hotel
          </span>
        </div>
        <div className="lg:flex hidden gap-5 text-md text-zinc-400">
          <NavLink to={"/"}>
            <p>Home</p>
            {/* <AnimatedLink title={"Home"} /> */}
          </NavLink>
          <li className="relative group list-none">
            <p
            // className={({ isActive }) =>
            //   isActive ? "text-black font-medium" : "font-medium"
            // }
            >
              Search
            </p>

            {/* Dropdown Content */}
            <ul className="absolute w-36 left-0 hidden pt-2 bg-white drop-shadow-md text-md text-zinc-400 group-hover:block z-10 rounded-sm">
              <li>
                <NavLink
                  to={"/roomSearch"}
                  className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out "
                >
                  Room Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/roomRate"}
                  className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out "
                >
                  Room Rates
                </NavLink>
              </li>
            </ul>
          </li>
          <NavLink to={"/about"}>
            <p>About</p>
            {/* <AnimatedLink title={"Home"} /> */}
          </NavLink>
          <NavLink to={"/promotion"}>
            <p>Promotions</p>
            {/* <AnimatedLink title={"Home"} /> */}
          </NavLink>
          <li className="relative group list-none">
            <p>Restaurant</p>

            {/* Dropdown Content */}
            <ul className="absolute w-36 left-0 hidden pt-2 bg-white drop-shadow-md text-md text-zinc-400 group-hover:block z-10 rounded-sm">
              <li>
                <NavLink
                  to={"/bookTable"}
                  className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out "
                >
                  Book Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/restaurantMenu"}
                  className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out "
                >
                  Menu
                </NavLink>
              </li>
            </ul>
          </li>
          <NavLink to={"/contact"}>
            Contact
            {/* <AnimatedLink title={"Home"} /> */}
          </NavLink>
          {user?.username ?(
            <NavLink to={"/mybookings"}>
            <p>My Bookings</p>
            {/* <AnimatedLink title={"Home"} /> */}
          </NavLink> ) : ""
          }
          
          <LanguageDopdown />
          {/* login button  */}
          {user?.username ? (
            <div className="relative group">
            <p
              onClick={toggleDropdown}
              className="cursor-pointer text-md flex items-center"
            >
              {user.username}

              <DownOutlined />
            </p>
            {isDropdownOpen && (
              <div
                className="absolute z-10 mt-2 bg-white border rounded-md shadow-md"
                onBlur={closeDropdown}
              >
                <p
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Log Out
                </p>
                
              </div>
            )}
          </div>
          ): (
            <div className="relative group">
            <p
              onClick={toggleDropdown}
              className="cursor-pointer text-md flex items-center"
            >
              Join/Log In

              <DownOutlined />
            </p>
            {isDropdownOpen && (
              <div
                className="absolute z-10 mt-2 bg-white border rounded-md shadow-md"
                onBlur={closeDropdown}
              >
                <p
                  onClick={handleLogIn}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Log In
                </p>
                <p
                  onClick={handleSignIn}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Join
                </p>
              </div>
            )}
          </div>
          ) }
          
          {/* login button end  */}
          {/* <AnimatedLink title={"Contact"} /> */}
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#BE9874] text-black p-10 z-50"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Awalive Hotel</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        title={link.title}
                        href={link.href}
                        nestedLinks={link.nestedLinks}
                        onClick={toggleMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
              <LanguageDopdown />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href, onClick, nestedLinks }) => {
  const [isNestedVisible, setIsNestedVisible] = useState(false);

  const handleToggleNested = () => {
    setIsNestedVisible((prev) => !prev);
  };

  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <div onClick={handleToggleNested}>
        <Link to={href} onClick={onClick}>
          {title}
        </Link>
      </div>
      {isNestedVisible && nestedLinks && (
        <ul className="ml-4">
          {nestedLinks.map((nestedLink, index) => (
            <li key={index}>
              <Link to={nestedLink.href} onClick={onClick}>
                {nestedLink.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

// import React from "react";
// import enImg from "../../../assets/en.png";
// import arImg from "../../../assets/sa.jpg";
// import LanguageDopdown from "./LanguageDopdown";
// import { Link } from "react-router-dom";
// import { Button, Dropdown } from "antd";

// const NavBar = () => {
//   const items = [
//     {
//       key: "1",
//       label: (
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.antgroup.com"
//         >
//           1st menu item
//         </a>
//       ),
//     },
//     {
//       key: "2",
//       label: (
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.aliyun.com"
//         >
//           2nd menu item
//         </a>
//       ),
//     },
//     {
//       key: "3",
//       label: (
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://www.luohanacademy.com"
//         >
//           3rd menu item
//         </a>
//       ),
//     },
//   ];

//   return (
//     <header className="bg-[#1C1C1D]">
//       <nav
//         id="nav"
//         className="w-[90%] mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between py-4 md:py-4 text-md text-gray-300"
//       >
//         <div>
//           <Link to={"/"}>
//             <h1 className="uppercase tracking-widest text-white text-xl md:text-2xl navLink">
//               Hotel Booking
//             </h1>
//           </Link>
//         </div>

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           id="menu-button"
//           className="h-6 w-6 cursor-pointer xl:hidden block"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>

//         <div
//           className="hidden w-full xl:flex xl:items-center xl:w-auto"
//           id="menu"
//         >
//           <ul className="pt-4 md:flex md:justify-between md:pt-0 text-sm items-center">
//             <li>
//               <Link
//                 to={"/"}
//                 className="md:p-4 py-2 block navLink"
//                 href="index.html"
//               >
//                 Home
//               </Link>
//             </li>
//             <Dropdown
//               menu={{
//                 items,
//               }}
//               placement="bottom"
//               arrow
//             >
//               <Button className="text-[#5c5c5c] hover:text-[#BE9874] outline-0  rounded-md " style={{ border: 'none' }} >Search</Button>
//             </Dropdown>
//             {/* <li className="relative group">
//               <a className="md:p-4 py-2 block navLink" >
//                 Rooms
//               </a>
//               <ul className="absolute w-36 left-0 hidden pt-2 bg-white text-black group-hover:block z-10">
//                 <li>
//                   <Link to={'/searchRooms'} className="p-2 block" >
//                     Search Room
//                   </Link>
//                 </li>
//                 <li>
//                   <a className="p-2 block" >
//                     Room Rates
//                   </a>
//                 </li>
//               </ul>
//             </li> */}
//             <li>
//               <a className="md:p-4 py-2 block navLink" href="about.html">
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 className="md:p-4 py-2 block navLink"
//                 href="./promotions/Promotion-allRooms.html"
//               >
//                 Promotions
//               </a>
//             </li>
//             <li className="relative group">
//               <a className="md:p-4 py-2 block navLink" href="#">
//                 Restaurant
//               </a>
//               <ul className="absolute w-36 left-0 hidden pt-2 space-y-2 bg-white text-black group-hover:block z-10">
//                 <li>
//                   <a
//                     className="md:p-4 py-2 block"
//                     href="./restaurant/bookTable.html"
//                   >
//                     Book Table
//                   </a>
//                 </li>
//                 <li>
//                   <a className="md:p-4 py-2 block" href="#">
//                     Menu
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a className="md:p-4 py-2 block navLink" href="contact.html">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a className="md:p-4 py-2 block navLink" href="#">
//                 Book Now
//               </a>
//             </li>
//             <li>
//               <img className="md:p-4 py-2 navLink" src={arImg} alt="" />
//               {/* <a className="md:p-4 py-2 block text-" href="#">Arabic</a> */}
//             </li>
//             <li>
//               <img className="md:p-4 py-2 navLink" src={enImg} alt="" />
//               {/* <a className="md:p-4 py-2 block text-" href="#">Eng</a> */}
//             </li>
//             <LanguageDopdown />
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

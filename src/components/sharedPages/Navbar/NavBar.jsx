// import Link from "next/link";
import { useContext, useState } from "react";
// import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import LanguageDopdown from "./LanguageDopdown";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AuthContext } from "../Context/AuthProvider";
import ButtonLoginSignUp from "./Buttons/ButtonLoginSignUp";
import { UserOutlined } from '@ant-design/icons';
import ButtonAfterLogin from "./Buttons/BuutonAfterLogin";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Room Search", href: "/roomSearch" },
  { title: "Promotions", href: "/promotions" },
  { title: "Restaurant", href: "/bookTable" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { error, user, loading, setLoading, handleLogout } =
    useContext(AuthContext);

  // const navigate = useNavigate();
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

  // const handleLogIn = () => {
  //   navigate("/login");
  //   setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <header>
      <nav
        className="w-[95%] md:w-[90%] mx-auto"
        style={{ fontFamily: "Gilda Display, serif" }}
      >
        <div className=" flex items-center justify-between py-8 lg:py-4 px-2">
          <div className=" flex items-center gap-[1ch]">
            <div className="w-3 h-3 md:w-5 md:h-5 bg-[#BE9874] rounded-full" />
            <Link to={"/"} className=" text-xs md:text-sm font-semibold tracking-widest">
              Awalive Hotel
            </Link>
          </div>
          <div className="lg:flex hidden   gap-5 text-md text-zinc-400">
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
              <ul className="absolute w-36 left-0 hidden pt-2 bg-white drop-shadow-md text-md text-zinc-400 group-hover:block z-20 rounded-sm">
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
            <NavLink to={"/promotions"}>
              <p>Promotions</p>
              {/* <AnimatedLink title={"Home"} /> */}
            </NavLink>
            <li className="relative group list-none">
              <p>Restaurant</p>

              {/* Dropdown Content */}
              <ul className="absolute w-36 left-0 hidden pt-2 bg-white drop-shadow-md text-md text-zinc-400 group-hover:block z-20 rounded-sm">
                <li>
                  <NavLink
                    to={"/bookTable"}
                    className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out "
                  >
                    Book Table
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-2 block hover:bg-slate-50 transition duration-300 ease-in-out ">
                    Menu
                  </NavLink>
                </li>
              </ul>
            </li>
            <NavLink to={"/contact"}>
              Contact
              {/* <AnimatedLink title={"Home"} /> */}
            </NavLink>
            {user?.name ? (
              <NavLink to={"/mybookings"}>
                <p>My Bookings</p>
                {/* <AnimatedLink title={"Home"} /> */}
              </NavLink>
            ) : (
              ""
            )}

            <LanguageDopdown />
            {/* login button  */}
            {user?.name ? (
              <ButtonAfterLogin userName={user?.name} handleLogout={handleLogout} />
            ) : (
              <>
                <ButtonLoginSignUp />
              </>
            )}

            {/* login button end  */}
            {/* <AnimatedLink title={"Contact"} /> */}
          </div>
          <div className="lg:hidden flex gap-2 items-center">
            <div className="lg:hidden">
              <LanguageDopdown />
            </div>
              {/* mobile login button todo to solve  */}
            <div className="lg:hidden">
              {
                user?.name ? ( 

                  <ButtonAfterLogin userName={user?.name} handleLogout={handleLogout} />

                ) : (

                  <ButtonLoginSignUp />
                )
              }
              {/* mobile login button todo to solve  */}             
            </div>
            <div
              className="cursor-pointer lg:hidden text-md text-black"
              onClick={toggleMenu}
            >
              Menu
            </div>
          </div>
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
              <div className="flex items-center justify-between"></div>
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
      className="text-2xl uppercase text-black"
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

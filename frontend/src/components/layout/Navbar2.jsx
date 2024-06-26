import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode, MdClose } from "react-icons/md"; // Import the MdClose icon
import { CiLight } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import { AppName, BackendUrl } from "../../assets/FrontendUtils";
import { Context } from "../../main";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
    closeDropdown();
  };


  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state variable for sidebar

  const handleNavbar = () => {
    setShow(!show);
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  const isDashboard = useLocation("http://localhost:5174/dashboard");

  const { mode, setMode, isAuthenticated, user, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      let url = `${BackendUrl}/api/v1/user/logout`;
      const response = await axios.get(
        url,
        { withCredentials: true }
      );
      if (response.data.success) {
        setIsAuthenticated(false); // Update isAuthenticated state to false
        toast.success(response.data.message);
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")

        console.log(isAuthenticated)
        console.log(response.data.message)
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        console.log("-----------------------------")
        navigateTo("/about");
      } else {
        console.log("Error: " + response.data.message); // Log error message
        // Handle unsuccessful logout
        // Example: toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during logout:", error); // Log error
      toast.error("An error occurred during logout");
    }
  };
  

  return (
    // <div className={` ${mode === 'dark' ? 'dark' : 'light'} navbar bg-base-100 font-bold`}>
    <div className={` bg-black text-white navbar  font-bold`}>

      <div className="navbar-start">
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            {dropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </div>
          {dropdownOpen && (
            <ul
              className=" bg-black text-white shadow menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
            >
              {/* <li><NavLink onClick={handleDropdownItemClick} to="/authors">HOMEdsfdfd
                </NavLink></li> */}

              <li onClick={handleDropdownItemClick}>

                <NavLink to="/" >
                  HOME
                </NavLink>
              </li>

              <li onClick={handleDropdownItemClick}>

                <NavLink to="/blogs" >
                  ALL BLOGS
                </NavLink>
              </li>
              <li onClick={handleDropdownItemClick}>

                <NavLink to="/authors" >
                  ALL AUTHORS
                </NavLink>
              </li>


              <li onClick={handleDropdownItemClick}>

                <NavLink to="/about" >
                  ABOUT US
                </NavLink>
              </li>

            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl" onClick={toggleDropdown}>{AppName}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink exact to="/" onClick={handleNavbar} activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={handleNavbar} activeClassName="active">
              ALL BLOGS
            </NavLink>
          </li>
          <li>
            <NavLink to="/authors" onClick={handleNavbar} activeClassName="active">
              ALL AUTHORS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavbar} activeClassName="active">
              ABOUT US
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="navbar-end">
        {/* <a className="btn"></a> */}


        {/* toggle button */}

        {/* <button
          onClick={() => mode === "light" ? setMode("dark") : setMode("light")}
          className=" text-md "
        >
          {mode === "light" ? (
            <svg className="swap-on fill-current w-10 h-10 p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg className="swap-off fill-current w-10 h-10  p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </button> */}



        {isAuthenticated && user.role === "Author" ? (
          <NavLink
            to={"/dashboard"}
            onClick={handleNavbar}
            className="bg-yellow-500 p-1 border-4  border-white rounded-xl font-bold text-black"
          >
            DASHBOARD
          </NavLink>
        ) : (
          ""
        )}
        {!isAuthenticated ? (
          <NavLink to={"/login"} onClick={handleNavbar} className="bg-teal-500 p-1 border-4  border-white rounded-xl font-bold">
            LOGIN
          </NavLink>
        ) : (
          <div className="leftBoxAlign">

            {isAuthenticated && user.role !== "Author" ? (
              <NavLink
                to="/aboutUser"
                onClick={handleNavbar}
                className="border-4 p-1 bg-yellow-500 border-black rounded-2xl text-black "
              >
                <i class="fa-solid fa-user"></i>
              </NavLink>
            ) : (
              ""
            )}
            <button className="bg-white border-4 border-black rounded-xl p-1 ml-1 text-black" onClick={handleLogout}>
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>



          </div>
        )}


      </div>
    </div>
  );
}

export default Navbar;

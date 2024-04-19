import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode, MdClose } from "react-icons/md"; // Import the MdClose icon
import { CiLight } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import { AppName, BackendUrl } from "../../assets/FrontendUtils";
import { Context } from "../../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state variable for sidebar

  const handleNavbar = () => {
    setShow(!show);
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  const isDashboard = useLocation("http://localhost:5173/dashboard");

  const { mode, setMode, isAuthenticated, user, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      let url = `${BackendUrl}/api/v1/user/logout`
      const { data } = await axios.get(
        url,
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideNavbar"
          : mode === "light"
            ? "header light-navbar"
            : "header dark-navbar"
      }
    >
      <nav>
        <NavLink to="/">

          <div className="logo">
            <NavLink to="/">

              {AppName}
            </NavLink>
          </div>
        </NavLink>
        <div className={show ? "links show" : "links"}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleNavbar}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" onClick={handleNavbar}>
                ALL BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink to="/authors" onClick={handleNavbar}>
                ALL AUTHORS
              </NavLink>
            </li>


            <li>
              <NavLink to="/about" onClick={handleNavbar}>
                ABOUT US
              </NavLink>
            </li>

          </ul>
          <div className="btns">
            <button
              onClick={() =>
                mode === "light" ? setMode("dark") : setMode("light")
              }
              className={
                mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
              }
            >
              {mode === "light" ? (
                <CiLight className="light-icon" />
              ) : (
                <MdDarkMode className="dark-icon" />
              )}
            </button>
            {isAuthenticated && user.role === "Author" ? (
              <NavLink
                to={"/dashboard"}
                onClick={handleNavbar}
                className="dashboard-btn"
              >
                DASHBOARD
              </NavLink>
            ) : (
              ""
            )}
            {!isAuthenticated ? (
              <NavLink to={"/login"} onClick={handleNavbar} className="login-btn">
                LOGIN
              </NavLink>
            ) : (
              <div className="leftBoxAlign">

                {isAuthenticated && user.role !== "Author" ? (
                  <NavLink
                    to="/aboutUser"
                    onClick={handleNavbar}
                    className="dashboard-btn"
                  >
                    <i class="fa-solid fa-user"></i>
                  </NavLink>
                ) : (
                  ""
                )}
                <button className="logout-btn" onClick={handleLogout}>
                  LOGOUT
                </button>



              </div>
            )}
          </div>
        </div>
        {isSidebarOpen ? ( // Conditionally render the hamburger or cross icon
          <MdClose className="hamburger" onClick={handleNavbar} />
        ) : (
          <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
        )}
      </nav>
    </section>
  );
};

export default Navbar;

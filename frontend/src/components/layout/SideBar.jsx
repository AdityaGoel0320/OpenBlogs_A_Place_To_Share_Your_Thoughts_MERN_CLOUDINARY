// import React, { useContext, useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import { Context } from "../../main";
// import { CiLight } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BackendUrl } from "../../assets/FrontendUtils";

// const SideBar = ({ setComponent }) => {
//   const [show, setShow] = useState(false);
//   const { mode, setMode, setIsAuthenticated, user } = useContext(Context);
//   const navigateTo = useNavigate();

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       let url = `${BackendUrl}/api/v1/user/logout`
//       const { data } = await axios.get(
//         url , 
//         { withCredentials: true }
//       );
//       setIsAuthenticated(false);
//       toast.success(data.message);
//       navigateTo("/");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const gotoHome = () => {
//     navigateTo("/");
//   };
//   const handleComponent = (value) => {
//     setComponent(value);
//     setShow(false); // Hide sidebar on click
//   };
//   return (
//     <>
//       <div className="lg:hidden">
//         {/* Hamburger Menu Icon for Mobile */}
//         <div className="icon-wrapper" onClick={() => setShow(!show)}>
//           <RxHamburgerMenu />
//         </div>
//       </div>
//       {/* Sidebar Section */}
//       <aside className={show ? "sidebar h-full w-64 fixed inset-y-0 left-0 z-50 bg-gray-900 text-white transition duration-300 ease-in-out transform translate-x-0" : "sidebar h-full w-64 fixed inset-y-0 left-0 z-50 bg-gray-900 text-white transition duration-300 ease-in-out transform -translate-x-full lg:translate-x-0"}>
//         {/* Close Icon for Mobile */}
//         <div className="lg:hidden">
//           <div className="icon-wrapper-arrow" onClick={() => setShow(!show)}>
//             <FaArrowLeft />
//           </div>
//         </div>
//         {/* User Detail */}
//         <div className="user-detail flex items-center py-4 px-6">
//           <img src={user && user.avatar.url} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
//           <p>{user.name}</p>
//         </div>
//         {/* Menu Items */}
//         <ul className="px-4">
//           <li><button onClick={() => handleComponent("My Blogs")} className="w-full py-2 text-left">MY BLOGS</button></li>

//           <li><button onClick={() => handleComponent("Create Blog")} className="w-full py-2 text-left">CREATE BLOG</button></li>

//           <li><button onClick={() => handleComponent("Analytics")} className="w-full py-2 text-left">CHART</button></li>
//           <li><button onClick={() => handleComponent("My Profile")} className="w-full py-2 text-left">MY PROFILE</button></li>
//           <li><button onClick={gotoHome} className="w-full py-2 text-left">HOME</button></li>
//           <li><button onClick={handleLogout} className="w-full py-2 text-left">LOGOUT</button></li>
//           <li>
//             <button
//               onClick={() =>
//                 mode === "light" ? setMode("dark") : setMode("light")
//               }
//               className={
//                 mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
//               }
//             >
//               {mode === "light" ? (
//                 <CiLight className="light-icon" />
//               ) : (
//                 <MdDarkMode className="dark-icon" />
//               )}
//             </button>
//           </li>
//         </ul>
//       </aside>
//     </>
//   );
// };

// export default SideBar;

import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../../main";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { BackendUrl } from "../../assets/FrontendUtils";

const SideBar = ({ setComponent }) => {
  const [show, setShow] = useState(false);
  const { mode, setMode, setIsAuthenticated, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      let url = `${BackendUrl}/api/v1/user/logout`;
      const { data } = await axios.get(url, { withCredentials: true });
      setIsAuthenticated(false);
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const gotoHome = () => {
    navigateTo("/");
  };
  const handleComponent = (value) => {
    setComponent(value);
    setShow(false); // Hide sidebar on click
  };

  return (
    <div className="join  ">
      <button className="join-item btn" onClick={() => handleComponent("My Blogs")}>MY BLOGS</button>
      <button className="join-item btn btn-active" onClick={() => handleComponent("Create Blog")}>CREATE BLOG</button>
      <button onClick={() => handleComponent("Analytics")} className="join-item btn">CHART</button>
      <button className="join-item btn" onClick={() => handleComponent("My Profile")}>MY PROFILE</button>
      <button className="join-item btn" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default SideBar;

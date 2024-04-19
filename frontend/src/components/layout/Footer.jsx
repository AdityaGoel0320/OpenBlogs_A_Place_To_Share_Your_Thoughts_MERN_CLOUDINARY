import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Context } from "../../main";
import { AppName, Email, FrontendUrl, Github, LinkedIn, Phone, Twitter } from "../../assets/FrontendUtils";

const Footer = () => {
  let url = `${FrontendUrl}/dashboard`
  const isDashboard = useLocation(url);
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hidden"
          : mode === "light"
            ? "bg-gray-100"
            : "bg-gray-900 text-white"
      }
    >
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col gap-4  md:flex-row md:justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col gap-2 ">
            <h3 className="text-lg font-semibold mb-4 ">About</h3>
            <p className="text-sm ">
              A platform designed to empower you to express yourself and connect with others
            </p>
            <a className="text-sm mt-2" href={`mailto:${Email}`}>{Email}</a>

            {/* <p className="text-sm mt-2">{Email}</p> */}
            <p className="text-sm">{Phone}</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/blogs"}>All Blogs</Link></li>
              <li><Link to={"/authors"}>All Authors</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul>
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Sports</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Weekly Newsletter</h3>
              <p className="text-sm">Get blog articles and offers via email</p>
            </div>
            <div className="flex">
              <input type="text" placeholder="Your Email" className="border border-gray-300 rounded-l px-2 py-1 focus:outline-none focus:border-blue-400" />
              <button className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600 transition duration-300">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="text-lg font-semibold">{AppName}</div>
          <div className="flex space-x-4">
            <a href={LinkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-xl" /></a>
            <a href={Twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="text-xl" /></a>
            <a href={Github} target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl" /></a>
            <a href={`mailto:${Email}`}><FaEnvelope className="text-xl" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

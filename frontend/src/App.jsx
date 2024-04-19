import React, { useContext, useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Blogs from "../src/components/pages/Blogs";
import SingleBlog from "../src/components/pages/SingleBlog";
// import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import AllAuthors from "./components/pages/AllAuthors";

import { Context } from "./main";
import axios from "axios";
import UpdateBlog from "./components/pages/UpdateBlog";
import Error404 from "./components/pages/Error404";
import AboutUser from "./components/pages/AboutUser";
import { BackendUrl } from "./assets/FrontendUtils";
import Navbar from "./components/layout/Navbar2";
import SampleData from "./components/pages/SampleData";
import ParticularAuthorProfile from "./components/pages/ParticularAuthorProfile";

const App = () => {
  const { setUser, isAuthenticated, setIsAuthenticated, user, setBlogs } =
    useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let url = `${BackendUrl}/api/v1/user/myprofile`
        const { data } = await axios.get(

          url,
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser({});
      }
    };
    const fetchBlogs = async () => {
      try {
        let url = `${BackendUrl}/api/v1/blog/all`

        const { data } = await axios.get(
          url,
          { withCredentials: true }
        );
        setBlogs(data.allBlogs);
      } catch (error) {
        setBlogs([]);
      }
    };
    fetchUser();
    fetchBlogs();
  }, [isAuthenticated, user]);
  return (
    <>


      <BrowserRouter>
        <Navbar />



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/author/:authorId" element={<ParticularAuthorProfile/>} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutUser" element={<AboutUser />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/update/:id" element={<UpdateBlog />} />
          <Route path="*" element={<Error404 />} />

        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>


      {/* <SampleData/> */}

    </>
  );
};

export default App;

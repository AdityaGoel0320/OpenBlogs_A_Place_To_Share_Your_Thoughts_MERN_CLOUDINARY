import React, { useContext, useState } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import HeroSection from "../miniComponents/HeroSection";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";
import NewLetter from "../miniComponents/NewLetter";

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  return (

    <>


      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>

        <HeroSection />
        {/* <TrendingBlogs /> */}
        <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors />

        <NewLetter />
      </article>
    </>
  );
};

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";

const LatestBlogs = ({ heading, newClass, blogs }) => {
  return (
    <>
      <section
        className={
          newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"
        }
      >
        {/* <h3 className="font-bold flex items-center justify-center text-3xl m-12 uppercase">{heading}</h3> */}
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 m-12 ">
            {blogs &&
              blogs.map((element) => {
                return (
                  <NavLink to={`/blog/${element._id}`} className="m-4 bg-white rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" key={element._id} style={{ maxWidth: "300px", minWidth: "250px", minHeight: "400px" }}>
                    <img className="w-full h-48 object-cover" src={element.mainImage.url} alt="blog" />
                    <div className="p-4">
                      <span className="bg-teal-400 py-1 px-2 rounded-full">{element.category}</span>
                      <h4 className="font-bold text-xl mt-2">{element.title}</h4>
                      <div className="writer_section flex items-center mt-4">
                        <img className="w-10 h-10 rounded-full mr-2" src={element.authorAvatar} alt="author_avatar" />
                        <p className="font-bold">{element.authorName}</p>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
          </div>
        </div>


      </section>
      <NavLink to="/blogs">
        <div className="flex justify-center items-center">
          <button className="bg-purple-600 text-white font-bold rounded-lg text-xl border-2 border-black p-4">
            See more Articles
          </button>
        </div>
      </NavLink>

    </>
  );
};

export default LatestBlogs;

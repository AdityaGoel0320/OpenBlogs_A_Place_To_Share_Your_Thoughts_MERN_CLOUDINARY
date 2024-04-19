// import React, { useContext } from "react";
// import LatestBlogs from "../miniComponents/LatestBlogs";
// import { Context } from "../../main";

// import { NavLink } from "react-router-dom";


// const Blogs = () => {
//   const { mode, blogs } = useContext(Context);

//   return (
//     <>
//     <h1 className="flex justify-center items-center upppercase text-3xl font-bold m-4 p-1 ">ALL BLOGS</h1>
//     <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
//       {/* <LatestBlogs blogs={blogs} title={"Blogs"} /> */}

//       <div className="flex justify-center items-center h-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 m-12 ">
//             {blogs &&
//               blogs.map((element) => {
//                 return (
//                   <NavLink to={`/blog/${element._id}`} className="m-4 bg-white rounded-lg overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" key={element._id} style={{ maxWidth: "300px", minWidth: "250px", minHeight: "400px" }}>
//                     <img className="w-full h-48 object-cover" src={element.mainImage.url} alt="blog" />
//                     <div className="p-4">
//                       <span className="bg-teal-400 py-1 px-2 rounded-full">{element.category}</span>
//                       <h4 className="font-bold text-xl mt-2">{element.title}</h4>
//                       <div className="writer_section flex items-center mt-4">
//                         <img className="w-10 h-10 rounded-full mr-2" src={element.authorAvatar} alt="author_avatar" />
//                         <p className="font-bold">{element.authorName}</p>
//                       </div>
//                     </div>
//                   </NavLink>
//                 );
//               })}
//           </div>
//         </div>
//     </article>
//     </>
//   );
// };

// export default Blogs;



import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <h1 className="flex justify-center items-center uppercase text-3xl font-bold m-4 p-1">ALL BLOGS</h1>

      {/* Filter options */}
      <div className="flex justify-center mb-4">
        <select value={selectedCategory} onChange={handleCategoryChange} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="All">All</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Travel">Travel</option>
          <option value="Business">Business</option>
          <option value="Economy">Economy</option>
        </select>
      </div>

      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 m-12 ">
            {filteredBlogs.map((element) => (
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
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Blogs;

import React, { useContext } from "react";
import MyBlogs from '../miniComponents/MyBlogs';
import { Context } from "../../main";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ParticularAuthorProfile = () => {
  const { blogs } = useContext(Context);
  const { authorId } = useParams(); // Extracting the 'authorId' from the URL params

  // Filter the blogs array to find blogs created by the specific author
  const filteredBlogs = blogs.filter(blog => blog.createdBy === authorId);

  return (
    <div className="flex justify-center items-center h-full">
      {filteredBlogs.length === 0 ? ( // Check if filteredBlogs array is empty
        <div className="text-center">
          <h1 className="text-3xl font-bold  h-[80vh] flex justify-center items-center ">No blogs found!!!!</h1>
          {/* You can add more content or styling here */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 m-12 ">
          {/* Render the filtered blogs or any components you need */}
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
      )}
    </div>
  );
}

export default ParticularAuthorProfile;

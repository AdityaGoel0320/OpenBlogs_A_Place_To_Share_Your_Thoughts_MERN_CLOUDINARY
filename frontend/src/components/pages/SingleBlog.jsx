import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../../assets/FrontendUtils";

const SingleBlog = () => {
  const { mode, user, isAuthenticated } = useContext(Context);
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const url = `${BackendUrl}/api/v1/blog/singleblog/${id}`;
        const { data } = await axios.get(url, { withCredentials: true });
        setBlog(data.blog);
      } catch (error) {
        setBlog({});
        console.log(error);
      }
    };
    getSingleBlog();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <article className={`bg-${mode === "dark" ? "dark" : "light"} singleBlog py-8`}>
      {blog && (
        <section className="">
          <div className="flex justify-center items-center gap-4 flex-col m-4  text-center ">

            <div className="text-center text-xl font-bold border-4 border-black bg-teal-500 rounded-xl p-1 ">{blog.category}</div>
            <h1 className="text-3xl font-bold m-4">{blog.title}</h1>
          </div>
          <div className="flex items-center justify-center text-xl ">
            <img src={blog.authorAvatar} alt="author_avatar" className="w-12 h-12 rounded-full mr-2" />
            <p>{blog.authorName}</p>
          </div>

          <div className="flex justify-center items-center gap-8  m-12 ">

            {blog && blog.mainImage && (
              <img src={blog.mainImage.url} alt="mainBlogImg" className="  h-[50vh] w-[50vw] border-2 border-black shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  rounded-xl  hover:bg-red-500 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  " />
            )}
          </div>
          <p className="text-xl text-center m-4  ">{blog.intro}</p>



          <div className="flex flex-col justify-center items-center text-center m-12">

            <h3 className="text-2xl m-2 mb-4  font-bold">{blog.paraOneTitle}</h3>

            <div className="grid  gap-4 sm:grid-cols-12  m-8   ">

              <div className=' sm:col-span-5   rounded   flex justify-center items-center p-1'>

                {blog && blog.paraOneImage && (
                  <img
                    src={blog.paraOneImage.url}
                    alt="paraOneImg"
                    className="  border-black border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  rounded-xl h-72 w-72 "
                  />
                )}
              </div>

              <p className=" sm:col-span-7 rounded   p-4 ">{blog.paraOneDescription}</p>
            </div>

          </div>






          {/* <div className="flex flex-col justify-center items-center text-center m-12"> */}
          <div className="flex flex-col justify-center items-center text-center m-12">

            <h3 className="text-2xl m-2 mb-4  font-bold">{blog.paraTwoTitle}</h3>

            <div className="grid  gap-4 sm:grid-cols-12  m-8">
              <p className="sm:col-span-7 rounded   p-4">{blog.paraTwoDescription}</p>

              <div className=' sm:col-span-5   rounded   flex justify-center items-center p-1'>

                {blog && blog.paraTwoImage && (
                  <img src={blog.paraTwoImage.url} alt="paraTwoImg"
                    className="  border-black border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  rounded-xl h-72 w-72 "

                  />
                )}
              </div>
            </div>
          </div>




          {/* <div className="flex flex-col justify-center items-center text-center m-12"> */}
          <div className="flex flex-col justify-center items-center text-center m-12">

            <h3 className="text-2xl m-2 mb-4  font-bold">{blog.paraThreeTitle}</h3>

            <div className="grid  gap-4 sm:grid-cols-12  m-8">

              <div className=' sm:col-span-5 flex justify-center items-center p-1'>

                {blog && blog.paraThreeImage && (
                  <img src={blog.paraThreeImage.url} alt="paraThreeImg" 
                  className="  border-black border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  rounded-xl h-72 w-72 "

                   />

                )}
              </div>

              <p className=" sm:col-span-7 rounded   p-4  ">{blog.paraThreeDescription}</p>
            </div>
          </div>
        </section >
      )
      }
    </article >
  );
};

export default SingleBlog;

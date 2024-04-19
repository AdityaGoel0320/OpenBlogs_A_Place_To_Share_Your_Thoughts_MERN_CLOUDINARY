import React, { useEffect, useState } from "react";
import LatestBlogs from "./LatestBlogs";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { BackendUrl } from "../../assets/FrontendUtils";

const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      let url = `${BackendUrl}/api/v1/blog/myblogs`;
      const { data } = await axios.get(url, { withCredentials: true });
      setMyBlogs(data.blogs);
    };
    fetchMyBlogs();
  }, []);

  const deleteBlogHandler = async (id) => {
    let url = `${BackendUrl}/api/v1/blog/delete/${id}`;
    await axios
      .delete(url, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setMyBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <section className= " m-4 p-4 my-blogs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myBlogs && myBlogs.length > 0 ? (
          myBlogs.map((element) => (
            <>

            <div className=" shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] author-blog-card bg-white p-4 rounded-lg " key={element._id}>
              {element.mainImage && element.mainImage && (
                <img src={element.mainImage.url} alt="blogImg" className="w-full h-48 object-cover mb-4 rounded" />
              )}
              <span className="category bg-blue-500 text-white px-2 py-1 rounded-md inline-block mb-2">{element.category}</span>
              <h4 className="text-xl font-bold mb-2">{element.title}</h4>
              <div className="btn-wrapper">
                <Link
                  to={`/blog/update/${element._id}`}
                  className="update-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                >
                  <i class="fa-regular fa-pen-to-square"></i>
                </Link>
                <button
                  className="delete-btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={() => deleteBlogHandler(element._id)}
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>



            </>
          ))
        ) : (
          <p className="text-lg">You have not posted any blog!</p>
        )}
      </section>
    </>
  );
};

export default MyBlogs;

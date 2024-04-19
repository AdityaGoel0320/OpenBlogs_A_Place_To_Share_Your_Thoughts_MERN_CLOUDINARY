import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader, BounceLoader } from "react-spinners";
import { BackendUrl } from "../../assets/FrontendUtils";
import { NavLink } from "react-router-dom";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const { mode } = useContext(Context);
  useEffect(() => {
    const fetchAuthors = async () => {
      let  url = `${BackendUrl}/api/v1/user/authors`

      const { data } = await axios.get(
        url , 
        { withCredentials: true }
      );
      setAuthors(data.authors);
    };
    fetchAuthors();
  }, []);

  return (
    <article
      className={
        mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"
      }
    >
      <h3 className="font-bold text-center text-3xl mt-12 uppercase">ALL AUTHORS</h3>

      <div className="flex justify-center items-center flex-wrap p-4">

        {authors && authors.length > 0 ? (
          authors.map((element , index) => {
            return (
              <>

              <div key={element._id} className={`author-card animation-${index + 1} m-4 p-2 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105`}>
                <img className="h-24 w-24  border-black border-4  rounded-full mx-auto" src={element.avatar.url} alt="author" />
                <p className="font-bold text-center mt-2">{element.name}</p>
                <p className="font-bold text-center mt-2 bg-yellow-400 border-2 border-black rounded-lg">
                  <NavLink to={`/author/${element._id}`}>

                  See profile
                  </NavLink>
                  </p>

              </div>


             


            
            </>
            );
          })
        ) : (
          <div className="flex justify-center items-center mt-8">
            
          <BeatLoader color="gray" size={30} />
        </div>
        )}
      </div>
    </article>
  );
};

export default AllAuthors;

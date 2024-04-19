import React, { useContext } from "react";
import { Context } from "../../main";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { blogs } = useContext(Context);
  return (



    <>
     



      {/* <section className="m-12 border-4 border-red-600 h-[720px]"> */}
      <div className="hero min-h-screen relative">

        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 1).map((element) => {
            return (
              <Link to={`/blog/${element._id}`} className="" key={element._id}>
                <div className="hero-background absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: `url(${element.mainImage.url}` }}></div>

                {/* <div className="">{element.category}</div> */}




                <div className="hero-content text-center text-neutral-content relative z-10 flex items-center justify-center gap-2  flex-col">
                <button className="btn border-4 border-black text-white bg-teal-500 btn-primary font-bold">{element.category}</button>
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">{element.title}</h1>


                    <p className="mb-5 text-white flex justify-center items-center gap-2"  >
                      <img className="h-12 w-12 border-4 border-black rounded-xl font-bold" src={element.authorAvatar} alt="author_avatar" />
                      <p className="font-bold  ">{element.authorName}</p></p>
                  </div>
                </div>

                {/* <h1>{element.title}</h1>
                <div className="">
                  <div className="flex items-center justify-center">
                    <img className="h-12 w-12 font-bold" src={element.authorAvatar} alt="author_avatar" />
                    <p className="font-bold ">{element.authorName}</p>
                  </div>
                </div> */}
              </Link>
            );
          })


        ) : (
          <BeatLoader color="gray" size={30} />
        )
        }
      </div >
    </>

  );
};

export default HeroSection;


// <div className="hero min-h-screen relative">
// {/* Background image with blur */}
// <div className="hero-background absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}></div>
// {/* Content */}
// <div className="hero-content text-center text-neutral-content relative z-10">
//   <div className="max-w-md">
//     <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
//     <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     <button className="btn btn-primary">Get Started</button>
//   </div>
// </div>
// </div>

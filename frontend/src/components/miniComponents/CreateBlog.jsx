import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BackendUrl } from "../../assets/FrontendUtils";

const CreateBlog = () => {
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [intro, setIntro] = useState("");
  const [paraOneTitle, setParaOneTitle] = useState("");
  const [paraOneImage, setParaOneImage] = useState("");
  const [paraOneDescription, setParaOneDescription] = useState("");
  const [paraTwoTitle, setParaTwoTitle] = useState("");
  const [paraTwoImage, setParaTwoImage] = useState("");
  const [paraTwoDescription, setParaTwoDescription] = useState("");
  const [paraThreeTitle, setParaThreeTitle] = useState("");
  const [paraThreeImage, setParaThreeImage] = useState("");
  const [paraThreeDescription, setParaThreeDescription] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [paraOneImagePreview, setParaOneImagePreview] = useState("");
  const [paraTwoImagePreview, setParaTwoImagePreview] = useState("");
  const [paraThreeImagePreview, setParaThreeImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(true);

  const mainImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setMainImagePreview(reader.result);
      setMainImage(file);
    };
  };
  const paraOneImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaOneImagePreview(reader.result);
      setParaOneImage(file);
    };
  };
  const paraTwoImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaTwoImagePreview(reader.result);
      setParaTwoImage(file);
    };
  };
  const paraThreeImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaThreeImagePreview(reader.result);
      setParaThreeImage(file);
    };
  };

  const handleBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("intro", intro);
    formData.append("mainImage", mainImage);
    formData.append("category", category);
    formData.append("published", published);
    if (paraOneTitle.length > 0) {
      formData.append("paraOneTitle", paraOneTitle);
    }
    if (paraOneDescription.length > 0) {
      formData.append("paraOneDescription", paraOneDescription);
    }
    if (paraOneImage) {
      formData.append("paraOneImage", paraOneImage);
    }
    if (paraTwoTitle.length > 0) {
      formData.append("paraTwoTitle", paraTwoTitle);
    }
    if (paraTwoDescription.length > 0) {
      formData.append("paraTwoDescription", paraTwoDescription);
    }
    if (paraTwoImage) {
      formData.append("paraTwoImage", paraTwoImage);
    }
    if (paraThreeTitle.length > 0) {
      formData.append("paraThreeTitle", paraThreeTitle);
    }
    if (paraThreeDescription.length > 0) {
      formData.append("paraThreeDescription", paraThreeDescription);
    }
    if (paraThreeImage) {
      formData.append("paraThreeImage", paraThreeImage);
    }

    try {
      let url = `${BackendUrl}/api/v1/blog/post`
      const { data } = await axios.post(
        url,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setTitle("");
      setIntro("");
      setCategory("");
      setMainImage("");
      setMainImagePreview("");
      setParaOneTitle("");
      setParaOneDescription("");
      setParaOneImage("");
      setParaOneImagePreview("");
      setParaTwoTitle("");
      setParaTwoDescription("");
      setParaTwoImage("");
      setParaTwoImagePreview("");
      setParaThreeTitle("");
      setParaThreeDescription("");
      setParaThreeImage("");
      setParaThreeImagePreview("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className=" flex flex-col rounded-3xl justify-center items-center">
      <h3 className="font-bold text-center text-3xl m-4 uppercase">CREATE BLOG</h3>


      <div className=" flex gap-4 w-full  flex-col border-black rounded-3xl p-1   justify-center items-center  ">

        <form onSubmit={handleBlog} className="flex flex-col  border-black rounded-3xl p-1 m-1   justify-center items-center   gap-4   ">
          <div className=" flex justify-center item-center m-4 p-2">
            {/* <label className="text-xl  mr-4 uppercse ">Category</label> */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="font-bold border-2 p-2   border-black rounded-md "
            >
              <option value="">Select Blog Category</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Travel">Travel</option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="BLOG MAIN TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="   flex flex-col rounded-3xl   justify-center items-center  font-bold text-2xl p-1 m-2  text-black  border-black border-2 w-fit "
          />


          <div className="flex items-center gap-2  justify-center flex-col">
            <label className="font-bold text-2xl ">BLOG MAIN IMAGE</label>
            <img
              src={mainImagePreview ? `${mainImagePreview}` : "/imgPL.webp"}
              // src="./Images/"
              alt="Here comes your main blog image"
              className=" flex text-center items-center justify-center   h-36 w-36 border border-black rounded-lg "
            />
            <input
              type="file"
              onChange={mainImagePreviewHandler}
              className="   border-4 m-4 "
            />
          </div>


          <textarea
            rows="5"
            cols={100}
            className="border-2 border-blue-500 text-md  p-4   rounded-xl  w-[80vw] "
            placeholder="BLOG INTRO..... (Must contain at least 250 characters!)"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />


          <div className="sub-para   flex flex-col  items-center gap-4  justify-center m-4 ">
            <input
              type="text"
              placeholder="Paragraph one title"
              value={paraOneTitle}
              onChange={(e) => setParaOneTitle(e.target.value)}
              className="  border-2 flex flex-col border-black rounded-3xl p-2 m-2   justify-center items-center  font-bold text-2xl  "

            />
            <img
              src={
                paraOneImagePreview ? `${paraOneImagePreview}` : "/imgPL.webp"
              }
              alt="Here comes your 1st para image"

              className=" flex text-center items-center justify-center   h-36 w-36 border border-black rounded-lg "

            />
            <input
              type="file"
              onChange={paraOneImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="5"
              cols={100}
              className="border-2 border-blue-500 text-md  p-4  w-[80vw]  rounded-xl"
              placeholder="Blog First Sub Paragraph Comes Here..."

              value={paraOneDescription}
              onChange={(e) => setParaOneDescription(e.target.value)}
            />
          </div>


          <div className="sub-para m-4   flex flex-col  items-center gap-4  justify-center">

            <input
              type="text"
              placeholder="Paragraph two title"
              value={paraTwoTitle}
              onChange={(e) => setParaTwoTitle(e.target.value)}
              className="  border-2 flex flex-col border-black rounded-3xl p-2 m-2   justify-center items-center  font-bold text-2xl  "

            />
            <img
              src={
                paraTwoImagePreview ? `${paraTwoImagePreview}` : "/imgPL.webp"
              }
              alt="Here comes your 2nd para image"

              className=" flex text-center items-center justify-center   h-36 w-36 border border-black rounded-lg "

            />
            <input
              type="file"
              onChange={paraTwoImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="5"
              cols={100}
              className="border-2 border-blue-500 text-md  p-4   rounded-xl  w-[80vw] "

              placeholder="Blog Second Sub Paragraph Comes Here..."
              value={paraTwoDescription}
              onChange={(e) => setParaTwoDescription(e.target.value)}
            />
          </div>




          <div className="sub-para m-4   flex flex-col  items-center gap-4  justify-center">

            <input
              type="text"
              placeholder="Paragraph three title"
              value={paraThreeTitle}
              onChange={(e) => setParaThreeTitle(e.target.value)}
              className="  border-2 flex flex-col border-black rounded-3xl p-2 m-2   justify-center items-center  font-bold text-2xl  "

            />
            <img
              src={
                paraThreeImagePreview
                  ? `${paraThreeImagePreview}`
                  : "/imgPL.webp"
              }
              alt="Here comes your 3rd para image"
              className=" flex text-center items-center justify-center   h-36 w-36 border border-black rounded-lg "

            />
            <input
              type="file"
              onChange={paraThreeImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows="5"
              cols={100}
              className="border-2 border-blue-500 text-md  p-4   w-[80vw]  rounded-xl"

              placeholder="Blog Third Sub Paragraph Comes Here..."
              value={paraThreeDescription}
              onChange={(e) => setParaThreeDescription(e.target.value)}
            />
          </div>
          <div className="publish-box">
            <label className="font-bold text-xl ">Wants to publish now?</label>
            <select
              value={published}
              onChange={(e) => setPublished(e.target.value === "true")}
              className="font-bold text-xl rounded-xl ml-4  p-1 "
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button className="create-btn border-4 border-black bg-purple-500 font-bold hover:bg-purple-700 rounded-2xl p-1 " type="submit">
            POST BLOG
          </button>
        </form>


<div className="bg-white h-16 w-16 m-12 p-12 ">

</div>

      </div>

      
    </section>
  );
};

export default CreateBlog;

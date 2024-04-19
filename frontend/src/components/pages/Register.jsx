import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { BackendUrl } from "../../assets/FrontendUtils";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const changeAvatarHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };

  const { mode, isAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("education", education);
    formData.append("role", role);
    formData.append("avatar", avatar);

    try {
      let url = `${BackendUrl}/api/v1/user/register`
      const { data } = await axios.post(

        url,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setEducation("");
      setPassword("");
      setPhone("");
      setRole("");
      setAvatar("");
      setAvatarPreview("");
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="p-12 bg-gray-100 ">

      <article className={`bg-gray-100 min-h-screen flex items-center justify-center `}>
        <section className="auth-form p-8 rounded-md shadow-lg bg-white">
          <form onSubmit={handleRegister} className="space-y-4">
            <h1 className="text-3xl font-bold text-center">REGISTER</h1>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">SELECT ROLE</option>
              <option value="Reader">READER</option>
              <option value="Author">AUTHOR</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">SELECT YOUR EDUCATION</option>
              <option value="Matric">Matric</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graducation">Graducation</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
            <div className="flex items-center">
              <div className="avatar">
                <img
                  src={avatarPreview ? `${avatarPreview}` : "/pic.jpg"}
                  alt="avatar"
                />
              </div>
              <input
                type="file"
                onChange={changeAvatarHandler}
                className="avatar_input_tag"
                style={{ border: "none" }}
              />
            </div>
            <p className="text-center">
              Already Registered?{" "}
              <Link to={"/login"} className="text-blue-500 hover:underline">
                Login Now
              </Link>
            </p>
            <button
              className="block w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              REGISTER
            </button>
          </form>
        </section>
      </article>

    </div>

  );
};

export default Register;

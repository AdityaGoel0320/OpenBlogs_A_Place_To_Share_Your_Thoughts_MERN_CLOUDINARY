import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { BackendUrl } from "../../assets/FrontendUtils";
import { CSSTransition } from "react-transition-group";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { mode, isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  let url = `${BackendUrl}/api/v1/user/login`;

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(
        url,
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setEmail("");
        setPassword("");
        setRole("");
        navigateTo("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <article className={`bg-gray-100 min-h-screen flex items-center justify-center`}>
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <section className="auth-form p-8 rounded-md shadow-lg bg-white">
          <form onSubmit={handleLogin} className="space-y-4">
            <h1 className="text-3xl font-bold text-center">LOGIN</h1>
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT ROLE</option>
                <option value="Reader">READER</option>
                <option value="Author">AUTHOR</option>
              </select>
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-blue-500 hover:underline">
                Register Now
              </Link>
            </p>
            <button
              className="block w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </section>
      </CSSTransition>
    </article>
  );
};

export default Login;

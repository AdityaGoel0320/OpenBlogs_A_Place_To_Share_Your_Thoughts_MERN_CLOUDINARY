
import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../../main";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { BackendUrl } from "../../assets/FrontendUtils";

const BottomNav = ({ setComponent }) => {

    const [show, setShow] = useState(false);
    const { mode, setMode, setIsAuthenticated, user } = useContext(Context);
    const navigateTo = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            let url = `${BackendUrl}/api/v1/user/logout`;
            const { data } = await axios.get(url, { withCredentials: true });
            setIsAuthenticated(false);
            toast.success(data.message);
            navigateTo("/");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const gotoHome = () => {
        navigateTo("/");
    };
    const handleComponent = (value) => {
        setComponent(value);
        setShow(false); // Hide sidebar on click
    };

    return (
        // <div>BottomNav</div>
        <>


            <div class=" bg-white text-black  fixed bottom-0 left-0 z-50 w-full  ">
                <div class=" join grid h-full max-w-lg grid-cols-4 mx-auto font-medium   shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                        <button className="join-item btn" onClick={() => handleComponent("My Blogs")}>MY BLOGS</button>
                        <button className="join-item btn btn-active" onClick={() => handleComponent("Create Blog")}>CREATE BLOG</button>
                        <button onClick={() => handleComponent("Analytics")} className="join-item btn">CHART</button>
                        <button className="join-item btn" onClick={() => handleComponent("My Profile")}><i class="fa-solid fa-user"></i></button>
                </div>
            </div>

        </>
    )
}

export default BottomNav
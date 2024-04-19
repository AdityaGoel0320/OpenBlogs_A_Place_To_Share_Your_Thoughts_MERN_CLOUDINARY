import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../main";

const AboutUser = () => {
  const { user, mode } = useContext(Context);
  const [img, setImg] = useState("");
  console.log(user)
  // Check if user and avatar properties are defined before accessing them
  useEffect(() => {
    if (user && user.avatar && user.avatar.url) {
      setImg(user.avatar.url);
    }
  }, [user]);

  return (
    <>

      <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
        <div className="UserContainer">
          {img && <img src={img} alt="" />} {/* Render img tag only if img is defined */}
          <h1>{user.name}</h1>
          <p>Email: <strong>  {user.email}</strong></p>
          <p>Phone: <strong> {user.phone}</strong></p>
          <p>Education: <strong> {user.education}</strong></p>
          <p>Role: <strong> {user.role}</strong></p>
          <p>Created On: <strong> {user.createdOn}</strong></p>
        </div>
      </article>
    </>
  );
};


export default AboutUser;

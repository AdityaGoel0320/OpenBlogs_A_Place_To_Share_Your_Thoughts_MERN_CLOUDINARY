import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../main";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user, mode } = useContext(Context);
  const [img, setImg] = useState("");

  // Check if user and avatar properties are defined before accessing them
  useEffect(() => {
    if (user && user.avatar && user.avatar.url) {
      setImg(user.avatar.url);
    }
  }, [user]);

  return (
    <motion.article
      className={
        mode === "dark"
          ? "dark-bg about shadow-lg rounded-lg overflow-hidden"
          : "light-bg about shadow-lg rounded-lg overflow-hidden"
      }
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="UserContainer mx-auto max-w-md p-6 m-4">
        {img && (
          <motion.img
            src={img}
            alt=""
            className="mx-auto rounded-full w-24 h-24 mb-4 shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        )}
        {/* Render img tag only if img is defined */}
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="mb-2">
          Email: <strong>{user.email}</strong>
        </p>
        <p className="mb-2">
          Phone: <strong>{user.phone}</strong>
        </p>
        <p className="mb-2">
          Education: <strong>{user.education}</strong>
        </p>
        <p className="mb-2">
          Role: <strong>{user.role}</strong>
        </p>
        <p className="mb-2">
          Created On: <strong>{user.createdOn}</strong>
        </p>
      </div>
    </motion.article>
  );
};

export default MyProfile;

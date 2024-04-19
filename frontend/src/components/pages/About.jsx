import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);

  return (
    <article className="py-12  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="mb-4">
          Welcome to our <strong>blogging platform</strong>! We're passionate about providing a space for everyone to share their thoughts, stories, and experiences through writing. Whether you're a seasoned writer or just starting out, our platform is designed to <strong>empower you</strong> to express yourself and connect with others.
        </p>
        <p className="mb-4">
          At our blogging website, we've integrated a <strong>user-friendly dashboard</strong> that allows you to easily manage your blog posts, track your readership, and engage with your audience. Our unique features make it simple for you to <strong>create, edit, and publish</strong> your content, ensuring that your voice is heard.
        </p>
        <p className="mb-4">
          We believe in fostering a community of diverse voices and perspectives. Whether you're interested in <strong>lifestyle, technology, sports, travel, business,</strong> or <strong>economy,</strong> there's a place for you here. Join us in shaping the conversation and inspiring others through your writing.
        </p>
        <p className="mb-4">
          Our platform is committed to providing a seamless experience for both writers and readers. With our <strong>intuitive interface</strong> and <strong>robust features,</strong> you can focus on what matters most—sharing your stories and connecting with your audience.
        </p>
        <p className="mb-4">
          Thank you for being a part of our community. Together, we can create a space where <strong>everyone's voice</strong> is valued and respected. Happy blogging!
        </p>
      </div>
    </article>
  );
};

export default About;

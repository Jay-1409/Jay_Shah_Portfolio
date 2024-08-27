import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Profiles } from './Profiles';

export const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-500"
        style={{
        backgroundImage: `url('/Static/Images/Back3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "8px solid skyblue",
        borderRadius: "15px",
        padding: "20px",
        }}
    >
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I am Jay, a [Your Profession]</p>
        <div className="mt-6">
          <button className="bg-skyblue text-black px-4 py-2 rounded-md mr-4">View My Work</button>
          <button className="bg-skyblue text-black px-4 py-2 rounded-md">Contact Me</button>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-skyblue transition-colors duration-300" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-skyblue transition-colors duration-300" />
          </a>
        </div>
      </motion.div>

      {/* New Section with Image and Description Boxes */}
      <div className="flex mt-10 space-x-8">
        {/* Image Box */}
        <div className="w-1/2 p-4 border-2 border-skyblue rounded-lg bg-white bg-opacity-10">
          <img 
            src="/Static/Images/YourImage.jpg" 
            alt="Your Image Description" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Description Box */}
        <div className="w-1/2 p-4 border-2 border-skyblue rounded-lg bg-white bg-opacity-10 text-white">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I am Jay, a passionate developer with experience in building web applications using React, JavaScript, and more. I love solving complex problems and am constantly learning new technologies to improve my skills. When I'm not coding, I enjoy participating in competitive programming and exploring the latest trends in tech.
          </p>
        </div>
      </div>

      <Profiles />
    </section>
  )
}

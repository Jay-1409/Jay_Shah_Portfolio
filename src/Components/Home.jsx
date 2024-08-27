import React from 'react';
import { motion } from 'framer-motion';
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
        {/* Add your title or other content here */}
      </motion.div>

      {/* Enhanced Section with Image and Description Boxes */}
      <div className="flex mt-10 space-x-6 justify-center">
        {/* Image Box with Border Tilt and Rotation */}
        <motion.div 
          className="w-1/3 p-3 border-2 border-skyblue rounded-3xl bg-white bg-opacity-10 overflow-hidden"
          style={{
            backgroundColor: "#000000a5",
            boxShadow: "0px 0px 20px 20px #000000a5",
          }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="relative">
            <img 
              src="/Static/Images/Photo.jpeg" 
              alt="Your Image Description" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{
                transform: 'rotate(0deg)' // Ensures the image does not rotate
              }}
            />
          </div>
        </motion.div>

        {/* Description Box */}
        <motion.div 
          className="w-1/3 p-3 border-2 border-skyblue rounded-3xl bg-white bg-opacity-10 text-white"
          style={{
            backgroundColor: "#000000a5",
            boxShadow: "0px 0px 20px 20px #000000a5",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px 20px #1e90ff" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <p className="text-md">
            I am Jay, a passionate developer with experience in building web applications using React, JavaScript, and more. I love solving complex problems and am constantly learning new technologies to improve my skills. When I'm not coding, I enjoy participating in competitive programming and exploring the latest trends in tech.
          </p>
        </motion.div>
      </div>

      <Profiles />
    </section>
  );
};

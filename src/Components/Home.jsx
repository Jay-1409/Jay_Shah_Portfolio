import React from 'react';
import { motion } from 'framer-motion';
import { Profiles } from './Profiles';

export const Home = ({ minimalisticMode }) => {
  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center h-screen ${minimalisticMode ? '' : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-500'}`}
      style={{
        backgroundImage: minimalisticMode ? 'none' : `url('/Static/Images/Back3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: minimalisticMode ? 'none' : "8px solid skyblue",
        borderRadius: minimalisticMode ? '0' : "15px",
      }}
    >
            <div className="absolute top-0 left-0 rounded-lg shadow-lg w-24 h-auto object-cover">
            <img
              src="/Static/Images/Photo.jpeg"
              alt="Your Image Description"
              className="top-0 rounded-lg shadow-lg w-full h-auto object-cover"
              style={{
                transform: 'rotate(0deg)', // Ensures the image does not rotate
              }}
            />
          </div>

      <motion.div
        className={`text-center ${minimalisticMode ? 'text-black' : 'text-white'}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Add your title or other content here */}
      </motion.div>

      <div className="flex mt-10 space-x-6 justify-center">
        {/* Image Box with Border Tilt and Rotation */}
        <motion.div
          className={`w-1/2 p-3 border-2 ${minimalisticMode ? 'border-black' : 'border-skyblue'} rounded-3xl ${minimalisticMode ? 'bg-gray-200' : 'bg-white bg-opacity-10'} overflow-hidden`}
          style={{
            backgroundColor: minimalisticMode ? '#f0f0f0' : "#000000a5",
            boxShadow: minimalisticMode ? 'none' : "0px 0px 20px 20px #000000a5",
          }}
          animate={{ rotate: minimalisticMode ? 0 : [0, 2, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <p className='text-black text-2xl font-bold mb-3'>Recents</p>
        </motion.div>

        {/* Description Box */}
        <motion.div
          className={`w-1/2 p-3 border-2 ${minimalisticMode ? 'border-black' : 'border-skyblue'} rounded-3xl ${minimalisticMode ? 'bg-gray-200 text-black' : 'bg-white bg-opacity-10 text-white'}`}
          style={{
            backgroundColor: minimalisticMode ? '#f0f0f0' : "#000000a5",
            boxShadow: minimalisticMode ? 'none' : "0px 0px 20px 20px #000000a5",
          }}
          whileHover={minimalisticMode ? {} : { scale: 1.05, boxShadow: "0px 0px 30px 20px #1e90ff" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl font-bold mb-3 ${minimalisticMode ? 'text-black' : 'text-white'}`}>About Me</h2>
          <p className={`text-md ${minimalisticMode ? 'text-black' : 'text-white'}`}>
            I am Jay, a passionate developer with experience in building web applications using React, JavaScript, and more. I love solving complex problems and am constantly learning new technologies to improve my skills. When I'm not coding, I enjoy participating in competitive programming and exploring the latest trends in tech.
          </p>
        </motion.div>
      </div>

      <Profiles />
    </section>
  );
};

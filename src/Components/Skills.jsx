import React from "react";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-15"
      style={{
        backgroundImage: `url('/Static/Images/Back5.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "8px solid green",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for darkening */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-left mb-10">Skills</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-2 border-white border-opacity-30 p-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-3xl font-semibold text-white mb-6">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-400 text-lg space-y-3">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-2 border-white border-opacity-30 p-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-3xl font-semibold text-white mb-6">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-400 text-lg space-y-3">
              <li>Node.js</li>
              <li>Express</li>
              <li>Flask</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md border-2 border-white border-opacity-30 p-8 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
            <h3 className="text-3xl font-semibold text-white mb-6">Other Skills</h3>
            <ul className="list-disc list-inside text-gray-400 text-lg space-y-3">
              <li>Github</li>
              <li>Google Clouds</li>
              <li>APIs</li>
              <li>Competitive Programming</li>
            </ul>
          </div>
          {/* Add more skill cards as needed */}
        </div>
      </div>
    </section>
  );
}

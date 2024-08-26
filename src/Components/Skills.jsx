import React from "react";
export const Skills = () => {
    return (
        <section id="skills" className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center">Skills</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                <p className="mt-2 text-gray-400">React, JavaScript, HTML, CSS, Tailwind CSS</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white">Backend Development</h3>
                <p className="mt-2 text-gray-400">Node.js, Express, Flask, SQL</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white">Other Skills</h3>
                <p className="mt-2 text-gray-400">Git, Docker, REST APIs</p>
              </div>
              {/* Add more skill cards as needed */}
            </div>
          </div>
        </section>
    )
  }
  
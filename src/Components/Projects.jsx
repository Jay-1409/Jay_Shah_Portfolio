import React from "react";
//rafc
export const Projects = () => {
  return (
    <section id="Projects" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-900 hover:to-gray-800 transition-all duration-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-white">Project 1</h3>
            <p className="mt-2 text-gray-400">Description of the project and what it does.</p>
            <div className="mt-4">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600">Live Demo</a> | 
                <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600 ml-2">Source Code</a>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

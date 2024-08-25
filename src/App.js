// src/App.js
import React from 'react';
// import ParticlesBackground from './Components/ParticlesBackground';
import Snowflakes from './Snowflakes';
function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
          <Snowflakes/>
      <header className="relative z-10 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">My Portfolio</div>
            <div>
              <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#skills" className="text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#projects" className="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact Me</a>
              <a href="#books" className="text-white px-3 py-2 rounded-md text-sm font-medium">Book Recommendation</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">I am [Your Name], a [Your Profession]</p>
          </div>
        </section>

        {/* Skills Section */}
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

        {/* Projects Section */}
        <section id="projects" className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center">Projects</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-white">Project 1</h3>
                <p className="mt-2 text-gray-400">Description of the project and what it does.</p>
                <div className="mt-4">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600">Live Demo</a> | 
                  <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600 ml-2">Source Code</a>
                </div>
              </div>
              {/* Repeat for other projects */}
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center">Book Recommendations</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white">Book Title 1</h3>
                <p className="mt-2 text-gray-400">Author: Author Name</p>
                <p className="mt-2 text-gray-400">A brief description of the book, highlighting its key points and why you recommend it.</p>
              </div>
              {/* Repeat for other books */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
            <div className="mt-8 max-w-lg mx-auto">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-white">Or reach out to me on:</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600">
                    Twitter
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600">
                    LinkedIn
                  </a>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-600">
                    GitHub
                  </a>
                  {/* Add more social links as needed */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder for other sections */}
      </main>
    </div>
  );
}

export default App;

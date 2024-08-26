// src/App.js
import React from 'react';
import Snowflakes from './Snowflakes';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Books } from './Components/Books';
import { Contactme } from './Components/Contactme';

// Background image URL (Change as needed)
const backgroundImage = 'https://example.com/your-background-image.jpg';

function App() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Snowflakes />
      <header className="relative z-10 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-opacity-80 hover:bg-opacity-90 transition-all duration-500">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">My Portfolio</div>
            <div>
              <a href="#home" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Home</a>
              <a href="#skills" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Skills</a>
              <a href="#projects" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Projects</a>
              <a href="#contact" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Contact Me</a>
              <a href="#books" className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">Book Recommendation</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-500">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">I am [Your Name], a [Your Profession]</p>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Books Section */}
        <Books />

        {/* Contact Section */}
        <Contactme />
      </main>
    </div>
  );
}

export default App;

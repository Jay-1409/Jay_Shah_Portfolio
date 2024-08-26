import React, { useState } from 'react';
import Snowflakes from './Snowflakes';
import FlowerFall from './Components/FlowerFall';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Books } from './Components/Books';
import { Contactme } from './Components/Contactme';

// Background image URL (Change as needed)
const backgroundImage = 'https://example.com/back.jpg';

function App() {
  const [showSnowflakes, setShowSnowflakes] = useState(true);

  const toggleAnimation = () => {
    setShowSnowflakes(!showSnowflakes);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    > 
      {showSnowflakes ? <Snowflakes /> : <FlowerFall />}
      
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">My Portfolio</div>
            <div className="flex space-x-4">
              <a href="#home" className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">Home</a>
              <a href="#skills" className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">Skills</a>
              <a href="#projects" className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">Projects</a>
              <a href="#contact" className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">Contact Me</a>
              <a href="#books" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">Book Recommendation</a>
              <button 
                onClick={toggleAnimation} 
                className="bg-yellow-500 text-white px-4 py-2 ml-4 rounded-full text-sm font-medium hover:bg-yellow-600 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                Toggle Snow/Flower
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative"> {/* Added padding-top to account for the fixed header */}
        <section id="home" className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-500"
              style={{
                backgroundImage: `url('/Static/Images/Back3.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "8px solid skyblue",
                borderRadius: "15px",
                padding: "20px",
              }}
              >
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

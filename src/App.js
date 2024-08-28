import React, { useState } from 'react';
import Snowflakes from './Snowflakes';
import FlowerFall from './Components/FlowerFall';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Books } from './Components/Books';
import { Contactme } from './Components/Contactme';
import { Home } from './Components/Home';
import { Profiles } from './Components/Profiles';

function App() {
  const [showSnowflakes, setShowSnowflakes] = useState(true);
  const [minimalisticMode, setMinimalisticMode] = useState(true);

  const toggleAnimation = () => {
    setShowSnowflakes(!showSnowflakes);
  };

  const toggleMinimalisticMode = () => {
    setMinimalisticMode(!minimalisticMode);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundImage: minimalisticMode ? 'none' : `url('/Static/Images/Back3.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {showSnowflakes && !minimalisticMode && <Snowflakes />}
      {!showSnowflakes && !minimalisticMode && <FlowerFall />}

      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-xl font-bold ${minimalisticMode ? 'text-black' : 'text-white'}`}>Jay Shah</div>
            <div className="flex space-x-4">
              <a
                href="/home"
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-yellow-500 text-white'
                } px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Home
              </a>
              <a
                href="#skills"
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-yellow-500 text-white'
                } px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Skills
              </a>
              <a
                href="#Projects"
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-yellow-500 text-white'
                } px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-red-500 text-white'
                } px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Contact Me
              </a>
              <a
                href="#books"
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-green-500 text-white'
                } px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Book Recommendation
              </a>
              <button
                onClick={toggleAnimation}
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-yellow-500 text-white'
                } px-4 py-2 ml-4 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Toggle Snow/Flower
              </button>
              <button
                onClick={toggleMinimalisticMode}
                className={`${
                  minimalisticMode ? 'bg-white text-black' : 'bg-gray-800 text-white'
                } px-4 py-2 ml-4 rounded-full text-sm font-medium hover:bg-yellow-500 transition-transform transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                Toggle Minimalistic Mode
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Home minimalisticMode={minimalisticMode} />
        <Skills minimalisticMode={minimalisticMode} />
        <Projects minimalisticMode={minimalisticMode} />
        <Books minimalisticMode={minimalisticMode} />
        <Contactme minimalisticMode={minimalisticMode} />
        <Profiles minimalisticMode={minimalisticMode} />
      </main>
    </div>
  );
}

export default App;

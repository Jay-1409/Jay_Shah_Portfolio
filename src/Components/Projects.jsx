import React from "react";

export const Projects = ({ minimalisticMode }) => {
  return (
    <section
      id="Projects"
      className={`relative py-12 ${minimalisticMode ? 'bg-black border-none' : ''}`}
      style={{
        backgroundImage: minimalisticMode ? 'none' : `url('/Static/Images/Back2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: minimalisticMode ? "none" : "8px solid white",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      {!minimalisticMode && <div className="absolute inset-0 bg-white bg-opacity-50"></div>}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold ${minimalisticMode ? 'text-black' : 'text-white'} text-left`}>Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Item 1 */}
          <div className={`relative overflow-hidden border-8 ${minimalisticMode ? 'border-none' : 'border-black'} rounded-lg p-4 ${minimalisticMode ? 'bg-white' : 'bg-white'} transition-shadow hover:shadow-xl`}>
            <img
              src="/Static/Images/Gta5Chat.png"
              alt="GTA-5 CHAT"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className={`text-xl font-semibold ${minimalisticMode ? 'text-black' : 'text-gray-900'} mb-2`}>GTA5-CHAT</h3>
            <p className={`mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              This website enables you to chat with more than 10 different characters from GTA-5. The responses are realistically just like the game characters.
            </p>
            <div className="mt-4">
              <a
                href="https://gta5chat-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-indigo-400 hover:text-indigo-600 ${minimalisticMode ? 'hover:text-indigo-300' : ''}`}
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Jay-1409/GTA5Chat"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-indigo-400 hover:text-indigo-600 ml-2 ${minimalisticMode ? 'hover:text-indigo-300' : ''}`}
              >
                Source Code
              </a>
            </div>
            <h3 className={`text-lg font-semibold ${minimalisticMode ? 'text-black' : 'text-gray-900'} mt-4`}>Technologies Used:</h3>
            <ul className={`list-disc list-inside mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              <li>HTML</li>
              <li>Flask</li>
              <li>Gemini Generative AI API</li>
              <li>CSS (Vanilla)</li>
              <li>MySQLAlchemy</li>
            </ul>
          </div>

          {/* Project Item 2 */}
          <div className={`relative overflow-hidden border-8 ${minimalisticMode ? 'border-none' : 'border-black'} rounded-lg p-4 ${minimalisticMode ? 'bg-white' : 'bg-white'} transition-shadow hover:shadow-xl`}>
            <img
              src="/Static/Images/FinanceBuddy.png"
              alt="Finance Buddy"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className={`text-xl font-semibold ${minimalisticMode ? 'text-black' : 'text-gray-900'} mb-2`}>Finance Buddy</h3>
            <p className={`mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              This website helps you manage your money and provides you with graphical data.
            </p>
            <p className={`mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              The AI analyzer provides feedback and tips; you can consult it anytime for help.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/Jay-1409/CSE100-Project"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-indigo-400 hover:text-indigo-600 ml-2 ${minimalisticMode ? 'hover:text-indigo-300' : ''}`}
              >
                Source Code
              </a>
            </div>
            <h3 className={`text-lg font-semibold ${minimalisticMode ? 'text-black' : 'text-gray-900'} mt-4`}>Technologies Used:</h3>
            <ul className={`list-disc list-inside mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              <li>HTML</li>
              <li>Flask</li>
              <li>OpenAI API</li>
              <li>CSS (Vanilla)</li>
              <li>Matplotlib</li>
            </ul>
          </div>

          {/* Project Item 3 */}
          <div className={`relative overflow-hidden border-8 ${minimalisticMode ? 'border-none' : 'border-black'} rounded-lg p-4 ${minimalisticMode ? 'bg-white' : 'bg-white'} transition-shadow hover:shadow-xl`}>
            <img
              src="/Static/Images/CommingSoon.jpeg"
              alt="Portfolio"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className={`text-xl font-semibold ${minimalisticMode ? 'text-black' : 'text-gray-900'} mb-2`}>Portfolio</h3>
            <p className={`mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              This website tells you more about me.
            </p>
            <div className="mt-4">
              <a
                href="https://gta5chat-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-indigo-400 hover:text-indigo-600 ${minimalisticMode ? 'hover:text-indigo-300' : ''}`}
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Jay-1409/Jay_Shah_Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-indigo-400 hover:text-indigo-600 ml-2 ${minimalisticMode ? 'hover:text-indigo-300' : ''}`}
              >
                Source Code
              </a>
            </div>
            <h3 className={`text-lg font-semibold ${minimalisticMode ? 'text-black' : 'text-gray-900'} mt-4`}>Technologies Used:</h3>
            <ul className={`list-disc list-inside mt-2 ${minimalisticMode ? 'text-black' : 'text-gray-700'}`}>
              <li>HTML</li>
              <li>React</li>
              <li>Gemini Generative AI API</li>
              <li>CSS (Vanilla + Tailwind)</li>
              <li>Google Generative AI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

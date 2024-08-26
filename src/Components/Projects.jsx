import React from "react";

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-900 hover:to-gray-800 transition-all duration-500 py-12"
      style={{
        backgroundImage: `url('/Static/Images/Back2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "8px solid white",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <style>
        {`
          .project-box {
            position: relative;
            overflow: hidden;
            border: 8px solid black;
            border-radius: 15px;
            padding: 20px;
            background: #272727;
            margin-bottom: 20px;
          }

          .project-box::before {
            content: '';
            position: absolute;
            left: -500%;
            bottom: 0;
            width: 300%;
            height: 500%;
          }

          .project-box:hover::before {
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-left">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-box">
            <img
              src="/Static/Images/Gta5Chat.png"
              alt="GTA-5 CHAT"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">GTA5-CHAT</h3>
            <p className="mt-2 text-gray-400">
              This website enables you to chat with more than 10 different
              characters from GTA-5. The responses are realistically just like
              the game characters.
            </p>
            <div className="mt-4">
              <a
                href="https://gta5chat-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600"
              >
                Live Demo
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Jay-1409/GTA5Chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600 ml-2"
              >
                Source Code
              </a>
            </div>
            <h3 className="text-lg font-semibold text-white mt-4">
              Technologies Used:
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>HTML</li>
              <li>Flask</li>
              <li>Gemini Generative AI API</li>
              <li>CSS (Vanilla)</li>
              <li>MySQLAlchemy</li>
            </ul>
          </div>

          <div className="project-box">
            <img
              src="/Static/Images/FinanceBuddy.png"
              alt="Finance Buddy"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Finance Buddy</h3>
            <p className="mt-2 text-gray-400">
              This website helps you manage your money, Provides you with graphical data</p>
            <p className="mt-2 text-gray-400">
              The AI analyser provides you with feedback and tips, you can consult it anytime for any help
              </p>
            <div className="mt-4">
              {/* <a
                href="https://gta5chat-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600"
              >
                Live Demo
              </a>{" "}
              |{" "} */}
              <a
                href="https://github.com/Jay-1409/CSE100-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-600 ml-2"
              >
                Source Code
              </a>
            </div>
            <h3 className="text-lg font-semibold text-white mt-4">
              Technologies Used:
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>HTML</li>
              <li>Flask</li>
              <li>Openai API</li>
              <li>CSS (Vanilla)</li>
              <li>MatPlotLib</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

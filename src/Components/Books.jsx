import React from 'react';
import './TitleBook.js';
import TitleBook from './TitleBook.js';

export const Books = ({minimalisticMode}) => {
  return (
    <section
      id="books"
      className="bg-gradient-to-r from-white via-gray-100 to-white hover:from-gray-200 hover:via-white hover:to-gray-200 transition-all duration-500 py-12"
      style={{ 
        backgroundImage: minimalisticMode ? 'none' : `url('/Static/Images/Back1.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        border: minimalisticMode ? "none" : "8px solid blue",
        borderRadius: '15px', 
        padding: '20px' 
      }}
    >
      <style>
        {`
          .scroll-container {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            width: 100%;
            height: auto;
          }

          .marquee {
            display: flex;
            width: 100%;
            animation: marquee 30s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .book-box {
            position: relative;
            overflow: hidden;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            background: #fff;
            flex: 0 0 auto;
            margin-right: 15px;
            width: 200px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .book-box::before {
            content: '';
            position: absolute;
            left: -500%;
            bottom: 0;
            width: 300%;
            height: 500%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.5) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: skewY(0deg);
            transition: transform 1s ease-in-out;
          }

          .book-box:hover::before {
            transform: translateX(100%) skewY(10deg);
          }

          .scroll-container:hover .marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleBook />
        <div className="scroll-container">
          <div className="marquee">
            <div className="flex">
              {/* Repeat the book boxes to ensure smooth scrolling */}
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/TheAlchemist.jpeg" alt="The Alchemist" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">The Alchemist</h3>
                <p className="mt-2 text-gray-600">Author: Paulo Coelho</p>
                <p className="mt-2 text-gray-600">One of the most Inspiring Books.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/HowToWinFriendsAndInfluencePeople.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">How To Win Friends And Influence People</h3>
                <p className="mt-2 text-gray-600">Author: Dale Carnegie</p>
                <p className="mt-2 text-gray-600">A brief description of the book, highlighting its key points and why you recommend it.</p>
              </div>
              {/* Add more book boxes here */}
              {/* Duplicate the items to create the loop effect */}

              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/TheDaVinciCode.jpeg" alt="The Da Vinci Code" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">The Da Vinci Code</h3>
                <p className="mt-2 text-gray-600">Author: Dan Brown</p>
                <p className="mt-2 text-gray-600">The book is always in a climax!!.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/ThinkStraight.jpeg" alt="Think Straight" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Think Straight</h3>
                <p className="mt-2 text-gray-600">Author: Darius Foroux</p>
                <p className="mt-2 text-gray-600">A great book to have in your backpack all the time!!</p>
              </div>
            </div>
            <div className="flex">
              {/* Repeat the book boxes again */}
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="Rich Dad Poor Dad" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-600">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-600">Best personal finance book.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="Coming Soon" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Coming Soon...</h3>
                <p className="mt-2 text-gray-600">Author:...</p>
                <p className="mt-2 text-gray-600">New Books will be added as I read them..</p>
              </div>
                            <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="Rich Dad Poor Dad" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-600">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-600">Best personal finance book.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="Coming Soon" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Coming Soon...</h3>
                <p className="mt-2 text-gray-600">Author:...</p>
                <p className="mt-2 text-gray-600">New Books will be added as I read them..</p>
              </div>
                            <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="Rich Dad Poor Dad" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-600">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-600">Best personal finance book.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="Coming Soon" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Coming Soon...</h3>
                <p className="mt-2 text-gray-600">Author:...</p>
                <p className="mt-2 text-gray-600">New Books will be added as I read them..</p>
              </div>              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="Rich Dad Poor Dad" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-600">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-600">Best personal finance book.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="Coming Soon" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Coming Soon...</h3>
                <p className="mt-2 text-gray-600">Author:...</p>
                <p className="mt-2 text-gray-600">New Books will be added as I read them..</p>
              </div>              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="Rich Dad Poor Dad" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-600">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-600">Best personal finance book.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="Coming Soon" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Coming Soon...</h3>
                <p className="mt-2 text-gray-600">Author:...</p>
                <p className="mt-2 text-gray-600">New Books will be added as I read them..</p>
              </div>              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="Rich Dad Poor Dad" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-600">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-600">Best personal finance book.</p>
              </div>
              <div className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="Coming Soon" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Coming Soon...</h3>
                <p className="mt-2 text-gray-600">Author:...</p>
                <p className="mt-2 text-gray-600">New Books will be added as I read them..</p>
              </div>

              {/* Add more book boxes here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

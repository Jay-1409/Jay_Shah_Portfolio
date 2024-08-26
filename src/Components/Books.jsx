import React from 'react';
import './TitleBook.js';
import TitleBook from './TitleBook.js';
export const Books = () => {
  return (
    <section
      id="books"
      className="bg-gradient-to-r from-black via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 transition-all duration-500 py-12"
      style={{ 
        backgroundImage: `url('/Static/Images/Back1.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        border: '8px solid black', 
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
            border: 8px solid black;
            border-radius: 15px;
            padding: 20px;
            background: #272727;
            flex: 0 0 auto;
            margin-right: 20px;
            width: 250px;
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
        <TitleBook></TitleBook>
        {/* <h2 className="text-3xl font-bold text-white text-left">Book Recommendations</h2> */}
        <div className="scroll-container">
          <div className="marquee">
            <div className="flex">
                
              {/* Repeat the book boxes to ensure smooth scrolling */}
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/TheAlchemist.jpeg" alt="The Alchemist" className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">The Alchemist</h3>
                <p className="mt-2 text-gray-400">Author: Paulo Coelho</p>
                <p className="mt-2 text-gray-400">One of the most Inspiring Books.</p>
              </div>
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/HowToWinFriendsAndInfluencePeople.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">How To Win Friends And Influence People</h3>
                <p className="mt-2 text-gray-400">Author: Dale Carnegie</p>
                <p className="mt-2 text-gray-400">A brief description of the book, highlighting its key points and why you recommend it.</p>
              </div>
              {/* Add more book boxes here */}
              {/* Duplicate the items to create the loop effect */}
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/TheDaVinciCode.jpeg" alt="The Alchemist" className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">The Da Vinci Code</h3>
                <p className="mt-2 text-gray-400">Author: Dan Brown</p>
                <p className="mt-2 text-gray-400">The book is always in a climax!!.</p>
              </div>
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/ThinkStraight.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">Think Straight</h3>
                <p className="mt-2 text-gray-400">Author: Darius Foroux</p>
                <p className="mt-2 text-gray-400">A great book to have in your backpack all the time!!</p>
              </div>
            </div>
            <div className="flex">
              {/* Repeat the book boxes again */}
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="The Alchemist" className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-400">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-400">Best personal finance book.</p>
              </div>
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">Comming soon...</h3>
                <p className="mt-2 text-gray-400">Author:...</p>
                <p className="mt-2 text-gray-400">New Books will be added as i read them..</p>
              </div>
              {/* Add more book boxes here if needed */}
{/* Repeat the book boxes to ensure smooth scrolling */}
<div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/TheAlchemist.jpeg" alt="The Alchemist" className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">The Alchemist</h3>
                <p className="mt-2 text-gray-400">Author: Paulo Coelho</p>
                <p className="mt-2 text-gray-400">One of the most Inspiring Books.</p>
              </div>
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/HowToWinFriendsAndInfluencePeople.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">How To Win Friends And Influence People</h3>
                <p className="mt-2 text-gray-400">Author: Dale Carnegie</p>
                <p className="mt-2 text-gray-400">A brief description of the book, highlighting its key points and why you recommend it.</p>
              </div>
              {/* Add more book boxes here */}
              {/* Duplicate the items to create the loop effect */}
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/TheDaVinciCode.jpeg" alt="The Alchemist" className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">The Da Vinci Code</h3>
                <p className="mt-2 text-gray-400">Author: Dan Brown</p>
                <p className="mt-2 text-gray-400">The book is always in a climax!!.</p>
              </div>
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/ThinkStraight.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">Think Straight</h3>
                <p className="mt-2 text-gray-400">Author: Darius Foroux</p>
                <p className="mt-2 text-gray-400">A great book to have in your backpack all the time!!</p>
              </div>
            </div>
            <div className="flex">
              {/* Repeat the book boxes again */}
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/RichDadPoorDad.jpeg" alt="The Alchemist" className="w-full h-100 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">Rich Dad Poor Dad</h3>
                <p className="mt-2 text-gray-400">Author: Robert T. Kiyosaki</p>
                <p className="mt-2 text-gray-400">Best personal finance book.</p>
              </div>
              <div className="book-box bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
                <img src="/Static/Images/CommingSoon.jpeg" alt="How To Win Friends And Influence People" className="w-full h-90 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-white">Comming soon...</h3>
                <p className="mt-2 text-gray-400">Author:...</p>
                <p className="mt-2 text-gray-400">New Books will be added as i read them..</p>
              </div>
              {/* Add more book boxes here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

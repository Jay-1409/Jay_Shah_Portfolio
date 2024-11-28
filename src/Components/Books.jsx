import React, { useState } from 'react';
import './TitleBook.js';
import TitleBook from './TitleBook.js';

export const Books = ({ minimalisticMode }) => {
  // Define a state variable to control the number of visible books
  const [visibleBooks, setVisibleBooks] = useState(4);

  // Array containing book data
  const bookData = [
    {
      imgSrc: '/Static/Images/TheAlchemist.jpeg',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'One of the most Inspiring Books.',
    },
    {
      imgSrc: '/Static/Images/HowToWinFriendsAndInfluencePeople.jpeg',
      title: 'How To Win Friends And Influence People',
      author: 'Dale Carnegie',
      description: 'A brief description of the book, highlighting its key points and why you recommend it.',
    },
    {
      imgSrc: '/Static/Images/TheDaVinciCode.jpeg',
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      description: 'The book is always in a climax!!',
    },
    {
      imgSrc: '/Static/Images/ThinkStraight.jpeg',
      title: 'Think Straight',
      author: 'Darius Foroux',
      description: 'A great book to have in your backpack all the time!!',
    },
    {
      imgSrc: '/Static/Images/RichDadPoorDad.jpeg',
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      description: 'Best personal finance book.',
    },
    {
      imgSrc: '/Static/Images/CommingSoon.jpeg',
      title: 'Coming Soon...',
      author: '...',
      description: 'New Books will be added as I read them..',
    },
    // Add more book data here as needed
  ];

  // Function to handle showing more books
  const showMoreBooks = () => {
    setVisibleBooks((prev) => prev + 4); // Show 4 more books on each click
  };

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
        padding: '20px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleBook />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render only the books up to the visibleBooks limit */}
          {bookData.slice(0, visibleBooks).map((book, index) => (
            <div key={index} className="book-box p-4 rounded-md shadow-sm hover:bg-gray-100 transition-colors">
              <img src={book.imgSrc} alt={book.title} className="w-full h-90 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
              <p className="mt-2 text-gray-600">Author: {book.author}</p>
              <p className="mt-2 text-gray-600">{book.description}</p>
            </div>
          ))}
        </div>
        {/* Show "See More" button only if there are more books to show */}
        {visibleBooks < bookData.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreBooks}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

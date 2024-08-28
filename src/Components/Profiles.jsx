import React from 'react';
import { Home } from './Home';

// Image paths
const codeforcesIcon = '/Static/Icons/codefrces-removebg-preview.png';
const leetcodeIcon = '/Static/Icons/Leetcode-removebg-preview.png';
const codechefIcon = '/Static/Icons/CodeChef-removebg-preview (2).png';
const linkedinIcon = '/Static/Icons/Linkedin-removebg-preview.png';
const discordIcon = '/Static/Icons/Discord-removebg-preview.png';
const telegramIcon = '/Static/Icons/Telegram-removebg-preview.png';

export const Profiles = ({ minimalisticMode }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 z-index auto ${minimalisticMode ? 'bg-none' : ''}`}>
      <div className={`flex justify-around items-center w-full h-9 p-4 border rounded-lg shadow-lg ${minimalisticMode ? 'bg-none border-none' : 'bg-gray-800 bg-opacity-50 border-gray-600 backdrop-filter backdrop-blur-lg'}`}>
        <a href="https://codeforces.com/profile/24x7coldd" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={codeforcesIcon} alt="CodeForces" className={`w-auto h-9 ${minimalisticMode ? 'hover:opacity-100' : 'hover:opacity-80 transition-opacity duration-300'}`} />
        </a>
        <a href="https://leetcode.com/u/mR_Jy/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={leetcodeIcon} alt="LeetCode" className={`w-auto h-9 ${minimalisticMode ? 'hover:opacity-100' : 'hover:opacity-80 transition-opacity duration-300'}`} />
        </a>
        <a href="https://www.codechef.com/users/bestcchef" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={codechefIcon} alt="CodeChef" className={`w-auto h-9 ${minimalisticMode ? 'hover:opacity-100' : 'hover:opacity-80 transition-opacity duration-300'}`} />
        </a>
        <a href="https://www.linkedin.com/in/jay-shah-8970b5284/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={linkedinIcon} alt="LinkedIn" className={`w-auto h-9 ${minimalisticMode ? 'hover:opacity-100' : 'hover:opacity-80 transition-opacity duration-300'}`} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={discordIcon} alt="Discord" className={`w-auto h-9 ${minimalisticMode ? 'hover:opacity-100' : 'hover:opacity-80 transition-opacity duration-300'}`} />
        </a>
        <a href="https://t.me/hahah_96" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={telegramIcon} alt="Telegram" className={`w-auto h-9 ${minimalisticMode ? 'hover:opacity-100' : 'hover:opacity-80 transition-opacity duration-300'}`} />
        </a>
      </div>
    </div>
  );
};

import React from 'react';

// Image paths
const codeforcesIcon = '/Static/Images/Codeforces.jpeg';
const leetcodeIcon = '/Static/Images/Leetcode.jpeg';
const codechefIcon = '/Static/Images/CodeChef.jpg';
const linkedinIcon = '/Static/Images/Linkedin.jpeg';
const discordIcon = '/Static/Images/Discord.jpeg';
const telegramIcon = '/Static/Images/Telegram.jpeg';

export const Profiles = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4">
      <div className="flex justify-around items-center w-full bg-gray-800 bg-opacity-50 p-4 border border-gray-600 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={codeforcesIcon} alt="CodeForces" className="w-auto h-12 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={leetcodeIcon} alt="LeetCode" className="w-auto h-12 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={codechefIcon} alt="CodeChef" className="w-auto h-12 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={linkedinIcon} alt="LinkedIn" className="w-auto h-12 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={discordIcon} alt="Discord" className="w-auto h-12 hover:opacity-80 transition-opacity duration-300" />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src={telegramIcon} alt="Telegram" className="w-auto h-12 hover:opacity-80 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  );
};

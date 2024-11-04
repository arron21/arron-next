// components/ThumbNav.js
"use client";

import { useState, useEffect } from 'react';

const portfolioItems = [
  { label: "Websites", url: "/portfolio/websites", description: "Perhaps a homepage for your dog?" },
  { label: "Web Design", url: "/portfolio/web-design", description: "Pretty pixels" },
  { label: "Web Applications", url: "/portfolio/web-applications", description: "Code and UX to the extreme" },
];

const engineeringItems = [
  { label: "Frontend", url: "/engineering/frontend", description: "The stuff you do see" },
  { label: "Angular", url: "/engineering/angular", description: "An amazing framework" },
  { label: "React", url: "/engineering/react", description: "A popular framework" },
  { label: "UI/UX", url: "/engineering/ui-ux", description: "More than just colors and fonts" },
  { label: "Backend", url: "/engineering/backend", description: "The stuff you don't see" },
  { label: "Design", url: "/engineering/design", description: "A process that connects all pieces of a goal" },
  { label: "Project Management", url: "/engineering/project-management", description: "Ideas over hierarchy." },
];

export default function ThumbNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const togglePortfolio = () => {
    if (isEngineeringOpen) setIsEngineeringOpen(false);
    setIsPortfolioOpen((prev) => !prev);
  };

  const toggleEngineering = () => {
    if (isPortfolioOpen) setIsPortfolioOpen(false);
    setIsEngineeringOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isNavOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isNavOpen]);

  return (
    <>
      {/* Button fixed to bottom-right */}
      <button
        onClick={toggleNav}
        className="fixed bottom-5 right-5 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 text-lg font-semibold hover:bg-gray-700 transition-all"
      >
        {isNavOpen ? 'Close Menu' : 'Menu'}
      </button>

      {/* Fullscreen navigation overlay with blur effect */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg flex flex-col items-center justify-center text-white z-40 overflow-y-auto p-6">
          <div className="text-left max-w-lg w-full">
            {/* Home Link */}
            <div className="mb-8 animate-fade-slide">
              <a href="/" className="text-3xl font-extrabold tracking-wide text-gray-200 hover:text-white transition-colors">
                Home
              </a>
            </div>

            {/* Contact Link */}
            <div className="mb-8 animate-fade-slide delay-100">
              <a href="/contact" className="text-3xl font-extrabold tracking-wide text-gray-200 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Portfolio Dropdown */}
            <div className="mb-6">
              <button
                onClick={togglePortfolio}
                className="text-2xl font-bold w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <ul
                className={`pl-4 space-y-4 border-l-2 border-gray-700 transition-all duration-300 ease-in-out ${isPortfolioOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                {portfolioItems.map((item, index) => (
                  <li key={item.url} className={`pt-2 animate-fade-slide delay-${index * 100}`}>
                    <a href={item.url} className="text-xl text-gray-400 hover:text-gray-200 transition-colors">{item.label}</a>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Dropdown */}
            <div>
              <button
                onClick={toggleEngineering}
                className="text-2xl font-bold w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <ul
                className={`pl-4 space-y-4 border-l-2 border-gray-700 transition-all duration-300 ease-in-out ${isEngineeringOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                {engineeringItems.map((item, index) => (
                  <li key={item.url} className={`pt-2 animate-fade-slide delay-${index * 100}`}>
                    <a href={item.url} className="text-xl text-gray-400 hover:text-gray-200 transition-colors">{item.label}</a>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

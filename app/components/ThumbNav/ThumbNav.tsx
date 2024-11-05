"use client";

import { useState, useEffect } from 'react';

const portfolioItems = [
  { label: "Websites", url: "/portfolio/websites", description: "Perhaps a homepage for your dog?" },
  { label: "Web Design", url: "/portfolio/web-design", description: "Pretty pixels" },
  { label: "Web Applications", url: "/portfolio/web-applications", description: "Code and UX to the extreme" },
];

const engineeringItems = [
  { label: "Frontend", url: "/engineering/frontend" },
  { label: "Angular", url: "/engineering/angular" },
  { label: "React", url: "/engineering/react" },
  { label: "UI/UX", url: "/engineering/ui-ux" },
  { label: "Backend", url: "/engineering/backend" },
  { label: "Design", url: "/engineering/design" },
  { label: "Project Management", url: "/engineering/project-management" },
];

export default function ThumbNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false); // New state for link visibility

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
    if (isNavOpen) {
      setLinksVisible(false); // Reset link visibility when opening the nav
      const timer = setTimeout(() => {
        setLinksVisible(true); // Show links after overlay fades in
      }, 300); // Adjust this duration to match the overlay fade-in time
      return () => clearTimeout(timer);
    }
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
      <div className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg flex flex-col items-center justify-center text-white z-40 overflow-y-auto p-6 transition-opacity duration-300 ease-in-out ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transform ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="text-left max-w-lg w-full">
          {/* Home Link */}
          {linksVisible && (
            <div className="mb-8 animate-fade-slide">
              <a href="/" className="text-3xl font-extrabold tracking-wide text-gray-200 hover:text-white transition-colors">
                Home
              </a>
            </div>
          )}

          {/* Contact Link */}
          {linksVisible && (
            <div className="mb-8 animate-fade-slide delay-100">
              <a href="/contact" className="text-3xl font-extrabold tracking-wide text-gray-200 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          )}

          {/* Engineering Dropdown */}
          <div>
            {/* Skills Button */}
            {linksVisible && (
              <button
                onClick={toggleEngineering}
                className="text-3xl font-bold w-full text-left text-gray-300 hover:text-white transition-colors animate-fade-slide"
              >
                Skills
              </button>
            )}
            <ul
              className={`space-y-4  transition-all duration-300 ease-in-out ${isEngineeringOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              {engineeringItems.map((item, index) => (
                linksVisible && (
                  <li key={item.url} className={`pt-2 animate-fade-slide delay-${index * 100}`}>
                    <a href={item.url} className="block text-xl text-gray-400 hover:text-gray-200 transition-colors w-full text-left">
                      {item.label}
                    </a>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

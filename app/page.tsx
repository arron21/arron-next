// components/HomeHero.js
"use client";

import React from 'react';
import './HomeHero.css';
import LogoCarousel from './components/LogoCarousel/LogoCarousel';
import Experience from './components/Experience/Experience';
import SocialLinks from './components/SocialLinks/SocialLink';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
      <div className="text-center max-w-4xl">
        
        {/* Animated Greeting */}
        <svg width="100%" height="200" viewBox="0 0 800 200" className="mx-auto">
          <text x="50%" y="50%" fontSize="80" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fill="none" stroke="#6366f1" strokeWidth="2" className="animated-text">
            Hello, I’m Arron
          </text>
          <text x="50%" y="50%" fontSize="80" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fill="#6366f1" className="filled-text">
            Hello, I’m Arron
          </text>
        </svg>

        {/* Professional Title */}
        <p className="text-2xl md:text-3xl font-light text-gray-700 mt-4 animate-fade-in delay-100">
          Fullstack Web Developer
        </p>

        {/* Introductory Description */}
        <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed animate-fade-in delay-200">
          With a passion for creating efficient, scalable, and intuitive digital experiences, I specialize in building robust applications that bring ideas to life. From frontend to backend, I craft solutions with precision, keeping the user experience at the forefront.
        </p>

      </div>
      <div className="mt-5 animate-fade-in delay-400">
        <SocialLinks />
      </div>
      <div className="mt-5 animate-fade-in delay-400">
        <LogoCarousel />
      </div>
      <Link className="mt-5 animate-fade-in delay-400" href="/contact">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out">
          Contact
        </button>
      </Link>
    </section>
  );
}

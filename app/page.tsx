"use client";

import FullPageLogo from "./components/FullPageLogo/FullPageLogo";
import React from "react";
import "./HomeHero.css";
import { ReactTyped } from "react-typed";

import LogoCarousel from "./components/LogoCarousel/LogoCarousel";
import Experience from "./components/Experience/Experience";
import SocialLinks from "./components/SocialLinks/SocialLink";
import Link from "next/link";
import GreetingSVG from "./components/GreetingSVG/GreetingSVG";
import CardGrid from "./components/CardGrid/CardGrid";

export default function HomeHero() {
  const cards = [
    {
      name: "Web Development",
      description:
        "I specialize in building robust applications that bring ideas to life. From frontend to backend, I craft solutions with precision, keeping the user experience at the forefront.",
      url: '/web-development',
      },
    {
      name: "About",
      description:
        "I am a certified coach with over 10 years of experience in coaching and mentoring. I have worked with a variety of industries, including healthcare, education, and technology.",
      url: '/about',
      },
  ];
     
  return (
    <>

    {/* <FullPageLogo /> */}
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
      <div className="text-center max-w-4xl">
        {/* Animated Greeting */}
        <GreetingSVG />

        {/* Professional Title */}
        <p className="text-2xl md:text-3xl font-light text-gray-700 mt-4 animate-fade-in delay-100">
          <ReactTyped
            strings={[
              "Fullstack Web Developer",
              "Friendly Neighborhood Tech Guy",
              "Boxing Fan",
              "Frontend Web Dev Expert",
              "Musician",
              "Tech Enthusiast",
              "Gamer"
            ]}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </p>

        {/* Buttons Section */}
        <div className="hidden flex justify-center space-x-4 mt-6">
          <Link href="/web-development">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:ring-4 focus:ring-indigo-300 transition duration-200">
              Web Development
            </button>
          </Link>
          <Link href="/coaching">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:ring-4 focus:ring-green-300 transition duration-200">
              About
            </button>
          </Link>
          <Link href="/consulting">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:ring-4 focus:ring-green-300 transition duration-200">
              Consulting
            </button>
          </Link>
          <Link href="https://arron.dev/">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:ring-4 focus:ring-yellow-300 transition duration-200">
              Blog
            </button>
          </Link>
        </div>

        <CardGrid cards={cards} />   

        {/* Introductory Description */}
        <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed animate-fade-in delay-</Link>200">
          With a passion for creating efficient, scalable, and intuitive digital
          experiences, I specialize in building robust applications that bring
          ideas to life. From frontend to backend, I craft solutions with
          precision, keeping the user experience at the forefront.
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
    </>
  );
}

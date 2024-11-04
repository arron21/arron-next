// components/HomeHero.js
"use client";

export default function HomeHero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
      <div className="text-center max-w-3xl">
        {/* Greeting */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
          Hello, I’m <span className="text-indigo-500">Arron</span>
        </h1>

        {/* Professional Title */}
        <p className="text-2xl md:text-3xl font-light text-gray-700 mt-4 animate-fade-in delay-100">
          Fullstack Web Developer
        </p>

        {/* Introductory Description */}
        <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed animate-fade-in delay-200">
          With a passion for creating efficient, scalable, and intuitive digital experiences, I specialize in building robust applications that bring ideas to life. From frontend to backend, I craft solutions with precision, keeping the user experience at the forefront.
        </p>

        {/* Call to Action Button */}
        <div className="mt-10 animate-fade-in delay-300">
          <a
            href="/portfolio/websites"
            className="inline-block px-8 py-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition-transform transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

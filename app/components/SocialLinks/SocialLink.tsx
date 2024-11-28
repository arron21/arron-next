// components/SocialLinks.tsx
import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <section className="flex justify-center items-center my-10">
      <a
        href="https://github.com/arron21"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mx-4 text-gray-600 hover:text-indigo-800 transition-colors"
      >
        <svg
          height="32"
          width="32"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-1"
        >
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z">
          </path>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/arronmccrory/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mx-4 text-gray-600 hover:text-indigo-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
          className="mr-1"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
          </path>
        </svg>
      </a>

      <a
        href="https://wellfound.com/u/arron-mccrory"
        className="flex items-center mx-4 text-gray-600 hover:text-indigo-800 transition-colors"
      >
        <svg fill="currentColor" viewBox="0 0 554.89997 266.70002" width="32">
          <path d="M 80.9,263.59999 0,2.9999988 H 75.3 L 123,190.39999 174.9,2.9999988 h 75.5 L 302.3,190.39999 350,2.9999988 h 75.3 L 343.5,263.59999 H 263.3 L 212.7,75.399999 161.1,263.59999 H 80.9 Z">
          </path>
          <circle
            cx="511.09995"
            cy="222.89999"
            fill="currentColor"
            r="43.799999"
          >
          </circle>
          <circle
            cx="511.09995"
            cy="43.799999"
            fill="currentColor"
            r="43.799999"
          >
          </circle>
        </svg>
      </a>
      <a
        href="https://docs.google.com/document/d/1M1YJs4lePV7VkBOMQuWYUardPQqvpTrGbppKsocG-g0/edit?usp=sharing"
        className="flex items-center mx-4 text-gray-600 hover:text-indigo-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="32"
          width="32"
          viewBox="-8 0 32 32"
          version="1.1"
        >
          <title>paper</title>
          <path d="M13.52 5.72h-7.4c-0.36 0-0.56 0.2-0.6 0.24l-5.28 5.28c-0.040 0.040-0.24 0.24-0.24 0.56v12.2c0 1.24 1 2.24 2.24 2.24h11.24c1.24 0 2.24-1 2.24-2.24v-16.040c0.040-1.24-0.96-2.24-2.2-2.24zM5.28 8.56v1.8c0 0.32-0.24 0.56-0.56 0.56h-1.84l2.4-2.36zM14.080 24.040c0 0.32-0.28 0.56-0.56 0.56h-11.28c-0.32 0-0.56-0.28-0.56-0.56v-11.36h3.040c1.24 0 2.24-1 2.24-2.24v-3.040h6.52c0.32 0 0.56 0.24 0.56 0.56l0.040 16.080z" />
        </svg>
      </a>
    </section>
  );
};

export default SocialLinks;

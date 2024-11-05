import React from 'react';

interface PageProps {
  title: string;
  paragraphs: string[];
}

const TextPage: React.FC<PageProps> = ({ title, paragraphs }) => {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-gray-800 my-6 animate-fade-in">
        {title}
      </h1>
      <div className="animate-fade-in delay-500">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
};

export default TextPage;

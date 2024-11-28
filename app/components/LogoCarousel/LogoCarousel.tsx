// components/LogoCarousel.tsx
import React from "react";
import Image from "next/image";

const logos: { src: string; alt: string }[] = [
  { src: "/images/bank-of-america.svg", alt: "Bank of America Logo" },
  { src: "/images/corsearch.svg", alt: "Corsearch Logo" },
  { src: "/images/freddie-mac.svg", alt: "Freddie Mac Logo" },
  { src: "/images/glidewell.png", alt: "Glidewell Logo" },
  { src: "/images/special-olympics.svg", alt: "Special Olympics Logo" },
  { src: "/images/wolters-kluwer.svg", alt: "Wolters Kluwer Logo" },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={logo.src} alt={logo.alt} width={180} height={90} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

import PortfolioItem from "@/app/components/PortfolioItem/PortfolioItem";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">Koso</h1>
      <p>
        Koso was one of the first website templates I ever made. Every aspect of
        this site is hand made. I still really like the design choices such as
        the the parallax background images.
      </p>
      <p>
        This template was designed with components in mind, there are no fancy
        JavaScript frameworks at play here, just classic HTML, CSS, and
        JavaScript.
      </p>
      <PortfolioItem
        link="https://ephemeral-mermaid-39cbda.netlify.app/"
        image="/portfolio/koso.png"
        alt="agency koso website template"
      />
    </main>
  );
}

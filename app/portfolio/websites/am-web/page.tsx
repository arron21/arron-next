import PortfolioItem from "@/app/components/PortfolioItem/PortfolioItem";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">AM Web</h1>
      <p>
        AM Web was one of my early personal agency website templates I made.
        AM, or Arron McCrory and web...
      </p>
      <p>
        Inpsired by the{" "}
        <HoverCard>
          <HoverCardTrigger className="underline">PlayStation</HoverCardTrigger>
          <HoverCardContent>
            <div>
              <iframe
                height="140"
                width="230"
                src="https://www.youtube.com/embed/6aXFNtEm7Hc?si=zAaXIGyUn0ATTBSh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              >
              </iframe>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        1 startup experience, I designed this site with minimalism in mind.
      </p>

      <PortfolioItem
        link="https://kind-cori-3acb6e.netlify.app/"
        image="/portfolio/agency_template.png"
        alt="agency xyz website template"
      />
    </main>
  );
}

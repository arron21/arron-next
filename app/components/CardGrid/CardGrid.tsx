"use client";
import Link from "next/link";
import "./cardGrid.css";
import { useEffect } from "react";

export default function CardGrid(props: any) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card");
      for (const card of cards) {
        const rect = (card as HTMLElement).getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsContainer = document.getElementById("cards");
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup on unmount
    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div id="cards" className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {props.cards.map((card: any, index: number) => (
        <Link key={card.name} href={card.url}>
        <div
          key={card.name}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
          className="card relative flex flex-col rounded-lg cursor-pointer overflow-hidden animate-fade-in-up"
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 z-10"
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 z-0"
          ></div>
          <div className="card-content relative z-20 flex flex-col flex-grow rounded-lg p-4">
            <div className="card-info-wrapper">
              <div className="card-info text-center">
                <i className="fa-duotone fa-apartment text-xl text-gray-400"></i>
                <div className="card-info-title mt-2">
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

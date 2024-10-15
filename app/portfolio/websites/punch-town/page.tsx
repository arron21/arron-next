import PortfolioItem from "@/app/components/PortfolioItem/PortfolioItem";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">Punch Town</h1>

      <p>
        Working with the team over at Punch Town Gym is always fun. Its a great
        gym and has lots of great people there. Making a website for them was
        fun because I personally love boxing. This particular project is more of
        a full package experience, everything from the design, to the
        photography to the site hosting was all done by me.
      </p>
      <PortfolioItem
        link="https://punch.town/"
        title="Punch Town"
        image="/portfolio/punch_town.jpg"
        alt="punch town"
      />
    </main>
  );
}

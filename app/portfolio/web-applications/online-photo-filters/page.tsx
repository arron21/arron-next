import PortfolioItem from "@/app/components/PortfolioItem/PortfolioItem";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">Online Photo Filters</h1>
      <p>
        Photography is a passion of mine, so I wanted to make a fun little web
        application that would allow for cool and easy editing of photos. The
        filters are based on Instagram, but I also added some cool "Light Leak"
        filters that give the photo a more old school disposable camera look.
      </p>

      <PortfolioItem
        link="https://onlinephotofilter.com/"
        image="/portfolio/online-photo-filters.png"
        alt="online photo filter web app"
      />
    </main>
  );
}

import PortfolioItem from "@/app/components/PortfolioItem/PortfolioItem";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">Harold and Marzetta Charity Scholarship</h1>

      <p>
        This was a simple project to help a local charity have an online
        pressence.
      </p>
      <p>
        I met the owner of the charity at a barbeque restuarant and we got to
        talking. Next thing you know we are getting her charity online with an
        official website.
      </p>
      <p>
        The site itself is built with Angular and allows users to learn about
        the charity and donate if they choose to.
      </p>
      <PortfolioItem
        link="https://haroldandmarzetta.org/"
        image="/portfolio/harold_and_marzetta.jpg"
        alt="harold and marzetta"
      />
    </main>
  );
}

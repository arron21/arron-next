import PortfolioItem from "../components/PortfolioItem/PortfolioItem";
import punchTown from "../../public/portfolio/punch_town.jpg";
export default function Page() {
    return (
        <main>
            <h1 className="text-4xl my-8">Portfolio</h1>
            <p>I've been developing websites and web applications for over 10 years.</p>
            <p>I can't show everything I have built here, but here are a handful of examples of the type of work I've done.</p>
            <PortfolioItem title="Punch Town" image="/portfolio/punch_town.jpg" alt="punch town" />
            <PortfolioItem title="Harold and Marzetta Charity" image="/portfolio/harold_and_marzetta.jpg" alt="harold and marzetta" />
            <PortfolioItem title="My Choice Software" image="/portfolio/my_choice_software.jpg" alt="my choice software" />
            <PortfolioItem title="Young Company" image="/portfolio/young_company.jpg" alt="young company" />

        </main>
    )
  }
import PortfolioItem from "../components/PortfolioItem/PortfolioItem";
import punchTown from "../../public/portfolio/punch_town.jpg";
export default function Page() {
    return (
        <main>
            <h1 className="text-4xl my-8">Portfolio</h1>
            <p>I've been developing websites and web applications for over 10 years.</p>
            <p>I can't show everything I have built here, but here are a handful of examples of the type of work I've done.</p>
            <PortfolioItem link="https://punch.town/" title="Punch Town" image="/portfolio/punch_town.jpg" alt="punch town" />
            <PortfolioItem link="https://haroldandmarzetta.org/" title="Harold and Marzetta Charity" image="/portfolio/harold_and_marzetta.jpg" alt="harold and marzetta" />
            <PortfolioItem link="https://ephemeral-mermaid-39cbda.netlify.app/" title="Koso Agency Website Templaate" image="/portfolio/koso.png" alt="agency koso website template" />
            <PortfolioItem link="https://kind-cori-3acb6e.netlify.app/" title="XYZ Agency Website Template" image="/portfolio/agency_template.png" alt="agency xyz website template" />
            <PortfolioItem link="https://lucid-panini-85543c.netlify.app/" title="Orange Agency Website Template" image="/portfolio/agency_orange.png" alt="agency orange website template" />

            <PortfolioItem title="My Choice Software" image="/portfolio/my_choice_software.jpg" alt="my choice software" />
            <PortfolioItem title="Young Company" image="/portfolio/young_company.jpg" alt="young company" />

        </main>
    )
  }
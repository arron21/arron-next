import PortfolioItem from "@/app/components/PortfolioItem/PortfolioItem";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">My Choice Software</h1>

      <p>
        This website is built ontop of Shopify. I was working at My Choice
        Software at the time. There was extensive customization coded ontop of
        an existing Shopify theme. We also created a custom Shopify plugin that
        we both used on the site and sold on the Shopify Marketplace.
      </p>
      <PortfolioItem
        image="/portfolio/my_choice_software.jpg"
        alt="my choice software"
      />
    </main>
  );
}

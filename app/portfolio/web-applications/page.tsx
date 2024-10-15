import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Page() {
  const sites = [
    {
      link: "online-photo-filters",
      name: "Online Photo Filters",
    },
  ];
  return (
    <main>
      <h1 className="text-4xl my-8">Web Applications</h1>

      {sites.map((x) => (
        <Link href={"/portfolio/web-applications/" + x.link}>
          <Button className="m-3" variant="outline">
            <ArrowRightIcon className="mr-2 h-4 w-4" /> {x.name}
          </Button>
        </Link>
      ))}

      <p>
        A web application is like a digital tool that you can access directly
        from your web browser without needing to download or install anything on
        your device. Whether you're shopping online, checking your social media,
        or managing projects, you're interacting with a web application. These
        apps are hosted on remote servers, so you can use them from any device
        with an internet connection. This makes them super convenient, as you
        don’t have to worry about updates or compatibility issues—everything you
        need is just a click away.
      </p>
      <p>
        What makes web applications so appealing is their versatility and ease
        of use. Developers can create anything from a simple blog to a complex
        platform like an online store or a collaborative workspace. They use a
        mix of technologies like HTML, CSS, and JavaScript for the front end,
        with various programming languages and databases running things behind
        the scenes. Plus, web apps can easily connect with other online services
        and tools, making them a powerful choice for businesses and individuals
        looking for reliable and accessible software solutions.
      </p>
    </main>
  );
}

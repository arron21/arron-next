import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  // <Link href="/portfolio/web-design/pad-vest">Pad Vest</Link>
  // <Link href="/portfolio/web-design/corrine">Corrine</Link>
  const sites = [
    {
      link: "pad-vest",
      name: "Pad Vest",
    },
    {
      link: "corrine",
      name: "Corrine",
    },
  ];
  return (
    <main>
      <h1 className="text-4xl my-8">Web Design</h1>

      {sites.map((x, index) => (
        <Link key={index} href={"/portfolio/web-design/" + x.link}>
          <Button className="m-3" variant="outline">
            <ArrowRightIcon className="mr-2 h-4 w-4" /> {x.name}
          </Button>
        </Link>
      ))}
      <p>
        I've been developing websites and web applications for over 10 years.
      </p>
      <p>
        I can't show everything I have built here, but here are a handful of
        examples of the type of work I've done.
      </p>
    </main>
  );
}

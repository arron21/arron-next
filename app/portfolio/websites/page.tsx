import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Page() {
  const sites = [
    {
      link: "punch-town",
      name: "Punch Town",
    },
    {
      link: "harold-and-marzetta-charity",
      name: "Harold and Marzetta",
    },
    {
      link: "koso",
      name: "Koso",
    },
    {
      link: "am-web",
      name: "AM Web",
    },
    {
      link: "my-choice-software",
      name: "My Choice Software",
    },
  ];
  return (
    <main>
      <h1 className="text-4xl my-8">Web Sites</h1>

      {sites.map((x) => (
        <Link href={"/portfolio/websites/" + x.link}>
          <Button className="m-3" variant="outline">
            <ArrowRightIcon className="mr-2 h-4 w-4" /> {x.name}
          </Button>
        </Link>
      ))}

      <p>
        This is a collection of some websites I have developed. Some of them are
        for clients, and some of them are simple templates that I just felt like
        building for fun.
      </p>
    </main>
  );
}

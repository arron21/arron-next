import a from "./Example Article.png";
import b from "./Example FAQ.png";
import c from "./Example Property List.png";
import d from "./Mats.png";
import e from "./Organisms.png";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl my-8">Pad Vest</h1>
      <p>
        This project was a quick weekend design project for the client Pad Vest.
        They wanted some new typography styles, and new component styles. For
        the font I chose Inter. I like its basic geometric properties and it
        reminds me alot of Futura which is one of my favorite fonts.
      </p>
      <p>The design system here is based upon Atomic design by Brad Frost.</p>
      <p>
        I began by creating materials that would then be used in organisms that
        would then become full pages.
      </p>
      <Image
        className="shadow-xl my-2 w-full h-full rounded-lg"
        src={e}
        alt="Picture of the author"
      />
      <Image
        className="shadow-xl my-2 w-full h-full rounded-lg"
        src={d}
        alt="Picture of the author"
      />

      <Image
        className="shadow-xl my-2 w-full h-full rounded-lg"
        src={a}
        alt="Picture of the author"
      />
      <Image
        className="shadow-xl my-2 w-full h-full rounded-lg"
        src={b}
        alt="Picture of the author"
      />
      <Image
        className="shadow-xl my-2 w-full h-full rounded-lg"
        src={c}
        alt="Picture of the author"
      />
    </main>
  );
}

import corrine from "./Corrine.png";
import Image from "next/image";

export default function Page() {
  console.log(corrine);
  return (
    <main>
      <h1 className="text-4xl my-8">Corrine</h1>
      <p>
        The Corrine site is one of my "I feel like designing a site today"
        sites. It is not often I choose serif typefaces, but for this site I
        really like Playfair Dispaly
      </p>
      <Image
        src={corrine}
        alt="Picture of the author"
      />
    </main>
  );
}

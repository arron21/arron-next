import Image from "next/image";

export default function PortfolioItem(props: any) {
  return (
    <div className="my-12 flex flex-col items-center justify-center w-full h-full">
      {props.title && <h3 className="text-2xl font-bold">{props.title}</h3>}
      {props.image && (
        <a href={props.link}>
        <Image
          src={props.image}
          alt="{props.alt}"
          className="shadow-xl w-full h-full rounded-lg"
        />
        </a>
      )}
    </div>
  );
}

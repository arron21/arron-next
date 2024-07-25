export default function PortfolioItem(props: any) {
    return (
        <div className="my-12 flex flex-col items-center justify-center w-full h-full">
            <h3 className="text-2xl font-bold">{props.title}</h3>
            {props.image && <img src={props.image} alt="{props.alt}" className="shadow-xl w-full h-full rounded-lg" />}
        </div>
    )
  }
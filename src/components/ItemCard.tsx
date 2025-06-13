type ItemProps = {
  title: string;
  imageURL: string;
  difficulty: string;
  variant?: "default" | "small";
};

export default function ItemCard({
  title,
  imageURL,
  difficulty,
  variant = "default",
}: ItemProps) {
  const isSmall = variant === "small";

  return (
    <div
      className={`relative flex flex-col rounded-xl bg-bright-green bg-clip-border text-black shadow-md border-4 border-burgundy rounded-3xl 
      ${isSmall ? "w-40 text-sm h-[150px]" : "w-80 text-base h-[270px]"}`}
    >
      <img
        src={imageURL}
        className={`relative  overflow-hidden rounded-xl bg-cream bg-clip-border text-white shadow-lg object-cover border-plum
        ${isSmall ? "h-26 mx-2 -mt-3" : "h-40 mx-4 -mt-6"}`}
        alt={title}
      />
      <div className="p-1">
        <h5
          className={` block font-semibold leading-snug tracking-normal text-coffee-black antialiased 
          ${isSmall ? "text-s mb-0" : "text-xl mb-2"}`}
        >
          {title}
        </h5>
        <p
          className={` block font-semibold leading-snug tracking-normal text-coffee-black antialiased 
          ${isSmall ? "text-xs mb-0" : "text-base mb-2"}`}
        >
          Difficulty: {difficulty}
        </p>
      </div>
      <div className="p-3 pt-0">
        <button
          type="button"
          className={`select-none rounded-lg bg-burgundy text-cream text-center align-middle font-bold uppercase shadow-md border-4 border-plum rounded-3xl
          ${isSmall ? "py-0 px-2 text-xs" : "py-3 px-6 text-xs"}`}
        >
          Try it out!
        </button>
      </div>
    </div>
  );
}

type CarouselProps = {
  URLs: string[];
  id: string;
};

export default function Carousel({ URLs, id }: CarouselProps) {
  return (
    <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex scrollbar-hide">
      {URLs.map((pic, index) => {
        const prev = index === 0 ? URLs.length - 1 : index - 1;
        const next = index === URLs.length - 1 ? 0 : index + 1;

        return (
          <div
            key={index}
            id={`slide${index}`}
            className="relative w-full flex-shrink-0 snap-center p-4"
          >
            <img
              src={pic}
              className="w-full object-cover border-4 border-burgundy rounded-3xl"
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${prev}`}
                className="btn btn-circle bg-burgundy border-4 border-mantis rounded-3xl text-cream p-4 opacity-50"
              >
                ❮
              </a>
              <a
                href={`#slide${next}`}
                className="btn btn-circle bg-burgundy border-4 border-mantis rounded-3xl text-cream p-4 opacity-50"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

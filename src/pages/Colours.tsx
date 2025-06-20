import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { fetchAllItems } from "../services/APICalls";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Colours() {
  type Item = {
    pic: string;
    colours: string[];
  };
  const backButtonStyling =
    "bg-burgundy w-24 h-12 rounded-xl border-4 border-plum flex items-center justify-center p-3 font-bold text-cream";
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const loadProjects = async () => {
      const itemData = await fetchAllItems();

      setItems(itemData);
    };
    loadProjects();
  }, []);
  const colourMap = new Map<string, { colour: string; pic: string }>();
  console.log(items);
  items.forEach((item) => {
    item.colours.forEach((colour: string) => {
      if (!colourMap.has(colour)) {
        colourMap.set(colour, { colour, pic: item.pic });
      }
    });
  });

  const uniqueColours = Array.from(colourMap.values());

  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.innerHTML;
    navigate(`/difficulty/${category}`);
    return;
  };
  console.log(uniqueColours);
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <button className={backButtonStyling}>
        <Link to="/">Back</Link>
      </button>
      <section className="col-start-1 col-end-5 grid grid-cols-4 p-4 grid-flow-row gap-6 grid-rows-4">
        <h2 className="col-start-1 col-end-6 row-start-1 text-2xl m-3 block text-xl font-semibold leading-snug tracking-normal text-cream p-5 text-center font-bold border-4 border-burgundy rounded-3xl bg-plum antialiased text-center h-32">
          Patterns are ranked on a difficulty from 1 to 10. Complete beginner?
          Start with a pattern with a difficulty of between 1 and 4. A bit more
          confident? Go for 5 or 6. Want a challenge? Try a pattern with a
          difficulty of 7 or above!
        </h2>
        {uniqueColours.map((item) => {
          return (
            <div key={item.colour} className="relative w-60 h-40">
              <img
                src={item.pic}
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-3xl z-0"
                alt={item.colour}
              />
              <button
                className="relative z-10 flex flex-col rounded-3xl text-burgundy shadow-md border-4 border-burgundy bg-opacity-70 bg-none 
        w-full h-full text-center justify-center items-center text-3xl font-bold"
                onClick={(event) => handleClick(event)}
              >
                {item.colour}
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

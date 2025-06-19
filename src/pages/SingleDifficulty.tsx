import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  fetchItemByCategory,
  fetchItemByDifficulty,
} from "../services/APICalls";
import { Link, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function SingleDifficulty() {
  const backButtonStyling =
    "bg-burgundy h-[50px] rounded-xl border-4 border-plum flex items-center justify-center p-3 font-bold text-cream";
  const { difficulty } = useParams<{ difficulty: string }>();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (!difficulty) {
      return;
    }
    const loadProjects = async () => {
      const data = await fetchItemByDifficulty(difficulty);
      setItems(data);
    };
    loadProjects();
  }, [difficulty]);
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <a className={backButtonStyling}>
        <Link to="/difficulty">Back</Link>
      </a>
      <section className="col-start-1 col-end-5 grid grid-cols-4 p-4 grid-flow-row gap-10">
        {items.map((item) => {
          return (
            <ItemCard
              title={item.name}
              imageURL={item.pic}
              difficulty={item.difficulty}
              id={item.id}
            />
          );
        })}
      </section>
    </main>
  );
}

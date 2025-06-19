import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { fetchItemByHookSize } from "../services/APICalls";
import { Link, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

export default function SingleHookSize() {
  const backButtonStyling =
    "bg-burgundy h-[50px] rounded-xl border-4 border-plum flex items-center justify-center p-3 font-bold text-cream";
  const { hooksize } = useParams<{ hooksize: string }>();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (!hooksize) {
      return;
    }
    const loadProjects = async () => {
      const data = await fetchItemByHookSize(hooksize);
      setItems(data);
    };
    loadProjects();
  }, [hooksize]);
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <button className={backButtonStyling}>
        <Link to="/hooksize">Back</Link>
      </button>
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

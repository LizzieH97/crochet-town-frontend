import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { fetchItemByCategory } from "../services/APICalls";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
export default function SingleCategory() {
  const { category } = useParams<{ category: string }>();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    if (!category) {
      return;
    }
    const loadProjects = async () => {
      const data = await fetchItemByCategory(category);
      setItems(data);
    };
    loadProjects();
  }, [category]);
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
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

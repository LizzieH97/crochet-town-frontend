import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { fetchAllItems, fetchItemByCategory } from "../services/APICalls";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    const loadProjects = async () => {
      const itemData = await fetchAllItems();

      setItems(itemData);
    };
    loadProjects();
  }, []);
  const uniqueCategories = Array.from(
    new Map(
      items.map((item) => [
        item.category,
        { category: item.category, pic: item.pic },
      ])
    ).values()
  );

  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.innerHTML;
    navigate(`/categories/${category}`);
    return;
  };

  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <h2 className="col-start-2 col-end-4 row-start-2 text-2xl mb-2 block text-xl font-semibold leading-snug tracking-normal text-cream p-5 text-center font-bold border-4 border-burgundy rounded-3xl bg-plum antialiased text-center ">
        Not sure what to make? Take a look at our categories below for some
        inspiration ⬇
      </h2>
      <section className="col-start-1 col-end-5 grid grid-cols-4 p-3 grid-flow-row gap-2">
        {uniqueCategories.map((category) => {
          return (
            <div className="relative w-60 h-40">
              {/* Background image */}
              <img
                src={category.pic}
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-3xl z-0"
                alt={category.category}
              />

              {/* Overlay button */}
              <button
                className="relative z-10 flex flex-col rounded-3xl text-burgundy shadow-md border-4 border-burgundy bg-opacity-70 bg-none 
    w-full h-full text-center justify-center items-center text-3xl font-bold"
                onClick={(event) => handleClick(event)}
              >
                {category.category}
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

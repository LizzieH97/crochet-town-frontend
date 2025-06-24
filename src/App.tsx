import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import SideBar from "./components/SideBar";
import { fetchAllItems } from "./services/APICalls";
import { UserProfile } from "./hooks/UserProfile";
import { supabase } from "./services/supabase";

function App() {
  const { user, profile, loading, error } = UserProfile();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchAllItems();
      setItems(data);
    };
    loadProjects();
  }, []);

  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <div className="col-start-1 col-end-5 pb-4 m-6 flex flex-col align-center justify-center items-center bg-plum text-7xl text-cream text-center font-bold border-4 border-burgundy rounded-3xl">
        <h1 className="w-[700px] p-4 text-4xl">
          Welcome to Crochet Town{", " + profile?.full_name || ""}!
        </h1>
        <h2 className=" mb-2 block text-xl font-semibold leading-snug tracking-normal text-cream antialiased text-center ">
          Hi! Whatever you want to crochet, there's a pattern here for
          everything 🥰
          <br />
          Take a look at all of our patterns below, filter your search with the
          buttons above or take a look at our latest popular designs ↪
        </h2>
      </div>
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

export default App;

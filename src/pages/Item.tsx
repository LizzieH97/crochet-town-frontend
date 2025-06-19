import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { fetchOneItem, fetchPatternById } from "../services/APICalls";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Item() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<any>();
  const [pattern, setPattern] = useState<any>();

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      const itemData = await fetchOneItem(id);
      setItem(itemData[0]);

      const patternData = await fetchPatternById(id);
      if (patternData.length > 0) {
        // Assuming step_images is a JSON string, parse it:
        setPattern(patternData[0]);
      }
    };
    loadData();
  }, [id]);

  if (!item) return <div>Loading item data...</div>;
  if (!pattern) return <div>Loading pattern data...</div>;

  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <section className="col-start-1 col-end-5 pb-4 m-4 flex flex-col items-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="p-4 bg-plum text-7xl text-cream text-center font-bold border-4 border-burgundy rounded-3xl w-96 mr-8">
            {item.name}
          </h1>
          <div className="relative ml-8">
            {/* Background image */}
            <img
              src={item.pic}
              alt={item.name}
              className="absolute inset-0 w-80 h-80 object-cover opacity-50 rounded-3xl z-0"
            />
            {/* Content overlay */}
            <ul className="relative z-10 bg-none bg-opacity-70 border-4 border-teal rounded-3xl p-6 flex flex-col justify-center w-80 h-80">
              <li className="mb-2 text-2xl font-semibold text-burgundy text-center">
                Category: {item.category}
              </li>
              <li className="mb-2 text-2xl font-semibold text-burgundy text-center">
                Difficulty: {item.difficulty}
              </li>
              <li className="mb-2 text-2xl font-semibold text-burgundy text-center">
                Hook Size: {item.hook_size}mm
              </li>
              <li className="mb-2 text-2xl font-semibold text-burgundy text-center">
                Finished Product Size: {item.end_size}
              </li>
            </ul>
          </div>
        </div>
        {/* Full-width carousel */}
        <div className="col-span-2 mt-24 m-40">
          <Carousel
            key={pattern.id}
            id={pattern.id}
            URLs={pattern.step_images.pattern}
          />
        </div>
      </section>
    </main>
  );
}

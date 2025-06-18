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
  console.log(pattern);
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <section className="col-start-1 col-end-5 pb-4 m-6 flex flex-col align-center justify-center items-center">
        <h1 className="p-5 bg-plum text-7xl text-cream text-center font-bold border-4 border-burgundy rounded-3xl">
          {item.name}
        </h1>
        <div className="pt-4 grid grid-cols-2 grid-rows-6 gap-4">
          <img
            src={item.pic}
            alt={item.name}
            className="w-[200px] h-[300px] col-start-1 row-start-1 row-end-5 rounded-3xl"
          ></img>
          <ul className="bg-cream text-center border-4 border-teal rounded-3xl">
            <li className="col-2 row-1 mb-2 block text-2xl font-semibold leading-snug tracking-normal text-burgundy antialiased text-center ">
              Category: {item.category}
            </li>
            <li className="col-2 row-2 mb-2 block text-2xl font-semibold leading-snug tracking-normal text-burgundy antialiased text-center ">
              Difficulty: {item.difficulty}
            </li>
            <li className="col-2 row-3 mb-2 block text-2xl font-semibold leading-snug tracking-normal text-burgundy antialiased text-center ">
              Hook Size: {item.hook_size}mm
            </li>
            <li className="col-2 row-4 mb-2 block text-2xl font-semibold leading-snug tracking-normal text-burgundy antialiased text-center ">
              Finished Product Size: {item.end_size}
            </li>
          </ul>
        </div>
        <div className="row-start-5 col-start-1 col-end-3">
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

import Header from "../components/Header";
import SideBar from "../components/SideBar";

const testCategories = [
  "Blankets",
  "Plush toys",
  "Cardigans",
  "Hats",
  "Scarves",
  "Baby Clothes",
  "Earrings",
];
export default function Categories() {
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
        {testCategories.map((category) => {
          return (
            <div
              className="relative flex flex-col rounded-xl bg-burgundy  text-cream shadow-md border-4 border-bright-green rounded-3xl 
      w-60 text-base h-40 text-center align-center justify-center text-3xl font-bold"
            >
              {category}
            </div>
          );
        })}
      </section>
    </main>
  );
}

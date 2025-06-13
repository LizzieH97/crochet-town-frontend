import "./App.css";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import SideBar from "./components/SideBar";
export const testData = [
  {
    title: "Avocado Toast",
    imageURL: "/avotoastfrontfacing.jpg",
    difficulty: "4/10",
  },
  {
    title: "Berry Pie",
    imageURL: "/newpiefrontfacing.jpg",
    difficulty: "7/10",
  },
  {
    title: "Wine Bottle",
    imageURL: "/winefrontfacing.jpg",
    difficulty: "3/10",
  },
  {
    title: "Cannoli",
    imageURL: "/newcannolifrontfacing.jpg",
    difficulty: "1/10",
  },
  {
    title: "Avocado Toast",
    imageURL: "/avotoastfrontfacing.jpg",
    difficulty: "4/10",
  },
  {
    title: "Berry Pie",
    imageURL: "/newpiefrontfacing.jpg",
    difficulty: "7/10",
  },
  {
    title: "Wine Bottle",
    imageURL: "/winefrontfacing.jpg",
    difficulty: "3/10",
  },
  {
    title: "Cannoli",
    imageURL: "/newcannolifrontfacing.jpg",
    difficulty: "1/10",
  },
];
function App() {
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <div className="col-start-1 col-end-5 pb-4 m-6 flex flex-col align-center justify-center items-center bg-plum text-7xl text-cream text-center font-bold border-4 border-burgundy rounded-3xl">
        <h1 className="w-[700px] p-4 text-4xl">Crochet Town</h1>
        <h2 className=" mb-2 block text-xl font-semibold leading-snug tracking-normal text-cream antialiased text-center ">
          Welcome to Crochet Town! Whatever you want to crochet, there's a
          pattern here for everything 🥰
          <br />
          Take a look at all of our patterns below, filter your search with the
          buttons above or take a look at our latest popular designs ↪
        </h2>
      </div>
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>

      <section className="col-start-1 col-end-5 grid grid-cols-4 p-4 grid-flow-row gap-10">
        {testData.map((item) => {
          return (
            <ItemCard
              title={item.title}
              imageURL={item.imageURL}
              difficulty={item.difficulty}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;

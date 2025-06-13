import { testData } from "../App";
import ItemCard from "./ItemCard";

const SideBar = () => {
  return (
    <div className="flex flex-col h-[700px] w-[230px] p-4 rounded-xl bg-cream bg-clip-border text-black shadow-md border-4 border-teal rounded-3xl ">
      <h2 className="text-lg font-bold mb-4 text-center">
        Check out some of the most popular designs!
      </h2>

      <div className="flex-1  overflow-y-scroll scrollbar scrollbar-thumb-burgundy scrollbar-track-sage space-y-4">
        {testData.map((item) => (
          <ItemCard
            key={item.title}
            title={item.title}
            difficulty={item.difficulty}
            imageURL={item.imageURL}
            variant="small"
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
// external css to add in tailwind's Global css
// It is for remove scroll bar
/* @layer utilities {
  @variants responsive {
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
} */

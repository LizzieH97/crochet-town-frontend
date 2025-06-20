import { Link } from "react-router-dom";

export default function Header() {
  const navButtonStyling =
    "bg-burgundy h-[50px] rounded-xl border-4 border-plum flex items-center justify-center p-3 font-bold text-cream";
  return (
    <header className=" col-start-1 col-end-6 sticky flex flex-row gap-8 bg-bright-green w-full p-5 border-4 border-burgundy rounded-3xl ">
      <ul className="flex flex-row gap-3 align-center justify-between items-center">
        <li>
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-[80px] h-[80px]"></img>
          </Link>
        </li>
        <li>
          <button className={navButtonStyling}>
            <Link to="/categories">Categories</Link>
          </button>
        </li>
        <li>
          <button className={navButtonStyling}>
            {" "}
            <Link to="/colours">Colours</Link>
          </button>
        </li>
        <li>
          <button className={navButtonStyling}>
            <Link to="/difficulty">Difficulty</Link>
          </button>
        </li>
        <li>
          <button className={navButtonStyling}>
            <Link to="/hooksize">Hook Size</Link>
          </button>
        </li>
        <li>
          <input
            type="text"
            className="bg-plum h-[50px] w-[500px] rounded-xl border-4 border-burgundy p-3 font-bold text-black"
          ></input>
        </li>
        <li>
          <Link to="/signin" className={`${navButtonStyling} ml-10`}>
            Log in!
          </Link>
        </li>
      </ul>
    </header>
  );
}

import { Link } from "react-router-dom";
import { UserProfile } from "../hooks/UserProfile";

export default function Header() {
  const { user, profile, loading, error } = UserProfile();
  const navButtonStyling =
    "bg-burgundy h-18 rounded-xl border-4 border-plum flex items-center justify-center p-3 font-bold text-cream";
  return (
    <header className=" col-start-1 col-end-6 sticky flex flex-row gap-8 bg-bright-green w-full p-5 border-4 border-burgundy rounded-3xl ">
      <ul className="flex flex-row gap-3 align-center justify-between items-center">
        <li>
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-24 h-24"></img>
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
            className="bg-plum h-18 w-64 rounded-xl border-4 border-burgundy p-3 font-bold text-black"
          ></input>
        </li>

        {profile ? (
          <li className="w-24 h-24 relative rounded-3xl border-4 border-burgundy p-3">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-3xl z-0"
                alt="avatar"
              />
            ) : null}
            <button
              className="relative z-10 flex flex-col text-burgundy shadow-md  bg-opacity-70 bg-none 
        w-full h-full text-center justify-center items-center font-bold"
            >
              <Link to="/account">Your account</Link>
            </button>
          </li>
        ) : null}
        <li>
          <Link to="/signin" className={`${navButtonStyling}`}>
            {user ? "Log out!" : "Sign in!"}
          </Link>
        </li>
      </ul>
    </header>
  );
}

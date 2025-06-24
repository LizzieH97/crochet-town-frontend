import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { fetchAllItems, uploadAvatar } from "../services/APICalls";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserProfile } from "../hooks/UserProfile";

export default function Account() {
  const { user, profile, loading, error } = UserProfile();
  const [err, setErr] = useState("");
  const backButtonStyling =
    "bg-burgundy w-24 h-12 rounded-xl border-4 border-plum flex items-center justify-center p-3 font-bold text-cream";
  const [avatar_url, setAvatar_url] = useState<File | null>(null);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatar_url(e.target.files[0]);
    }
    const result = avatar_url
      ? await uploadAvatar(user.id, avatar_url)
      : { success: true, url: null };

    if (!result.success) {
      setErr("Failed to upload avatar.");
      return;
    }
    if (!user.id) {
      setErr("No user ID found.");
      return;
    }
  };
  //   const navigate = useNavigate();
  //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     const category = event.currentTarget.innerHTML;
  //     navigate(`/difficulty/${category}`);
  //     return;
  //   };

  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <button className={backButtonStyling}>
        <Link to="/">Back</Link>
      </button>
      <section className="col-start-1 col-end-5 grid grid-cols-6 p-4 grid-flow-row gap-1 grid-rows-[100px_auto_auto] h-90 w-90">
        <h2 className="col-start-2 col-end-5 row-start-1 text-3xl m-3 block text-xl font-semibold leading-snug tracking-normal text-cream p-3 text-center font-bold border-4 border-burgundy rounded-3xl bg-plum antialiased text-center h-16">
          Hi, {profile?.full_name}! What do you need?
        </h2>
        <div className="row-start-2 row-end-4 col-start-1 col-end-6 relative w-full flex items-center justify-center ml-10 mr-10">
          <img
            src="/background.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"
          />
          <div className="w-full h-full relative z-10 bg-plum bg-opacity-40 rounded-3xl shadow m-6">
            <div className="text-cream w-full">
              <fieldset className="border-4 border-dotted border-cream p-6 space-y-4">
                <legend className="px-10 font-bold text-lg md:text-xl mx-20 bg-cream border-burgundy border-4 p-5 rounded-3xl text-burgundy ">
                  {profile?.username}
                </legend>
                <div className="grid grid-cols-2 grid-rows-3 gap-2 w-full h-full">
                  {/* Avatar */}
                  <label className="cursor-pointer relative border-4  border-burgundy rounded-full w-64 h-64 flex items-center justify-center col-start-1 row-start-1 row-end-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <img
                      src={profile?.avatar_url || "/placeholder.png"}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50 rounded-full">
                      <p className="text-cream text-base text-center font-bold">
                        Change profile image
                      </p>
                    </div>
                  </label>

                  {/* Name - Top Right */}
                  <label className="border-4  border-burgundy  rounded-3xl w-full h-32 flex flex-row items-center justify-around bg-burgundy bg-opacity-60 text-cream font-bold text-center col-start-2 row-start-1 text-base">
                    <p>Name: {profile?.full_name}</p>
                    <p className="text-base font-normal">Change name</p>
                  </label>

                  {/* Checkbox - Bottom Left */}
                  <fieldset className="border-4  border-burgundy p-4 rounded-3xl w-full h-24 text-center text-base flex flex-row justify-around col-start-2 row-start-3 bg-burgundy bg-opacity-60 text-cream font-bold">
                    <label className="flex flex-col items-center justify-center">
                      <p>
                        Want to upload your own patterns? Click here to become a
                        Creative!
                      </p>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox mb-0"
                      />
                    </label>
                  </fieldset>

                  {/* Bio - Bottom Right */}
                  <label className="border-4  border-burgundy rounded-3xl w-full h-32 flex flex-row items-center justify-around bg-burgundy bg-opacity-60 text-cream font-bold text-center col-start-2 row-start-2 text-base">
                    <p>Bio: {profile?.bio}</p>
                    <p className="text-base font-normal">Change bio</p>
                  </label>
                </div>
              </fieldset>{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

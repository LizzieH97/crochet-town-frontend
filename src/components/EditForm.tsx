import { useEffect, useState } from "react";

import { updateProfile } from "../services/APICalls";
import { supabase } from "../services/supabase";
import { uploadAvatar } from "../services/APICalls";

export default function EditForm() {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [username, setUserName] = useState("");
  const [full_name, setFull_Name] = useState("");
  const [bio, setBio] = useState("");
  const [avatar_url, setAvatar_url] = useState<File | null>(null);
  let successMessage = "hidden";
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserId(user.id);
      } else {
        setError("Not logged in.");
      }
    };

    getUser();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    console.log("Selected avatar file:", avatar_url?.name);
    console.log("Updating profile for user:", userId);
    let uploadedAvatarUrl = null;

    const result = avatar_url
      ? await uploadAvatar(userId, avatar_url)
      : { success: true, url: null };

    if (!result.success) {
      setError("Failed to upload avatar.");
      return;
    }
    if (!userId) {
      setError("No user ID found.");
      return;
    }
    const profileUpdate = await updateProfile(userId, {
      username,
      full_name,
      bio,
      avatar_url: result.url,
    });

    if (!result || typeof result !== "object") {
      setError("An unexpected error occurred.");
      setSuccess(false);
      return;
    }

    if (result.success) {
      setSuccess(true);
      setError("");
    } else if (result) {
      setSuccess(false);
    } else {
      setError("Unknown error.");
      setSuccess(false);
    }
    successMessage = "flex text-burgundy font-bold";
  };

  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center">
      <img
        src="/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"
      />

      <div className="relative z-10 bg-plum bg-opacity-40 rounded-3xl shadow p-6">
        <form className="text-cream w-full" onSubmit={handleSubmit}>
          <fieldset className="border-4 border-dotted border-cream p-6 space-y-4">
            <legend className="px-2 font-bold text-lg md:text-xl mx-20 bg-cream border-burgundy border-4 rounded-3xl text-burgundy">
              Just need to set up the rest of your profile!
            </legend>

            <input
              className="w-full bg-cream p-3 text-base md:text-lg rounded-3xl border-burgundy border-4 text-burgundy "
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="w-full bg-cream p-3 text-base md:text-lg rounded-3xl border-burgundy border-4 text-burgundy "
              placeholder="Name"
              onChange={(e) => setFull_Name(e.target.value)}
            />

            <input
              type="textarea"
              className="w-full bg-cream p-3 text-base md:text-lg rounded-3xl border-burgundy border-4 text-burgundy "
              placeholder="Tell us about you!"
              onChange={(e) => setBio(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setAvatar_url(e.target.files[0]);
                }
              }}
            />

            <button
              className="w-full rounded bg-burgundy text-cream p-3 border-cream border-4 rounded-3xl text-base md:text-lg font-bold hover:bg-plum"
              type="submit"
            >
              Let's go!
            </button>
          </fieldset>
          <p className={successMessage}>Yay! You're all sorted 🎉 </p>
        </form>
      </div>
    </div>
  );
}

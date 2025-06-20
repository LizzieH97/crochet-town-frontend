import { useState } from "react";
import { signUpUser } from "../services/APICalls";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = await signUpUser(email, password);

    if (result.success && result.user) {
      // Confirm user session is ready
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (!session) {
        setError("User session not ready yet, please try again.");
        return;
      }

      // Now insert profile
      const { error: profileError } = await supabase.from("profiles").insert({
        id: result.user.id,
        username: "",
        full_name: "",
        bio: "",
        avatar_url: "",
      });

      if (profileError) {
        setError("Failed to create profile: " + profileError.message);
        return;
      }

      setSuccess(true);
      setError("");
      navigate("/update");
    } else {
      setError(result.error?.message || "Sign up failed");
    }
  };
  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center">
      <img
        src="/background.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"
      />
      <div className="relative z-10 bg-plum bg-opacity-40 rounded-3xl shadow p-6">
        <form onSubmit={handleSubmit} className="text-cream w-full">
          <fieldset className="border-4 border-dotted border-cream p-6 space-y-4">
            <legend className="px-2 font-bold text-lg md:text-xl mx-20 bg-cream border-burgundy border-4 rounded-3xl text-burgundy">
              Welcome! Glad to have you 🥰 Sign up below ⬇
            </legend>
            <input
              className="w-full bg-cream p-3 text-base text-burgundy md:text-lg rounded-3xl border-burgundy border-4"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full bg-cream p-3 text-base text-burgundy md:text-lg rounded-3xl border-burgundy border-4"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full bg-cream p-3 text-base text-burgundy md:text-lg rounded-3xl border-burgundy border-4"
              type="password"
              placeholder="Repeat Password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full rounded bg-burgundy text-cream p-3 border-cream border-4 rounded-3xl text-base md:text-lg font-bold hover:bg-plum"
            >
              Create Account
            </button>
            <Link
              to="/signin"
              className="block text-center text-s text-burgundy font-bold mb-2 bg-cream border-burgundy border-4 rounded-3xl"
            >
              Already have an account? Log in here!
            </Link>
            {error && <p className="text-red-400">{error}</p>}
            {success && (
              <p className="text-green-400">Signed up successfully!</p>
            )}
          </fieldset>{" "}
        </form>
      </div>
    </div>
  );
}

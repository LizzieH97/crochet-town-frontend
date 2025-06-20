import { Link } from "react-router-dom";

export default function SigninForm() {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3]">
        <img
          src="/background.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl"
        />
        <div
          className="absolute inset-0 bg-plum bg-opacity-40 rounded-3xl shadow flex flex-col justify-center p-6 items-center z-10"
          id="login"
        >
          <form method="post" action="" className="text-cream w-full">
            <fieldset className="border-4 border-dotted border-cream p-6 space-y-4">
              <legend className="px-2 font-bold text-lg md:text-xl mx-20 bg-cream border-burgundy border-4 rounded-3xl text-burgundy">
                Welcome back! Log in below ⬇
              </legend>

              <input
                className="w-full bg-cream p-3 text-base md:text-lg rounded-3xl border-burgundy border-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full bg-cream p-3 text-base md:text-lg rounded-3xl border-burgundy border-4"
                placeholder="Password"
              />

              <Link
                to="/"
                className="block text-right text-s text-cream font-bold mb-2"
              >
                Forgot Password?
              </Link>

              <button className="w-full rounded bg-burgundy text-cream p-3 border-cream border-4 rounded-3xl text-base md:text-lg font-bold hover:bg-plum">
                Log In
              </button>
              <Link
                to="/signup"
                className="block text-center text-s text-burgundy font-bold mb-2 bg-cream border-burgundy border-4 rounded-3xl"
              >
                New to us? Create an account here!
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

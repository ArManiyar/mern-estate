import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="rounded-lg"
        />
        <input
          type="password"
          name="paswd"
          id="paswd"
          placeholder="password"
          className="rounded-lg"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="rounded-lg"
        />
        <button
          type="button"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          SignUp
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600 ">SignIn</span>
        </Link>
      </div>
    </div>
  );
}

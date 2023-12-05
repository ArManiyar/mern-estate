import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const handleLoginSubmit = (e) => {};
  const handleChange = (e) => {};
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">SignIn</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          SignIn
        </button>
      </form>
    </div>
  );
}

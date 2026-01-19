import Header from "../components/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <form className="w-full max-w-lg mx-auto mt-20 rounded bg-black/75 p-40 text-white">
        <h1 className="mb-6 py-4 text-3xl font-semibold">Sign In</h1>

        <input
          type="text"
          placeholder="Email address"
          className="w-full mb-4 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 h-12 rounded bg-[#333] px-4 placeholder-gray-400 focus:outline-none"
        />

        <button className="w-full rounded bg-orange-500 py-3 text-lg font-semibold hover:bg-red-700 transition">
          Sign In
        </button>
      </form>
    </div>
  );
}

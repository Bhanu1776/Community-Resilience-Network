export const Home = () => {
  return (
    <div className="flex border-2 justify-center min-h-screen items-center ">
      <button
        className="bg-pink-500 p-20 rounded-full outline hover:outline-2 hover:outline-offset-2 hover:outline-neutral-800 hover:bg-pink-700 text-white font-bold"
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        Help
      </button>
    </div>
  );
};

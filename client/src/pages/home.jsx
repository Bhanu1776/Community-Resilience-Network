export const Home = () => {
  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <button
        className=" relative top-0 left-0 bg-pink-700 hover:bg-pink-800 aspect-square p-20 rounded-full outline hover:outline-2 hover:outline-offset-2 hover:outline-neutral-800  text-white text-4xl font-semibold tracking-wider duration-150 ease-in-out transition-all"
        onClick={() => {}}
      >
        Alert
        <span className=" absolute top-0 left-0 flex h-full w-full">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-10"></span>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-100 opacity-75"></span>
        </span>
      </button>
    </div>
  );
};

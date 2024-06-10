import "./FloatButton.css";

const FloatButton = () => {
  return (
    <>
      <button className="w-16 h-16 fixed bottom-0 right-0 mb-4 mr-4 p-2 cursor-pointer bg-white px-3 py-2 rounded-md text-red-950 tracking-wider shadow-xl animate-bounce hover:animate-none fill-rose-950 hover:bg-rose-950 hover:text-white transition-effect ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="center-total"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
        </svg>
      </button>
    </>
  );
};

export { FloatButton };

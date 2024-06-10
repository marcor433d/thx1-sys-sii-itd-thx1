function NoticeCard({ notice }) {
  return (
    <>
      <div className="h-8/10 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md self-center place-self-center transform transition duration-300 hover:scale-110 ">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r primary-color to-blu">
          <img
            src="../../src/assets/images/Img_card_test.jpg"
            alt="Imagen de noticia del ITD"
            className="object-cover w-full h-full m-0 p-0"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tailwind card
          </h5>
          <p className="block text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
            ligula.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg primary-color py-3 px-6 text-center align-middle text-xs text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
          >
            <div className="flex items-center">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-book ml-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export { NoticeCard };

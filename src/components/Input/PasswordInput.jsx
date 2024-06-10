function PasswordInput() {
  return (
    <div className="relative">
      <div className="relative">
        <input
          type="password"
          className="w-full ring-0 outline-none border border-gray-400 bg-gray-100 shadow-xl shadow-gray-200 text-neutral-900 placeholder-gray-600 text-md rounded-lg focus:ring-blue-800  focus:border-blue-800 block  p-4 hover:border-blue-800 hover:ring-blue-800 mt-4 pl-12"
          placeholder="Contraseña"
        />
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
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon icon-tabler icons-tabler-outline icon-tabler-lock"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>
      </div>
    </div>
  );
}

export { PasswordInput };

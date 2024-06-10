function ButtonExitMin({ title, href, Icon }) {
  return (
    <a
      href={href}
      className="w-full flex items-center justify-center py-4 px-2 rounded hover:text-red-600 hover:font-bold transform transition duration-500 hover:opacity-90 text-sm mb-1"
    >
      {Icon && (
        <div className="mr-2 ml-1 font-semibold items-center place-self-center">
          <Icon />
        </div>
      )}
    </a>
  );
}

export { ButtonExitMin };

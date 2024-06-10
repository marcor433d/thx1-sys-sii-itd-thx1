function ButtonExit({ title, href, Icon }) {
  return (
    <a
      href={href}
      className="flex items-center py-2.5 px-2 rounded hover:text-red-600 hover:font-bold transform transition duration-500 hover:opacity-90 text-sm mb-2 cursor-pointer"
    >
      {Icon && (
        <div className="mr-2 ml-1 font-semibold items-center place-self-center">
          <Icon />
        </div>
      )}
      <p className="grid justify-center items-center">{title}</p>
    </a>
  );
}

export { ButtonExit };

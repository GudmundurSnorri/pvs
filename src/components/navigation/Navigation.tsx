const Navigation = () => {
  return (
    <nav className="h-20 bg-white w-full sticky top-0 z-10 flex px-20 items-center justify-between">
      <div className="text-red-500 text-2xl">Prentverk Selfoss</div>
      <ul className="flex text-red-500 items-center">
        <li className="text-xl">Vörur</li>
        <li className="pl-10 text-xl">Sýnishorn</li>
        <li className="pl-10 text-xl">Um okkur</li>
        <li className="ml-10 bg-red-400 rounded-lg">
          <div className="py-2 px-4">
            <button className="text-white ">Hafa samband</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

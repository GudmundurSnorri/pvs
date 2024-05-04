import Button from "../button/Button";

const Navigation = () => {
  return (
    <nav className="h-20 bg-white w-full sticky top-0 z-10 flex px-20 items-center justify-between">
      <div className="text-red-main text-2xl">Prentverk Selfoss</div>
      <ul className="flex text-red-main items-center">
        <li className="text-xl">Vörur</li>
        <li className="pl-10 text-xl">Sýnishorn</li>
        <li className="pl-10 text-xl">Um okkur</li>
        <li className="ml-10  rounded-lg">
          <Button isInverted text={"Hafa samband"} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

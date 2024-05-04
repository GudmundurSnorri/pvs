import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen h-full grid grid-cols-12 items-center">
      <div className="py-20 col-start-2 col-end-4">
        <Image
          src="/images/logo.jpg"
          width={400}
          height={300}
          alt="Prentverk Selfoss logo"
        />
      </div>
      <div className=" py-20 col-start-5 col-end-7">
        <div className="flex flex-col w-max">
          <h5 className="text-lg">Tengiliðir</h5>
          <div className="border-b w-full border-red-400" />
        </div>
        <ul>
          <li className="py-1 tracking-wider">
            <a href="mailto:pvs@pvs.is">pvs@pvs.is</a>
          </li>
          <li className="tracking-wider">
            <a href="tel:003548983877">898 3877</a>
          </li>
        </ul>
      </div>
      <div className=" py-20 col-start-7 col-end-9">
        <div className="flex flex-col w-max">
          <h5 className="text-lg">Heimilisfang</h5>
          <div className="border-b w-full border-red-400" />
        </div>
        <ul>
          <li className="py-1 tracking-wider">
            <a href="https://maps.app.goo.gl/zL62AbRZhvemMLGy7">Gagnheiði 43</a>
          </li>
          <li className="tracking-wider">800 Selfoss</li>
        </ul>
      </div>
      <div className=" py-20 col-start-9 col-end-11">
        <div className="flex flex-col w-max">
          <h5 className="text-lg">Opnunartími</h5>
          <div className="border-b w-full border-red-400" />
        </div>
        <ul>
          <li className="py-1 tracking-wider">Mán - Fös</li>
          <li className="tracking-wider">frá 08:00 - 17:00</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

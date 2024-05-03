import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative grid min-h-screen w-full grid-cols-3 bg-white">
      <div className="absolute min-h-screen w-full">
        <Image
          src={"/images/stacked-waves-haikei.svg"}
          alt={""}
          width={1920}
          height={1000}
        />
      </div>

      <div className="relative flex col-start-1 col-end-3 flex-col">
        <div className="w-full h-full pt-32 pl-10">
          <div className="px-32 py-32">
            <h1 className="text-8xl font-semibold">
              Prentverk <br /> Selfoss
            </h1>
            <p className="pt-10 ">
              Lítið fjölskyldufyrirtæki með persónulegri þjónustu, auga fyrir{" "}
              <br />
              smáatriðum og einstaklega falegan metnað
            </p>
            <div className="pt-10">
              <button className="bg-white text-red-500 py-2 px-6 rounded-lg font-semibold">
                Hafa samband
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex col-start-3 col-end-3">
        <Image
          className="py-32 pr-10"
          src={"/images/BigPic2.jpg"}
          alt={""}
          width={600}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeroSection;

import Image from "next/image";
import Button from "./button/Button";

const HeroSection = () => {
  return (
    <div className="relative z-10 grid min-h-screen w-full bg-white">
      <div className="absolute min-h-screen w-full">
        <Image
          src={
            "https://images.ctfassets.net/ch7ua35viv8m/2rkkT10o6onJC4A1HKZueD/601a90617517e4927b01c4722cf858dd/stacked-waves-haikei.svg"
          }
          alt={""}
          width={1920}
          height={1000}
        />
      </div>

      <div className="relative grid grid-cols-12">
        <div className="h-full flex flex-col col-start-3 col-end-6 justify-center">
          <h1 className="text-8xl font-semibold text-white">
            Prentverk <br /> Selfoss
          </h1>
          <p className="pt-10 text-white">
            Lítið fjölskyldufyrirtæki með persónulegri þjónustu, auga fyrir
            <br />
            smáatriðum og einstaklega falegan metnað
          </p>
          <div className="pt-10">
            <Button text={"Hafa samband"} />
          </div>
        </div>

        <div className="relative col-start-8 col-end-12 flex items-center">
          <Image
            src={
              "https://images.ctfassets.net/ch7ua35viv8m/2SO5v6kROGOuh75RnpsS01/21d5be1eafffe14b8b89f2c16fa52572/BigPic2.jpg"
            }
            alt={""}
            width={600}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

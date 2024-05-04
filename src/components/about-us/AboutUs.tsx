import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="h-full w-full grid grid-cols-6 px-32 py-16 bg-red-main relative z-10">
      <div className="relative col-start-1 col-end-4">
        <div className="flex justify-center rounded-3xl  overflow-hidden">
          <Image
            src="https://images.ctfassets.net/ch7ua35viv8m/1q3TenebW9eC26sg9xCOrd/9e4890b09c16f30ec06d0d28ca75290e/owner.jpg"
            width={500}
            height={500}
            alt="Gunnar"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col col-start-4 col-end-9 justify-center">
        <div>
          <h2 className="text-4xl text-white font-thin">Gunnar Gunnarsson</h2>
          <div className="w-40 border-white border-b pt-2" />
        </div>
        <p className="py-4 text-white leading-7">
          Gunnar var í Iðnskólanum í Reykjavík 1970-1971, en hóf nám í prentun
          15. október 1971 í Prentsmiðju Suðurlands á Selfossi. Hann lauk námi
          1975 og tók sveinspróf 1976. Síðan starfaði hann samfleytt hjá
          Prentsmiðju Suðurlands þar til hann stofnaði sína eigin prentsmiðju.
          Fyrirtækið er rekið sem einstaklingsfyrirtæki og vinnur Gunnar
          mestmegnis einn.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

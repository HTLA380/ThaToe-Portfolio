import Image from "next/image";
import React from "react";

const LandingSection = () => {
  return (
    <section className="pt-36">
      <div className="relative flex items-center justify-center">
        <Image
          draggable={false}
          priority={true}
          src={"/assets/images/landing-image.png"}
          alt="creative film"
          width={850}
          height={600}
          className="z-10 h-full w-full object-cover"
        />
        <Image
          className="absolute -bottom-1/4 left-1/4 -translate-x-1/2 scale-x-[-1]"
          src={"/assets/images/path-1.svg"}
          alt="path"
          width={190}
          height={170}
        />
        <div className="absolute left-1/2 top-1/2 z-20 flex w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 pt-14">
          <h3 className="bg-cyan_color px-3 text-22px font-semibold">
            filmmaking & creative content*
          </h3>
          <p className="text-shadow-sm text-center text-sm font-bold text-gray-800">
            H3in Productions
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;

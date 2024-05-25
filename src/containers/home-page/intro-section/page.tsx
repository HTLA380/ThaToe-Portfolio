import React from "react";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="mt-32 flex items-center justify-center">
      <div className="relative">
        <Image
          alt="TV overlay"
          className="z-10"
          src={"/assets/images/tv-image.png"}
          width={460}
          height={260}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <iframe
            width="250"
            height="190"
            src="https://www.youtube.com/embed/25CFW8z8Gcg?si=0q1EkdtvOVEelsfT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="-ml-6 -mt-40 bg-black/85 pb-10 pl-12 pr-10 pt-5 text-xl font-bold text-white_color">
        <span className="text-4xl">*</span>
        <h5 className="text-center">
          concept ideation,
          <br /> art direction,
          <br /> photography, writing <br /> & the creative blog
        </h5>
      </div>
    </section>
  );
};

export default IntroSection;

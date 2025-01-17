import Image from "next/image";
import React from "react";
import hero from "/public/images/content/hero.png";

const Hero = () => {
  return (
    <>
      <section id="#">
        <div className="relative z-50 sm:py-12 grid md:min-h-[600px] lg:grid-cols-2">
          <div className="z-50 my-auto space-y-4 *:text-center sm:*:text-left">
            <h2
              style={{ lineHeight: "1.2" }}
              className="font-inter text-2xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Wujudkan{" "}
              <span className="rounded-xl bg-gradient-to-br from-primary to-sky-500 px-2.5 text-white">
                Impian
              </span>{" "}
              <br /> Anda dengan Mudah!
            </h2>
            <p className="text-sm leading-normal sm:text-base md:text-lg lg:text-xl">
              Ciptakan rencana keuangan Anda dengan aman dan mudah. Website kami
              membantu Anda mengelola dan mengembangkan tabungan untuk mencapai
              tujuan finasial Anda✨
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button className="btnRoundedFull font-semibold">
                Gabung Sekarang
              </button>
              <button className="btnOutline">Cari Nasabah</button>
            </div>
          </div>

          <div className="order-first mx-auto lg:order-last">
            <Image
              src={hero.src}
              alt="image"
              blurDataURL={hero.blurDataURL}
              quality={100}
              width={470}
              height={470}
            />
          </div>
        </div>
      </section>
      <div className="hidden lg:block">
        <div className="absolute right-[47%] top-1/4 -z-50 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/70 to-blue-500/70 opacity-30 blur-3xl dark:opacity-20" />
        <div className="absolute bottom-1/4 -z-50 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500/70 to-yellow-500/70 opacity-30 blur-3xl dark:opacity-20" />
      </div>
    </>
  );
};

export default Hero;

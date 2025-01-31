import Image from "next/image";
import React from "react";
import hero from "/public/images/content/hero.png";

const Hero = () => {
  return (
    <>
      <section id="#" className="relative z-50 sm:py-16">
        <div className="grid md:min-h-[650px] lg:grid-cols-2">
          <div className="z-50 my-auto space-y-4 *:text-center sm:*:text-left">
            <h2 style={{ lineHeight: "1.2" }} className="h2">
              Wujudkan{" "}
              <span className="rounded-xl bg-gradient-to-br from-primary to-sky-500 px-2.5 text-white">
                Impian
              </span>{" "}
              <br /> Anda dengan Mudah!
            </h2>
            <p className="p">
              Ciptakan rencana keuangan Anda dengan aman dan mudah. Website kami
              membantu Anda mengelola dan mengembangkan tabungan untuk mencapai
              tujuan finasial Anda✨
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <button className="btnRoundedFull font-semibold">
                <a href="register">
                  Gabung Sekarang
                </a>
              </button>
              <button className="btnOutline">
                <a href="/search">Cari Nasabah</a>
              </button>
            </div>
          </div>

          <div className="order-first mx-auto pt-6 lg:order-last">
            <Image
              src={hero.src}
              alt="image"
              blurDataURL={hero.blurDataURL}
              quality={100}
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="absolute right-[47%] top-1/4 -z-50 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/70 to-blue-500/70 opacity-30 blur-3xl dark:opacity-20" />
          <div className="absolute bottom-1/4 -z-50 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500/70 to-yellow-500/70 opacity-30 blur-3xl dark:opacity-20" />
        </div>
      </section>
    </>
  );
};

export default Hero;

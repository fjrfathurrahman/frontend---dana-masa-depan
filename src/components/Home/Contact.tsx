"use client";

import Title from "../Titles/Title";
import FormContact from "../Forms/FormContact";
import Image from "next/image";
import image from "/public/images/content/home.png";

const Contact = () => {
  return (
    <section id="contact" className="relative z-50 sm:py-16">
      <div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
          <div>
            <Title
              title="Hubungi Kami"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            />
            <FormContact />
          </div>

          <div className="flex cursor-pointer items-center justify-center duration-300 hover:scale-110">
            <Image
              src={image.src}
              alt="image"
              width={250}
              height={250}
              blurDataURL={image.blurDataURL}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

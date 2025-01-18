import React from "react";
import Title from "../Titles/Title";
import FormContact from "../Forms/FormContact";

const Contact = () => {
  return (
    <section id="contact" className="relative z-50 sm:py-16">
      <div>
        <Title
          title="Hubungi Kami"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-2">
          <FormContact/>
        </div>
      </div>
    </section>
  );
};

export default Contact;

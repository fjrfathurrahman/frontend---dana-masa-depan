"use client";

import { useState } from "react";
import Title from "../Titles/Title";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Apa itu layanan kami?",
      answer:
        "Layanan kami menyediakan solusi digital untuk kebutuhan bisnis Anda.",
    },
    {
      question: "Bagaimana cara mendaftar?",
      answer:
        "Anda dapat mendaftar melalui halaman registrasi di website kami.",
    },
    {
      question: "Apakah ada biaya berlangganan?",
      answer:
        "Kami memiliki opsi gratis dan berbayar tergantung pada kebutuhan Anda.",
    },
  ];

  return (
    <section id="faq" className="py-16">
      <div>
        <Title
          title="Pertanyaan Umum."
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />

        <div className="mt-8 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-lg border shadow-md">
              <button
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="h3">{item.question}</h3>
                <span
                  className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && ( // Hanya menampilkan jawaban untuk item yang terbuka
                <div className="border-t p-4">
                  <p className="p">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

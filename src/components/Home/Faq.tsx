'use client';

import { Accordion, AccordionItem } from "@heroui/react";
import Title from "../Titles/Title";

const dFaq = [
  {
    id: 1,
    title: "Apa itu Website Tabungan?",
    desc: "Website Tabungan adalah platform digital yang memungkinkan Anda untuk mengelola informasi tentang nasabah, transaksi, dan saldo secara online. Fitur ini memudahkan pengguna dan admin dalam mengatur transaksi keuangan dengan cara yang lebih praktis dan efisien.",
  },
  {
    id: 2,
    title: "Bagaimana Cara Mendaftar sebagai Nasabah?",
    desc: "Untuk mendaftar sebagai nasabah, Anda dapat menghubungi pihak admin melalui halaman kontak atau mendaftar langsung di kantor cabang terdekat. Proses pendaftaran membutuhkan informasi seperti nama lengkap, nomor rekening, dan detail identitas lainnya.",
  },
  {
    id: 3,
    title: "Apakah Data Nasabah Aman di Website Ini?",
    desc: "Ya, kami menggunakan teknologi keamanan terbaik untuk memastikan semua data nasabah disimpan dengan aman. Semua informasi yang dikirimkan melalui website kami dienkripsi untuk melindungi dari akses yang tidak sah.",
  },
  {
    id: 4,
    title: "Bagaimana Cara Menghubungi Admin?",
    desc: "Anda bisa menghubungi admin melalui halaman kontak di website ini atau melalui alamat email dan nomor telepon yang tersedia. Kami siap membantu Anda dengan segala pertanyaan atau masalah yang Anda hadapi.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-16">
      <Title title="Pertayaan Umum (FAQ)" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
      <Accordion defaultExpandedKeys={["2"]} variant="light">
        {dFaq.map((item) => (
          <AccordionItem
            classNames={{title: "h3 text-2xl", content: "p text-xl"}}
            key={item.id}
            aria-label={`FAQ ${item.id}`}
            title={item.title}
          >
            {item.desc}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;

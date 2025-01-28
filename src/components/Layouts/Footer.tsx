import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-12 border-t py-12">
        <div className="col-span-2">
          <h3 className="h4 mb-4 text-primary">Dana Masa Depan</h3>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            provident suscipit illum quos nostrum eos nemo dignissimos, culpa
            facere odit deserunt! Repudiandae accusantium sed numquam ullam
            obcaecati quo sint, maxime voluptates corporis pariatur, amet facere
            quaerat accusamus nobis odit officia.
          </p>
          <button className="btnRoundedFull font-semibold">
            <a
              href="http://https://wa.me/6285860118691"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gabung Sekarang
            </a>
          </button>
        </div>
        <div>
          <span className="font-bold text-dark dark:text-white">Links</span>
          <ul className="mt-4 space-y-4">
            <li><a href="#">Beranda</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="#features">Keunggulan</a></li>
            <li><a href="#faq">Faq</a></li>
            <li><a href="#signin">Sign In</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-dark dark:text-white">Informasi</span>
          <ul className="mt-4 space-y-4">
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
            <li><a href="#">Syarat dan Ketentuan</a></li>
            <li><a href="#">Bantuan</a></li>
          </ul>
        </div>
      </div>

      <div className="container py-4 border-t">
        <p>Copyright &copy; 2023 Dana Masa Depan</p>
      </div>
    </footer>
  );
};

export default Footer;

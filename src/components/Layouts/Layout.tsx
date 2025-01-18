import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <NavBar />
        <main className="container">{children}</main>
        <Footer/>
      </div>
    </>
  );
}

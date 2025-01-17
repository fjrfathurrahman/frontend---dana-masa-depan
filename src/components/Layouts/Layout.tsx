import NavBar from "../NavBars/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <NavBar />
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
}

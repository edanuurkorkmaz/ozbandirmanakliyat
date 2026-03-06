import Navbar from "../components/Navbar.jsx";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/images/hero-bg.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>
        <div>
          <h2 className="text-white">About</h2>
        </div>
      </section>
    </>
  );
}

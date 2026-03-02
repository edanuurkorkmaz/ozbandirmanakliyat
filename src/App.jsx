import Blog from "/src/components/BlogTemp.jsx";
import Hero from "/src/components/Hero.jsx";
import Navbar from "/src/components/Navbar.jsx";
import References from "/src/components/References.jsx";
import Services from "/src/components/Services.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <References />
      <Services />
      <Blog />
      <Analytics />
    </main>
  );
}

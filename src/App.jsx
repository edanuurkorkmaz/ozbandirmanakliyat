import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/NavbarTemp.jsx";
import Hero from "./components/Hero.jsx";
import References from "./components/References";
import Services from "./components/Services";
import Blog from "./components/BlogTemp";

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

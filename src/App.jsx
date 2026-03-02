import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import References from "./components/References.jsx";
import Services from "./components/Services.jsx";
import Blog from "./components/BlogTemp.jsx";

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

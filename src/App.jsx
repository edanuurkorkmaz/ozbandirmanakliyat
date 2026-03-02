import Blog from "./components/Blog.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import References from "./components/References.jsx";
import Services from "./components/Services.jsx";
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

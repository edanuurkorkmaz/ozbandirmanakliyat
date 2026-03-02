import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import References from "./components/References";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <References />
      <Services />
      <Analytics />
    </main>
  );
}

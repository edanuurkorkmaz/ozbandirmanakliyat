import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import References from "./components/References";
import Services from "./components/Services";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <References />
    </main>
  );
}

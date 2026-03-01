import { BrowserRouter, Routes, Route } from "react-router";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./pages/About";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  );
}

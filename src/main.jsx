import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage.jsx";
import Kvkk from "./pages/Kvkk.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="kurumsal" element={<About />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="kvkk-aydinlatma-metni" element={<Kvkk />} />
        <Route path="gizlilik-politikasi" element={<PrivacyPolicy />} />
        <Route path="cerez-politikasi" element={<CookiePolicy />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>,
);

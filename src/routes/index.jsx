import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import { SobreMim } from "../pages/sobreMim";
import { Portfolio } from "../pages/portfolio";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
export { RoutesApp };
  
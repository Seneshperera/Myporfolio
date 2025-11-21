import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JustPark from "./pages/JustPark";
import HasthiRaksha from "./pages/HasthiRaksha";
import Cinemax from "./pages/Cinemax";
import Gaman from "./pages/Gaman";
import BrandIdentityDesign from "./pages/BrandIdentityDesign";
import PosterDesignCollection from "./pages/PosterDesignCollection";
import UIDesignSystem from "./pages/UIDesignSystem";
import IllustrationSeries from "./pages/IllustrationSeries";
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects/just-park" element={<JustPark />} />
      <Route path="/projects/hasthi-raksha" element={<HasthiRaksha />} />
      <Route path="/projects/cinemax" element={<Cinemax />} />
      <Route path="/projects/gaman" element={<Gaman />} />
      <Route path="/designs/brand-identity" element={<BrandIdentityDesign />} />
      <Route path="/designs/illustration-series" element={<IllustrationSeries />} />
      <Route path="/designs/poster-collection" element={<PosterDesignCollection />} />
      <Route path="/designs/ui-design-system" element={<UIDesignSystem />} />
      <Route path="/designs/illustration-series" element={<IllustrationSeries />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

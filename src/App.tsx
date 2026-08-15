import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import DoorStyles from '@/pages/DoorStyles';
import Finishes from '@/pages/Finishes';
import WoodSpecies from '@/pages/WoodSpecies';
import Gallery from '@/pages/Gallery';
import Studio from '@/pages/Studio';
import Contact from '@/pages/Contact';
import ProjectNguyen from '@/pages/ProjectNguyen';
import SpecialtyGlass from '@/pages/SpecialtyGlass';
import OptiFit from '@/pages/OptiFit';

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/door-styles" element={<DoorStyles />} />
        <Route path="/finishes" element={<Finishes />} />
        <Route path="/wood-species" element={<WoodSpecies />} />
        <Route path="/specialty-glass" element={<SpecialtyGlass />} />
        <Route path="/optifit" element={<OptiFit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/nguyen" element={<ProjectNguyen />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

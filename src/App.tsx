import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import DoorStyles from '@/pages/DoorStyles';
import Finishes from '@/pages/Finishes';
import WoodSpecies from '@/pages/WoodSpecies';
import Gallery from '@/pages/Gallery';
import Studio from '@/pages/Studio';
import Contact from '@/pages/Contact';
import ProjectNguyen from '@/pages/ProjectNguyen';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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

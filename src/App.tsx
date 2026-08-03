import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import DoorStyles from '@/pages/DoorStyles';
import Finishes from '@/pages/Finishes';
import WoodSpecies from '@/pages/WoodSpecies';
import Gallery from '@/pages/Gallery';
import Studio from '@/pages/Studio';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/door-styles" element={<DoorStyles />} />
        <Route path="/finishes" element={<Finishes />} />
        <Route path="/wood-species" element={<WoodSpecies />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

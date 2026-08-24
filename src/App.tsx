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
import ProjectCarsten from '@/pages/ProjectCarsten';
import ProjectSchneideKitchen from '@/pages/ProjectSchneideKitchen';
import ProjectSchneideBath from '@/pages/ProjectSchneideBath';
import ProjectSchneideLaundry from '@/pages/ProjectSchneideLaundry';
import ProjectPennington from '@/pages/ProjectPennington';
import ProjectGaynor from '@/pages/ProjectGaynor';
import ProjectSorens from '@/pages/ProjectSorens';
import SpecialtyGlass from '@/pages/SpecialtyGlass';
import OptiFit from '@/pages/OptiFit';
import Consultation from '@/pages/Consultation';

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
        <Route path="/gallery/carsten" element={<ProjectCarsten />} />
        <Route path="/gallery/schneide-kitchen" element={<ProjectSchneideKitchen />} />
        <Route path="/gallery/schneide-bath" element={<ProjectSchneideBath />} />
        <Route path="/gallery/schneide-laundry" element={<ProjectSchneideLaundry />} />
        <Route path="/gallery/pennington" element={<ProjectPennington />} />
        <Route path="/gallery/gaynor" element={<ProjectGaynor />} />
        <Route path="/gallery/sorens" element={<ProjectSorens />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

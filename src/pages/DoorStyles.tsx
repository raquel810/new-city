import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InstalledPhoto {
  src: string;
  alt: string;
}

interface DoorStyle {
  name: string;
  description: string;
  style: string;
  overlay: string;
  drawerFront: string;
  doorProfile: string;
  woodSpecies: string[];
  doorImage?: string;
  hasImage: boolean;
  installedPhotos: InstalledPhoto[];
}

const DOOR_STYLES: DoorStyle[] = [
  {
    name: 'Erving',
    description:
      'Erving is a clean slab door style with a modern, understated look. Its flat profile keeps the design simple and refined, allowing wood tone, finish, and hardware to take center stage.',
    style: 'Slab',
    overlay: 'Full Overlay',
    drawerFront: 'Slab',
    doorProfile: '3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Quartersawn White Oak'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen4-iversonerving_photo_2.jpg', alt: 'Erving kitchen detail' },
    ],
  },
  {
    name: 'Iverson',
    description:
      'Iverson is a timeless shaker-style door with a clean, versatile profile. Its framed construction adds subtle detail while keeping the overall look simple, balanced, and easy to live with.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '1 3/4" frame, 3/4" thick, 15/16" inset',
    woodSpecies: ['Maple', 'Oak', 'Quartersawn White Oak'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen4-iversonerving_photo_3.jpg', alt: 'Iverson and Erving kitchen' },
    ],
  },
  {
    name: 'Sanders',
    description:
      'Sanders is a classic shaker-style door with a crisp 90-degree frame and a clean, versatile look. Its simple profile makes it an easy fit for everything from traditional spaces to more modern interpretations.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 1/2" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Hickory'],
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Duncan',
    description:
      'Duncan is a refined chamfered shaker door that brings subtle depth to a classic framed profile. Its clean lines and softened interior edge create a look that feels timeless, tailored, and well suited to transitional spaces.',
    style: 'Flat-Panel, Mortise & Tenon',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '3 1/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Quartersawn White Oak', 'Hickory'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen-duncan_photo_4.jpg', alt: 'Duncan two-tone kitchen' },
      { src: '/featured-images/bathroom-duncan_photo_2.jpg', alt: 'Duncan bathroom vanity' },
      { src: '/featured-images/twotonekitchen5-duncan_photo_2.jpg', alt: 'Duncan warm kitchen' },
    ],
  },
  {
    name: 'James',
    description:
      'James is a beaded shaker-style door with a soft interior detail and timeless appeal. Its rounded profile adds subtle depth and character while keeping the overall look balanced and versatile.',
    style: 'Flat-Panel, Mortise & Tenon',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 3/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Hickory'],
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Payton',
    description:
      'Payton is a mitered flat-panel door with a tailored profile and understated depth. Its angled frame adds a polished, furniture-like quality while keeping the overall look clean and versatile.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 3/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak'],
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Jordan',
    description:
      'Jordan is a mitered flat-panel door with a straight sloped interior profile that adds subtle depth to its tailored frame. Its clean angles create a polished, versatile look well suited to transitional spaces.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 1/2" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Hickory'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/kitchen3-jordan_photo_0.jpg', alt: 'Jordan kitchen cabinetry' },
    ],
  },
  {
    name: 'Jackson',
    description:
      'Jackson is a mitered flat-panel door with a softly curved interior profile that adds depth and graceful detail. Its contoured frame brings a polished, furniture-inspired character that feels timeless and versatile.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 3/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak'],
    doorImage: '/jackson.png',
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Bryant',
    description:
      'Bryant is a mitered flat-panel door with a stepped interior profile, combining a subtle flat reveal with a straight sloped detail. Its tailored frame creates a polished, versatile look for transitional spaces.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 3/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen2-bryant_photo_0.jpg', alt: 'Bryant arched kitchen' },
      { src: '/featured-images/twotonekitchen2-bryant_photo_1.jpg', alt: 'Bryant kitchen detail' },
    ],
  },
  {
    name: 'Taylor',
    description:
      'Taylor is a double shaker-style door that builds on a classic framed profile with added depth and detail. Its layered design creates a more tailored, furniture-inspired look while still feeling timeless, balanced, and versatile.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 1/2" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Hickory'],
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Russell',
    description:
      'Russell is a mitered flat-panel door with a more traditional profile and refined interior detailing. Rich in depth and character, it brings a classic, furniture-inspired quality to spaces that call for a more formal look.',
    style: 'Flat-Panel, Mitered',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 1/2" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Hickory'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen3-russell_photo_0.jpg', alt: 'Russell slab kitchen' },
    ],
  },
  {
    name: 'Barkley',
    description:
      'Barkley is a refined flat-panel door with mortise and tenon construction and understated interior detailing. Its clean frame and subtle depth create a timeless, tailored look with lasting versatility.',
    style: 'Flat-Panel, Mortise & Tenon',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 3/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Quartersawn White Oak'],
    doorImage: '/barkley.png',
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Malone',
    description:
      'Malone is a classic flat-panel door with interior and exterior frame detailing that adds depth and character. Its layered profile creates a timeless, tailored look with a more traditional feel.',
    style: 'Flat-Panel, Mortise & Tenon',
    overlay: 'Full Overlay',
    drawerFront: '5-Piece or Slab',
    doorProfile: '2 3/4" frame, 3/4" thick',
    woodSpecies: ['Maple', 'Cherry', 'Oak', 'Quartersawn White Oak'],
    doorImage: '/malone.png',
    hasImage: true,
    installedPhotos: [],
  },
];

function DoorCard({ door }: { door: DoorStyle }) {
  const nameLower = door.name.toLowerCase();
  const imageSrc = door.doorImage ?? `/${nameLower}_hc-door.jpg`;

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-[#E0E1E1]">
      {/* Door Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F7F6F4]">
        {door.hasImage ? (
          <img
            src={imageSrc}
            alt={`${door.name} door style`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-sans text-sm text-[#949089]">Coming Soon</span>
          </div>
        )}

        {/* Profile overlay on hover */}
        <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
          <img
            src={`/${nameLower}_profile.png`}
            alt={`${door.name} edge profile`}
            className="max-w-full max-h-full object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h2 className="font-serif text-2xl font-bold text-[#242019] mb-2 group-hover:text-[#949089] transition-colors duration-300">
          {door.name}
        </h2>
        <p className="font-sans text-sm text-[#242019]/70 leading-relaxed mb-4">
          {door.description}
        </p>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
          <SpecLine label="Style" value={door.style} />
          <SpecLine label="Overlay" value={door.overlay} />
          <SpecLine label="Drawer Front" value={door.drawerFront} />
          <SpecLine label="Profile" value={door.doorProfile} />
        </div>

        {/* Species Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {door.woodSpecies.map((species) => (
            <span
              key={species}
              className="inline-block px-2 py-0.5 text-xs font-sans font-medium rounded-full bg-[#F7F6F4] text-[#242019]/80 border border-[#E0E1E1]"
            >
              {species}
            </span>
          ))}
        </div>

        {/* Installed Photos */}
        {door.installedPhotos.length > 0 && (
          <div>
            <p className="font-sans text-xs uppercase tracking-wider text-[#949089] mb-2">
              See it installed
            </p>
            <div className="flex gap-2">
              {door.installedPhotos.map((photo, i) => (
                <Link
                  key={i}
                  to="/gallery"
                  className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0 hover:ring-2 hover:ring-[#949089] transition-all duration-200"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SpecLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-sans text-[10px] uppercase tracking-wider text-[#949089]">
        {label}
      </span>
      <span className="font-sans text-xs text-[#242019]/80">{value}</span>
    </div>
  );
}

export default function DoorStyles() {
  return (
    <div className="min-h-screen bg-[#F7F6F4]">
      {/* Hero Banner */}
      <section className="bg-[#F7F6F4] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#242019] mb-4">
            Door Styles
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#949089] max-w-2xl mx-auto">
            Thirteen profiles defined by edge geometry, panel depth, and proportion.
          </p>
        </div>
      </section>

      {/* Door Styles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="font-sans text-sm text-[#949089] text-center mb-10">
          Hover any door to reveal its cross-section profile.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DOOR_STYLES.map((door) => (
            <DoorCard key={door.name} door={door} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#242019] mb-4">
            See the details up close
          </h2>
          <p className="font-sans text-[#949089] text-lg mb-8">
            Use the configurator to pair any profile with your choice of species and finish.
          </p>
          <Link
            to="/studio"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
          >
            Open The Studio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

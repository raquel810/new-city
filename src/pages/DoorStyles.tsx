import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InstalledPhoto {
  src: string;
  alt: string;
}

interface DoorStyle {
  name: string;
  description: string;
  availableSpecies: string[];
  hasImage: boolean;
  installedPhotos: InstalledPhoto[];
}

const ALL_SPECIES = [
  'Maple',
  'Hickory',
  'Cherry',
  'Walnut',
  'Alder',
  'Quarter Sawn White Oak',
  'Rift Sawn White Oak',
];

const DOOR_STYLES: DoorStyle[] = [
  {
    name: 'Sanders',
    description: 'Full overlay, square outside edge, flat center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Duncan',
    description:
      'Full overlay, square outside edge, flat center panel with slim shaker rail.',
    availableSpecies: ALL_SPECIES,
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
      'Full overlay, square outside edge, recessed flat center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Payton',
    description:
      'Full overlay, square outside edge, recessed flat center panel with beaded inner edge.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Taylor',
    description:
      'Full overlay, slight bevel outside edge, flat center panel with slim shaker rail.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
    installedPhotos: [],
  },
  {
    name: 'Malone',
    description:
      'Full overlay, profiled outside edge, recessed flat center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: false,
    installedPhotos: [],
  },
  {
    name: 'Jordan',
    description:
      'Full overlay, double stepped outside edge, raised center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/kitchen3-jordan_photo_0.jpg', alt: 'Jordan kitchen cabinetry' },
      { src: '/featured-images/laundry2-jordan_photo_0.jpg', alt: 'Jordan laundry room' },
    ],
  },
  {
    name: 'Jackson',
    description:
      'Full overlay, detailed outside edge, raised center panel with unique profile.',
    availableSpecies: ALL_SPECIES,
    hasImage: false,
    installedPhotos: [],
  },
  {
    name: 'Bryant',
    description:
      'Full overlay, profiled outside edge, arched raised center panel.',
    availableSpecies: ['Maple', 'Hickory', 'Cherry', 'Walnut'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen2-bryant_photo_0.jpg', alt: 'Bryant arched kitchen' },
      { src: '/featured-images/twotonekitchen2-bryant_photo_1.jpg', alt: 'Bryant kitchen detail' },
    ],
  },
  {
    name: 'Russell',
    description:
      'Full overlay, square outside edge, flat panel, slab-style.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen3-russell_photo_0.jpg', alt: 'Russell slab kitchen' },
    ],
  },
  {
    name: 'Iverson',
    description:
      'Full overlay, square outside edge, flat center panel. 3/4" thick MDF.',
    availableSpecies: ['Paint-grade MDF'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen4-iversonerving_photo_3.jpg', alt: 'Iverson & Erving kitchen' },
    ],
  },
  {
    name: 'Erving',
    description:
      'Full overlay, square outside edge, flat center panel, slim shaker rail. 3/4" thick MDF.',
    availableSpecies: ['Paint-grade MDF'],
    hasImage: true,
    installedPhotos: [
      { src: '/featured-images/twotonekitchen4-iversonerving_photo_2.jpg', alt: 'Erving kitchen detail' },
    ],
  },
];

function DoorCard({ door }: { door: DoorStyle }) {
  const nameLower = door.name.toLowerCase();

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-[#E0E1E1]">
      {/* Door Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F7F6F4]">
        {door.hasImage ? (
          <img
            src={`/${nameLower}_hc-door.jpg`}
            alt={`${door.name} door style`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-sans text-sm text-[#949089]">Coming Soon</span>
          </div>
        )}

        {/* Profile overlay on hover */}
        {door.hasImage && (
          <div className="absolute inset-0 bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
            <img
              src={`/${nameLower}_profile.png`}
              alt={`${door.name} edge profile`}
              className="max-w-full max-h-full object-contain drop-shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h2 className="font-serif text-2xl font-bold text-[#242019] mb-2 group-hover:text-[#949089] transition-colors duration-300">
          {door.name}
        </h2>
        <p className="font-sans text-sm text-[#242019]/70 leading-relaxed mb-4">
          {door.description}
        </p>

        {/* Species Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {door.availableSpecies.map((species) => (
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
            12 distinctive profiles, each crafted to define your space.
          </p>
        </div>
      </section>

      {/* Door Styles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="font-sans text-sm text-[#949089] text-center mb-10">
          Hover over any door to see its edge profile detail.
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
            Not sure which style is right?
          </h2>
          <p className="font-sans text-[#949089] text-lg mb-8">
            Try our interactive configurator to see any door style with your choice of finish and wood species.
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

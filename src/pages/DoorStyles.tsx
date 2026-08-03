interface DoorStyle {
  name: string;
  description: string;
  availableSpecies: string[];
  hasImage: boolean;
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
  },
  {
    name: 'Duncan',
    description:
      'Full overlay, square outside edge, flat center panel with slim shaker rail.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
  },
  {
    name: 'James',
    description:
      'Full overlay, square outside edge, recessed flat center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
  },
  {
    name: 'Payton',
    description:
      'Full overlay, square outside edge, recessed flat center panel with beaded inner edge.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
  },
  {
    name: 'Taylor',
    description:
      'Full overlay, slight bevel outside edge, flat center panel with slim shaker rail.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
  },
  {
    name: 'Malone',
    description:
      'Full overlay, profiled outside edge, recessed flat center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: false,
  },
  {
    name: 'Jordan',
    description:
      'Full overlay, double stepped outside edge, raised center panel.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
  },
  {
    name: 'Jackson',
    description:
      'Full overlay, detailed outside edge, raised center panel with unique profile.',
    availableSpecies: ALL_SPECIES,
    hasImage: false,
  },
  {
    name: 'Bryant',
    description:
      'Full overlay, profiled outside edge, arched raised center panel.',
    availableSpecies: ['Maple', 'Hickory', 'Cherry', 'Walnut'],
    hasImage: true,
  },
  {
    name: 'Russell',
    description:
      'Full overlay, square outside edge, flat panel, slab-style.',
    availableSpecies: ALL_SPECIES,
    hasImage: true,
  },
  {
    name: 'Iverson',
    description:
      'Full overlay, square outside edge, flat center panel. 3/4" thick MDF.',
    availableSpecies: ['Paint-grade MDF'],
    hasImage: true,
  },
  {
    name: 'Erving',
    description:
      'Full overlay, square outside edge, flat center panel, slim shaker rail. 3/4" thick MDF.',
    availableSpecies: ['Paint-grade MDF'],
    hasImage: true,
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
          <div className="absolute inset-0 bg-[#242019]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
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
        <div className="flex flex-wrap gap-1.5">
          {door.availableSpecies.map((species) => (
            <span
              key={species}
              className="inline-block px-2 py-0.5 text-xs font-sans font-medium rounded-full bg-[#F7F6F4] text-[#242019]/80 border border-[#E0E1E1]"
            >
              {species}
            </span>
          ))}
        </div>
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
    </div>
  );
}

import { useState } from 'react';
import { Droplets, X } from 'lucide-react';

interface PaintColor {
  name: string;
  hex: string;
  light: boolean;
  vibe: string;
  inspiration: string;
}

interface StainColor {
  name: string;
  vibe: string;
  inspiration: string;
}

const paintColors: PaintColor[] = [
  {
    name: 'Polar',
    hex: '#F8F7F1',
    light: true,
    vibe: 'Crisp Neutral | Minimalist',
    inspiration:
      'Reminiscent of fresh snowfall over architectural limestone. A pristine, luminous backdrop that elevates tailored Shaker doors and ornate inset millwork alike.',
  },
  {
    name: 'Arctic',
    hex: '#F1EDEC',
    light: true,
    vibe: 'Cool Neutral | Contemporary',
    inspiration:
      'A clean white with a whispering grey undertone. Evokes the serene stillness of winter mornings, bringing effortless light into modern kitchens.',
  },
  {
    name: 'Moonlight',
    hex: '#DFD3C3',
    light: true,
    vibe: 'Warm Luxury | Transitional',
    inspiration:
      'A creamy alabaster imbued with soft candlelight warmth. Adds an effortless, lived-in sophistication to bespoke inset cabinetry.',
  },
  {
    name: 'Stone',
    hex: '#CCC8BF',
    light: true,
    vibe: 'Earthy Organic | Greige',
    inspiration:
      'Inspired by sun-bleached river pebbles. A grounded, versatile neutral that effortlessly bridges warm natural oak and cool marble countertops.',
  },
  {
    name: 'Slate',
    hex: '#7F817E',
    light: false,
    vibe: 'Architectural | Urban Chic',
    inspiration:
      'A grounded mid-tone grey reminiscent of weathered slate rooftops. Brings striking structure and tailored sophistication to perimeter cabinets.',
  },
  {
    name: 'Sage',
    hex: '#95978A',
    light: false,
    vibe: 'Botanical | Restorative',
    inspiration:
      'Earthy and calming, like dried eucalyptus leaves in morning light. Creates a gentle, organic ambiance for butler\'s pantries and kitchen islands.',
  },
  {
    name: 'Basil',
    hex: '#626F61',
    light: false,
    vibe: 'Forest Organic | Moody',
    inspiration:
      'Rich and grounding, echoing the quiet depths of an old-growth pine forest. A stately statement finish that anchors large islands and library built-ins.',
  },
  {
    name: 'Drift',
    hex: '#C6DDF0',
    light: true,
    vibe: 'Coastal Air | Breezy',
    inspiration:
      'A soft, sun-washed sky blue reminiscent of sea glass and morning tide. Brings a relaxed, luminous charm to lakefront or cottage-style kitchens.',
  },
  {
    name: 'Harbor',
    hex: '#758B9A',
    light: false,
    vibe: 'Coastal Traditional | Tailored',
    inspiration:
      'Echoes foggy coastal waters and morning harbor haze. A timeless slate blue that pairs seamlessly with polished brass hardware and warm walnut accents.',
  },
  {
    name: 'Navy',
    hex: '#35454E',
    light: false,
    vibe: 'Dramatic Statement | Executive',
    inspiration:
      'A rich midnight hue inspired by deep ocean trenches. Commands attention on focal-point cabinetry while maintaining an air of classic elegance.',
  },
  {
    name: 'Nyx',
    hex: '#2F2F30',
    light: false,
    vibe: 'Bold Noir | High Contrast',
    inspiration:
      'Saturated, drama-filled charcoal black reminiscent of volcanic rock. Delivers striking high-contrast sophistication for modern luxury spaces.',
  },
];

const stainColors: StainColor[] = [
  {
    name: 'Oat',
    vibe: 'Scandinavian | Raw Organic',
    inspiration:
      'Captures the unrefined beauty of sun-dried wheat. Accentuates raw wood species clarity with a barely-there, natural organic glow.',
  },
  {
    name: 'Fawn',
    vibe: 'Warm Minimalist | Japandi',
    inspiration:
      'A gentle wheat-gold tint that feels warm and inviting. Enhances subtle grain movement without altering the wood\'s underlying natural tone.',
  },
  {
    name: 'Alcove',
    vibe: 'Timeless Heritage | Craftsman',
    inspiration:
      'A classic warm oak stain echoing traditional library paneling and vintage furniture. Brings cozy, enduring warmth to inset designs.',
  },
  {
    name: 'Honey',
    vibe: 'Golden Warmth | Radiant',
    inspiration:
      'Rich amber tones reminiscent of sunlit honey. Celebrates deep grain variation and brings radiant warmth to Cherry and Maple cabinetry.',
  },
  {
    name: 'Rye',
    vibe: 'Transitional | Grounded',
    inspiration:
      'A toasted chestnut shade that feels rich and tailored. Adds effortless depth to perimeter cabinetry and custom built-in nooks.',
  },
  {
    name: 'Pumice',
    vibe: 'Weathered | Modern Farmhouse',
    inspiration:
      'A subtle grey-tinted wash inspired by drifted wood and volcanic ash. Softens natural wood grain for a relaxed, contemporary finish.',
  },
  {
    name: 'Port',
    vibe: 'Rich Burgundy | Old World',
    inspiration:
      'A deep, wine-steeped warmth reminiscent of aged mahogany and candlelit dining rooms. Adds distinguished depth and warmth to formal cabinetry.',
  },
  {
    name: 'Cask',
    vibe: 'Bold Luxury | Bourbon Barrel',
    inspiration:
      'A rich espresso tone echoing aged spirits barrels. Brings dramatic depth, high contrast, and formal grandeur to custom millwork.',
  },
  {
    name: 'Reed',
    vibe: 'Earthy Taupe | Mixed-Material',
    inspiration:
      'A muted taupe-brown finish reminiscent of natural linen and dried reeds. Effortlessly unifies mixed-material kitchen layouts.',
  },
  {
    name: 'Shale',
    vibe: 'Architectural Grey-Wood | Urban',
    inspiration:
      'A sophisticated charcoal-brown wash echoing cliffside stone. Perfect for highlighting natural grain patterns with a modern edge.',
  },
  {
    name: 'Graphite',
    vibe: 'Moody Contemporary | Industrial',
    inspiration:
      'A deep charcoal stain that darkens wood while letting organic grain shine through. Ideal for bold architectural accents and statement islands.',
  },
];

function PaintSwatch({
  color,
  isActive,
  onClick,
}: {
  color: PaintColor;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 group focus:outline-none"
    >
      <div
        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer ${
          color.light ? 'border border-[#E0E1E1]' : ''
        } ${isActive ? 'ring-2 ring-[#242019] ring-offset-2' : ''}`}
        style={{ backgroundColor: color.hex }}
      />
      <span
        className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
          isActive ? 'text-[#242019] font-semibold' : 'text-[#242019]'
        }`}
      >
        {color.name}
      </span>
    </button>
  );
}

function StainSwatch({
  color,
  isActive,
  onClick,
}: {
  color: StainColor;
  isActive: boolean;
  onClick: () => void;
}) {
  const nameLower = color.name.toLowerCase();
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 group focus:outline-none"
    >
      <div
        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer overflow-hidden ${
          isActive ? 'ring-2 ring-[#242019] ring-offset-2' : ''
        }`}
      >
        <img
          src={`/${nameLower}_hc-stain.jpg`}
          alt={`${color.name} stain finish`}
          className="w-full h-full object-cover"
        />
      </div>
      <span
        className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
          isActive ? 'text-[#242019] font-semibold' : 'text-[#242019]'
        }`}
      >
        {color.name}
      </span>
    </button>
  );
}

function SwatchDetail({
  name,
  vibe,
  inspiration,
  hex,
  image,
  onClose,
}: {
  name: string;
  vibe: string;
  inspiration: string;
  hex?: string;
  image?: string;
  onClose: () => void;
}) {
  return (
    <div className="mt-8 animate-fadeIn">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E0E1E1] shadow-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Color preview */}
          <div className="sm:w-48 shrink-0">
            {hex ? (
              <div
                className="w-full h-32 sm:h-full min-h-[12rem]"
                style={{ backgroundColor: hex }}
              />
            ) : image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-32 sm:h-full min-h-[12rem] object-cover"
              />
            ) : null}
          </div>

          {/* Text content */}
          <div className="flex-1 p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F7F6F4] flex items-center justify-center text-[#949089] hover:text-[#242019] hover:bg-[#E0E1E1] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif text-2xl text-[#242019] mb-2">{name}</h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F6F4] border border-[#E0E1E1] mb-4">
              <span className="font-sans text-xs tracking-wide text-[#949089] uppercase">
                {vibe}
              </span>
            </div>

            <p className="font-sans text-[#242019]/80 text-base leading-relaxed">
              {inspiration}
            </p>

            {hex && (
              <p className="font-sans text-xs text-[#949089] mt-4 tracking-wider uppercase">
                {hex}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Finishes() {
  const [activePaint, setActivePaint] = useState<string | null>(null);
  const [activeStain, setActiveStain] = useState<string | null>(null);

  const selectedPaint = paintColors.find((c) => c.name === activePaint);
  const selectedStain = stainColors.find((c) => c.name === activeStain);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/featured-images/twotonekitchen5-duncan_photo_0.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-white/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#242019] mb-6">
            Finishes
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#242019]/70 max-w-2xl mx-auto leading-relaxed">
            Twenty-two standard finishes, each developed in-house and
            hand-applied. Select any swatch to explore its character.
          </p>
        </div>
      </section>

      {/* Paint Finishes Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#242019] mb-4 text-center">
            Paint Finishes
          </h2>
          <p className="font-sans text-[#949089] text-center mb-14 max-w-xl mx-auto">
            Eleven paint finishes formulated for density, adhesion, and
            long-term durability. Each coat is hand-applied and cured between
            layers.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center">
            {paintColors.map((color) => (
              <PaintSwatch
                key={color.name}
                color={color}
                isActive={activePaint === color.name}
                onClick={() =>
                  setActivePaint((prev) =>
                    prev === color.name ? null : color.name
                  )
                }
              />
            ))}
          </div>

          {selectedPaint && (
            <SwatchDetail
              name={selectedPaint.name}
              vibe={selectedPaint.vibe}
              inspiration={selectedPaint.inspiration}
              hex={selectedPaint.hex}
              onClose={() => setActivePaint(null)}
            />
          )}
        </div>
      </section>

      {/* Stain Finishes Section */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#242019] mb-4 text-center">
            Stain Finishes
          </h2>
          <p className="font-sans text-[#949089] text-center mb-14 max-w-xl mx-auto">
            Eleven stains calibrated to reveal the grain structure of each
            species. The wood does the talking -- the stain turns up the
            volume.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center">
            {stainColors.map((color) => (
              <StainSwatch
                key={color.name}
                color={color}
                isActive={activeStain === color.name}
                onClick={() =>
                  setActiveStain((prev) =>
                    prev === color.name ? null : color.name
                  )
                }
              />
            ))}
          </div>

          {selectedStain && (
            <SwatchDetail
              name={selectedStain.name}
              vibe={selectedStain.vibe}
              inspiration={selectedStain.inspiration}
              image={`/${selectedStain.name.toLowerCase()}_hc-stain.jpg`}
              onClose={() => setActiveStain(null)}
            />
          )}
        </div>
      </section>

      {/* ColorDrop Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#F7F6F4] to-[#EDE8DF] border border-[#949089]/20 shadow-lg">
            <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#949089] via-[#B8B0A2] to-[#949089]" />

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#242019] flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-[#F7F6F4]" />
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-3">
                ColorDrop
              </h2>
              <p className="font-serif text-lg md:text-xl text-[#949089] italic mb-8">
                Beyond the standard palette.
              </p>

              <div className="w-16 h-px bg-[#949089]/40 mb-8" />

              <p className="font-sans text-[#242019]/80 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                Can't find the perfect shade in our standard palette? With{' '}
                <span className="font-semibold text-[#242019]">ColorDrop</span>,
                you're not limited to what's on the chart. Bring us any color
                sample -- a swatch of fabric, a paint chip, a photograph, even a
                treasured memento -- and our finishing artisans will develop a
                custom-matched finish exclusively for your cabinetry.
              </p>
              <p className="font-sans text-[#949089] text-sm md:text-base leading-relaxed max-w-2xl">
                Every ColorDrop finish is hand-mixed, tested on your chosen wood
                species, and refined until it's a perfect match. Because your
                home should reflect exactly what you envision -- down to the last
                detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

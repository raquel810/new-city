import { Droplets } from 'lucide-react';

const paintColors = [
  { name: 'Polar', hex: '#FEFEFE', light: true },
  { name: 'Arctic', hex: '#F0F0EC', light: true },
  { name: 'Moonlight', hex: '#EDE8DF', light: true },
  { name: 'Stone', hex: '#C4BFAD', light: false },
  { name: 'Slate', hex: '#6B6B6B', light: false },
  { name: 'Sage', hex: '#A3A88F', light: false },
  { name: 'Basil', hex: '#4A5A3F', light: false },
  { name: 'Drift', hex: '#B8B0A2', light: false },
  { name: 'Harbor', hex: '#6D7A84', light: false },
  { name: 'Navy', hex: '#2B3545', light: false },
  { name: 'Nyx', hex: '#2C2C2C', light: false },
];

const stainColors = [
  { name: 'Oat' },
  { name: 'Honey' },
  { name: 'Fawn' },
  { name: 'Rye' },
  { name: 'Reed' },
  { name: 'Port' },
  { name: 'Cask' },
  { name: 'Alcove' },
  { name: 'Pumice' },
  { name: 'Shale' },
  { name: 'Graphite' },
];

function PaintSwatch({ name, hex, light }: { name: string; hex: string; light: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div
        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer ${
          light ? 'border border-[#E0E1E1]' : ''
        }`}
        style={{ backgroundColor: hex }}
      />
      <span className="font-sans text-sm text-[#242019] tracking-wide">{name}</span>
    </div>
  );
}

function StainSwatch({ name }: { name: string }) {
  const nameLower = name.toLowerCase();
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl cursor-pointer overflow-hidden">
        <img
          src={`/${nameLower}_hc-stain.jpg`}
          alt={`${name} stain finish`}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-sans text-sm text-[#242019] tracking-wide">{name}</span>
    </div>
  );
}

export default function Finishes() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#F7F6F4] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#242019] mb-6">
            Finishes
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#949089] max-w-2xl mx-auto leading-relaxed">
            From timeless neutrals to bold statements — find your perfect tone.
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
            Our curated palette of premium paint finishes, each hand-applied for a
            flawless, lasting result.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center">
            {paintColors.map((color) => (
              <PaintSwatch
                key={color.name}
                name={color.name}
                hex={color.hex}
                light={color.light}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stain Finishes Section */}
      <section className="py-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#242019] mb-4 text-center">
            Stain Finishes
          </h2>
          <p className="font-sans text-[#949089] text-center mb-14 max-w-xl mx-auto">
            Rich wood stains that enhance natural grain, from sun-kissed oaks to
            deep espresso tones.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center">
            {stainColors.map((color) => (
              <StainSwatch key={color.name} name={color.name} />
            ))}
          </div>
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
                Your Color. Your Vision.
              </p>

              <div className="w-16 h-px bg-[#949089]/40 mb-8" />

              <p className="font-sans text-[#242019]/80 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                Can't find the perfect shade in our standard palette? With{' '}
                <span className="font-semibold text-[#242019]">ColorDrop</span>,
                you're not limited to what's on the chart. Bring us any color
                sample — a swatch of fabric, a paint chip, a photograph, even a
                treasured memento — and our finishing artisans will develop a
                custom-matched finish exclusively for your cabinetry.
              </p>
              <p className="font-sans text-[#949089] text-sm md:text-base leading-relaxed max-w-2xl">
                Every ColorDrop finish is hand-mixed, tested on your chosen wood
                species, and refined until it's a perfect match. Because your
                home should reflect exactly what you envision — down to the last
                detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

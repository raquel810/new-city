import { TreePine, Leaf } from 'lucide-react';

interface WoodSpeciesData {
  name: string;
  description: string;
  image: string;
  stats: {
    hardness: number;
    stability: number;
    grainCharacter: number;
  };
}

const woodSpecies: WoodSpeciesData[] = [
  {
    name: 'Maple',
    description:
      'Smooth and consistent in appearance, maple features a tight, uniform grain and excellent stability. Its restrained character makes it well suited for contemporary designs and lighter finishes.',
    image: '/maple_woodtype.jpg',
    stats: { hardness: 4, stability: 4, grainCharacter: 2 },
  },
  {
    name: 'Hickory',
    description:
      'One of the hardest domestic hardwoods, hickory displays bold contrast and pronounced grain variation. Natural inconsistencies and movement contribute to its distinctive, expressive character.',
    image: '/hickory_woodtype.jpg',
    stats: { hardness: 5, stability: 2, grainCharacter: 5 },
  },
  {
    name: 'Cherry',
    description:
      'Cherry offers a smooth texture with moderate grain variation and a warm natural tone. Over time, exposure to light deepens its color, developing a rich, classic patina.',
    image: '/cherry_woodtype.jpg',
    stats: { hardness: 3, stability: 3, grainCharacter: 3 },
  },
  {
    name: 'Walnut',
    description:
      'Walnut is prized for its rich natural color and flowing grain patterns. Subtle chatoyancy may be present, creating depth and visual movement as light changes across the surface.',
    image: '/walnut_woodtype.jpg',
    stats: { hardness: 3, stability: 3, grainCharacter: 4 },
  },
  {
    name: 'Alder',
    description:
      'Alder features a fine, even grain that accepts stain evenly and predictably. Its balanced appearance and stability make it a versatile choice across a wide range of styles.',
    image: '/alder_woodtype.jpg',
    stats: { hardness: 2, stability: 4, grainCharacter: 2 },
  },
  {
    name: 'Quarter Sawn Oak',
    description:
      'Oak cut perpendicular to the growth rings, resulting in exceptional dimensional stability and a straight grain pattern. Visible medullary ray fleck may be present, adding texture and visual depth while maintaining long-term performance.',
    image: '/quartersawnoak_woodtype.jpg',
    stats: { hardness: 4, stability: 5, grainCharacter: 4 },
  },
];

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-sans text-[#949089] uppercase tracking-[0.1em] w-28 shrink-0">
        {label}
      </span>
      <div className="flex gap-1.5 flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < value ? 'bg-[#242019]/60' : 'bg-[#242019]/8'
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-[#242019]/50 w-8 text-right tabular-nums">
        {value}/5
      </span>
    </div>
  );
}

export default function WoodSpecies() {
  return (
    <main className="bg-[#F7F6F4]">
      {/* Hero */}
      <section className="bg-[#F7F6F4] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TreePine className="w-6 h-6 text-[#949089]" />
            <span className="text-[#949089] font-sans text-sm uppercase tracking-[0.2em]">
              Materials
            </span>
            <TreePine className="w-6 h-6 text-[#949089]" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#242019] mb-6 leading-tight">
            Wood Species
          </h1>
          <p className="text-lg md:text-xl text-[#949089] font-sans max-w-2xl mx-auto leading-relaxed">
            Six species selected for hardness, grain behavior, and how they accept finish.
          </p>
        </div>
      </section>

      {/* Species Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-20 md:space-y-28">
          {woodSpecies.map((species, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <article
                key={species.name}
                className={`flex flex-col ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 md:gap-14 items-center`}
              >
                {/* Photo */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={species.image}
                      alt={`${species.name} wood grain`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Leaf className="w-4 h-4 text-[#949089]" />
                    <span className="text-[#949089] font-sans text-xs uppercase tracking-[0.15em]">
                      Species {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#242019] mb-5">
                    {species.name}
                  </h2>
                  <p className="font-sans text-[#242019]/75 text-base md:text-lg leading-relaxed mb-8">
                    {species.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 bg-white/60 border border-[#E0E1E1] rounded-lg p-5">
                    <StatBar label="Hardness" value={species.stats.hardness} />
                    <StatBar label="Stability" value={species.stats.stability} />
                    <StatBar label="Grain" value={species.stats.grainCharacter} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-white py-16 md:py-20 border-t border-[#E0E1E1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TreePine className="w-5 h-5 text-[#949089]" />
            <span className="text-[#949089] font-sans text-xs uppercase tracking-[0.2em]">
              Note
            </span>
            <TreePine className="w-5 h-5 text-[#949089]" />
          </div>
          <p className="font-sans text-[#242019]/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Grain patterns shown are representative; natural variation will occur.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {woodSpecies.map((s) => (
              <span
                key={s.name}
                className="px-4 py-2 border border-[#949089]/30 rounded-full text-[#949089] text-sm font-sans"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

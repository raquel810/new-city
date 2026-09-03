import { GlassWater } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface GlassOption {
  name: string;
  description: string;
  image: string;
}

const glassOptions: GlassOption[] = [
  {
    name: 'Glacier',
    description:
      'A textured, icy surface with soft movement and light obscuration. Adds subtle privacy while keeping a modern edge.',
    image: '/glass/glass_glacier.jpg',
  },
  {
    name: 'Granite',
    description:
      'Deep texture with high distortion. Strong visual privacy with a dynamic, light-catching surface.',
    image: '/glass/glass_granite.jpg',
  },
  {
    name: 'Rain',
    description:
      'Vertical streams create a water-like ripple, offering moderate privacy with a refined, directional texture.',
    image: '/glass/glass_rain.jpg',
  },
  {
    name: 'Glue Chip',
    description:
      'An organic, frosted texture resembling frost or fern patterns. High privacy with soft light diffusion.',
    image: '/glass/glass_gluechip.jpg',
  },
  {
    name: 'Frosted Satin',
    description:
      'A smooth, matte finish that softens light and fully obscures detail. Maximum privacy with a modern, understated look.',
    image: '/glass/glass_frostedsatin.jpg',
  },
  {
    name: 'Thin Reeded',
    description:
      'Slim vertical lines for a clean, architectural look. Adds movement and texture while maintaining partial visibility.',
    image: '/glass/glass_thinreeded.jpg',
  },
  {
    name: 'Reeded',
    description:
      'Bold, vertical grooves that create strong texture and moderate obscuration. Well suited for mid-century or contemporary styles.',
    image: '/glass/glass_reeded.jpg',
  },
  {
    name: 'Seedy',
    description:
      'Lightly bubbled glass with an antique-inspired texture. Full visibility with handcrafted character and vintage appeal.',
    image: '/glass/glass_seedy.jpg',
  },
  {
    name: 'Antique',
    description:
      'Lightly distressed with soft, irregular lines. Historic charm and subtle movement without disrupting visibility.',
    image: '/glass/glass_antique.jpg',
  },
  {
    name: 'Water',
    description:
      'A fluid surface pattern with shallow, natural-looking ripples. Enhances light play while maintaining full transparency.',
    image: '/glass/glass_water.jpg',
  },
  {
    name: '1/4" Mirror',
    description:
      'Reflective glass that adds depth, drama, and function. Best for bold accents, bar areas, or anywhere you want visual intrigue.',
    image: '/glass/glass_mirror.jpg',
  },
];

export default function SpecialtyGlass() {
  return (
    <main className="bg-[#F7F6F4]">
      <Helmet>
        <title>Specialty Glass | Harris Cabinetry</title>
        <meta name="description" content="Choose from 11 decorative glass inserts for cabinet doors, including glacier, reeded, rain, frosted satin, seedy, and mirror options." />
        <link rel="canonical" href="https://www.harris-cabinetry.com/specialty-glass" />
      </Helmet>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GlassWater className="w-6 h-6 text-[#949089]" />
            <span className="text-[#949089] font-sans text-sm uppercase tracking-[0.2em]">
              Options
            </span>
            <GlassWater className="w-6 h-6 text-[#949089]" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#242019] mb-6 leading-tight">
            Specialty Glass
          </h1>
          <p className="text-lg md:text-xl text-[#949089] font-sans max-w-2xl mx-auto leading-relaxed">
            Eleven glass options for doors with glass insets. Clear glass is
            standard — these are the upgrades.
          </p>
        </div>
      </section>

      {/* Glass Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {glassOptions.map((glass) => (
            <div
              key={glass.name}
              className="group bg-white rounded-lg overflow-hidden border border-[#E0E1E1] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-[#F7F6F4]">
                <img
                  src={glass.image}
                  alt={`${glass.name} glass`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#242019] mb-2">
                  {glass.name}
                </h3>
                <p className="font-sans text-sm text-[#242019]/70 leading-relaxed">
                  {glass.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-white py-16 border-t border-[#E0E1E1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-sans text-[#242019]/70 text-base md:text-lg leading-relaxed">
            Clear glass is included as the standard option on all glass-panel
            doors. Specialty glass is available as an upgrade for select door
            styles.
          </p>
        </div>
      </section>
    </main>
  );
}

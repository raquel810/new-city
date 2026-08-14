import { TreePine, Leaf, Shield, Sparkles, Paintbrush, Layers } from 'lucide-react';

interface WoodSpeciesData {
  name: string;
  description: string;
  tags: string[];
  gradient: string;
}

const woodSpecies: WoodSpeciesData[] = [
  {
    name: 'Maple',
    description:
      'Fine, uniform grain with a light cream to pale golden tone. The hardest of our domestic hardwoods, Maple takes paint exceptionally well and is our most popular choice for custom cabinetry.',
    tags: ['Hardest Domestic', 'Fine Grain', 'Best for Paint', 'Most Popular'],
    gradient: `
      linear-gradient(82deg, rgba(235,220,195,0.3) 0%, transparent 3%),
      linear-gradient(79deg, rgba(220,205,175,0.2) 8%, transparent 11%),
      linear-gradient(81deg, rgba(235,225,200,0.25) 15%, transparent 17%),
      linear-gradient(80deg, rgba(210,195,165,0.15) 22%, transparent 25%),
      linear-gradient(83deg, rgba(240,230,210,0.2) 30%, transparent 32%),
      linear-gradient(78deg, rgba(225,210,180,0.25) 38%, transparent 41%),
      linear-gradient(81deg, rgba(235,220,195,0.2) 48%, transparent 50%),
      linear-gradient(80deg, rgba(215,200,170,0.15) 55%, transparent 58%),
      linear-gradient(82deg, rgba(240,230,210,0.2) 63%, transparent 65%),
      linear-gradient(79deg, rgba(230,215,185,0.25) 72%, transparent 75%),
      linear-gradient(81deg, rgba(235,225,200,0.2) 82%, transparent 84%),
      linear-gradient(80deg, rgba(220,205,175,0.15) 90%, transparent 93%),
      linear-gradient(to bottom, #F5EDE0, #EDE3D2)
    `,
  },
  {
    name: 'Hickory',
    description:
      'Bold, dramatic grain patterns with color ranging from creamy white to tan and reddish-brown. Extremely hard and durable, Hickory brings rustic character and striking visual interest to any kitchen.',
    tags: ['Extremely Hard', 'Bold Grain', 'Rustic Character', 'Dramatic'],
    gradient: `
      linear-gradient(75deg, rgba(139,90,43,0.4) 0%, transparent 5%),
      linear-gradient(82deg, rgba(180,140,80,0.3) 8%, transparent 14%),
      linear-gradient(68deg, rgba(120,75,35,0.35) 16%, transparent 22%),
      linear-gradient(85deg, rgba(200,165,110,0.25) 25%, transparent 30%),
      linear-gradient(72deg, rgba(145,95,50,0.4) 32%, transparent 40%),
      linear-gradient(79deg, rgba(170,125,65,0.3) 42%, transparent 48%),
      linear-gradient(74deg, rgba(130,80,38,0.35) 50%, transparent 58%),
      linear-gradient(81deg, rgba(190,150,90,0.25) 60%, transparent 66%),
      linear-gradient(76deg, rgba(155,105,55,0.4) 68%, transparent 75%),
      linear-gradient(83deg, rgba(175,130,70,0.3) 78%, transparent 84%),
      linear-gradient(70deg, rgba(140,90,42,0.35) 86%, transparent 93%),
      linear-gradient(to bottom, #D4B896, #B8956A)
    `,
  },
  {
    name: 'Cherry',
    description:
      'Fine, smooth grain with a warm reddish-brown color that deepens beautifully with age and exposure to light. Classic and elegant, Cherry offers moderate hardness and timeless sophistication.',
    tags: ['Moderate Hardness', 'Fine Grain', 'Deepens with Age', 'Elegant'],
    gradient: `
      linear-gradient(80deg, rgba(140,60,40,0.25) 0%, transparent 4%),
      linear-gradient(78deg, rgba(160,75,50,0.2) 9%, transparent 13%),
      linear-gradient(82deg, rgba(130,55,35,0.25) 17%, transparent 20%),
      linear-gradient(79deg, rgba(150,65,45,0.2) 24%, transparent 28%),
      linear-gradient(81deg, rgba(145,60,38,0.25) 32%, transparent 36%),
      linear-gradient(77deg, rgba(165,80,55,0.2) 40%, transparent 44%),
      linear-gradient(83deg, rgba(135,58,36,0.25) 48%, transparent 52%),
      linear-gradient(80deg, rgba(155,70,48,0.2) 56%, transparent 60%),
      linear-gradient(78deg, rgba(140,62,40,0.25) 64%, transparent 68%),
      linear-gradient(82deg, rgba(160,75,50,0.2) 72%, transparent 76%),
      linear-gradient(79deg, rgba(130,55,35,0.25) 80%, transparent 84%),
      linear-gradient(81deg, rgba(150,68,45,0.2) 88%, transparent 92%),
      linear-gradient(to bottom, #A0533C, #8B4332)
    `,
  },
  {
    name: 'Walnut',
    description:
      'Rich dark brown with purple undertones and a straight, open grain. Sophisticated and luxurious, Walnut is prized for its depth of color and naturally stunning appearance without stain.',
    tags: ['Medium Hardness', 'Open Grain', 'Sophisticated', 'Luxurious'],
    gradient: `
      linear-gradient(80deg, rgba(60,40,30,0.3) 0%, transparent 4%),
      linear-gradient(78deg, rgba(75,50,38,0.25) 7%, transparent 12%),
      linear-gradient(82deg, rgba(55,35,25,0.3) 15%, transparent 19%),
      linear-gradient(79deg, rgba(70,45,33,0.25) 23%, transparent 28%),
      linear-gradient(81deg, rgba(65,42,30,0.3) 31%, transparent 36%),
      linear-gradient(77deg, rgba(80,55,40,0.25) 39%, transparent 44%),
      linear-gradient(83deg, rgba(58,38,28,0.3) 47%, transparent 52%),
      linear-gradient(80deg, rgba(72,48,35,0.25) 55%, transparent 60%),
      linear-gradient(78deg, rgba(62,40,29,0.3) 63%, transparent 68%),
      linear-gradient(82deg, rgba(78,52,38,0.25) 71%, transparent 76%),
      linear-gradient(79deg, rgba(56,36,26,0.3) 79%, transparent 84%),
      linear-gradient(81deg, rgba(68,44,32,0.25) 87%, transparent 92%),
      linear-gradient(to bottom, #5C3D2E, #4A3125)
    `,
  },
  {
    name: 'Alder',
    description:
      'Fine, straight grain similar to cherry with a light brown body and subtle reddish tint. Softer than maple, Alder takes stain exceptionally well and offers remarkable versatility for any finish.',
    tags: ['Softer Wood', 'Fine Grain', 'Takes Stain Well', 'Versatile'],
    gradient: `
      linear-gradient(80deg, rgba(175,130,90,0.2) 0%, transparent 3%),
      linear-gradient(79deg, rgba(165,120,80,0.18) 8%, transparent 11%),
      linear-gradient(81deg, rgba(180,135,95,0.2) 15%, transparent 18%),
      linear-gradient(78deg, rgba(170,125,85,0.18) 22%, transparent 25%),
      linear-gradient(82deg, rgba(175,130,88,0.2) 30%, transparent 33%),
      linear-gradient(80deg, rgba(160,118,78,0.18) 38%, transparent 41%),
      linear-gradient(79deg, rgba(180,135,92,0.2) 46%, transparent 49%),
      linear-gradient(81deg, rgba(168,122,82,0.18) 54%, transparent 57%),
      linear-gradient(80deg, rgba(175,128,88,0.2) 62%, transparent 65%),
      linear-gradient(78deg, rgba(172,126,85,0.18) 70%, transparent 73%),
      linear-gradient(82deg, rgba(178,132,90,0.2) 78%, transparent 81%),
      linear-gradient(79deg, rgba(165,120,80,0.18) 86%, transparent 89%),
      linear-gradient(to bottom, #C4A07A, #B8946E)
    `,
  },
  {
    name: 'Quarter Sawn White Oak',
    description:
      'Distinctive ray fleck pattern created by the quarter sawing method, revealing medullary rays in light to medium brown. Extremely durable and stable with a linear grain and timeless appeal.',
    tags: ['Extremely Durable', 'Ray Fleck Pattern', 'Very Stable', 'Linear Grain'],
    gradient: `
      linear-gradient(85deg, rgba(160,130,80,0.3) 0%, transparent 2%),
      linear-gradient(5deg, rgba(180,150,100,0.4) 5%, transparent 8%),
      linear-gradient(85deg, rgba(150,120,70,0.25) 10%, transparent 13%),
      linear-gradient(-5deg, rgba(190,160,110,0.35) 18%, transparent 22%),
      linear-gradient(86deg, rgba(155,125,75,0.3) 25%, transparent 27%),
      linear-gradient(8deg, rgba(185,155,105,0.4) 32%, transparent 36%),
      linear-gradient(84deg, rgba(160,130,78,0.25) 40%, transparent 42%),
      linear-gradient(-3deg, rgba(175,145,95,0.35) 48%, transparent 52%),
      linear-gradient(85deg, rgba(152,122,72,0.3) 55%, transparent 58%),
      linear-gradient(6deg, rgba(188,158,108,0.4) 63%, transparent 67%),
      linear-gradient(83deg, rgba(158,128,76,0.25) 72%, transparent 75%),
      linear-gradient(-6deg, rgba(180,150,100,0.35) 80%, transparent 84%),
      linear-gradient(85deg, rgba(155,125,74,0.3) 88%, transparent 91%),
      linear-gradient(to bottom, #B89B6A, #A68D5B)
    `,
  },
  {
    name: 'Rift Sawn White Oak',
    description:
      'Tight, linear grain without ray flecks, producing a clean modern look. Very stable with minimal seasonal movement, Rift Sawn White Oak is the premier choice for contemporary design.',
    tags: ['Very Stable', 'Tight Grain', 'Clean & Modern', 'Minimal Movement'],
    gradient: `
      linear-gradient(88deg, rgba(160,135,90,0.2) 0%, transparent 1.5%),
      linear-gradient(89deg, rgba(150,125,80,0.18) 4%, transparent 5.5%),
      linear-gradient(88deg, rgba(165,138,92,0.2) 8%, transparent 9.5%),
      linear-gradient(89deg, rgba(155,128,82,0.18) 12%, transparent 13.5%),
      linear-gradient(88deg, rgba(160,132,88,0.2) 16%, transparent 17.5%),
      linear-gradient(89deg, rgba(148,122,78,0.18) 20%, transparent 21.5%),
      linear-gradient(88deg, rgba(162,136,90,0.2) 24%, transparent 25.5%),
      linear-gradient(89deg, rgba(152,126,80,0.18) 28%, transparent 29.5%),
      linear-gradient(88deg, rgba(158,130,86,0.2) 32%, transparent 33.5%),
      linear-gradient(89deg, rgba(163,137,91,0.18) 36%, transparent 37.5%),
      linear-gradient(88deg, rgba(155,128,84,0.2) 40%, transparent 41.5%),
      linear-gradient(89deg, rgba(160,133,88,0.18) 44%, transparent 45.5%),
      linear-gradient(88deg, rgba(150,124,80,0.2) 48%, transparent 49.5%),
      linear-gradient(89deg, rgba(165,138,92,0.18) 52%, transparent 53.5%),
      linear-gradient(88deg, rgba(157,130,86,0.2) 56%, transparent 57.5%),
      linear-gradient(89deg, rgba(152,126,82,0.18) 60%, transparent 61.5%),
      linear-gradient(to bottom, #BDA272, #A99063)
    `,
  },
];

function WoodGrainSwatch({ gradient }: { gradient: string }) {
  return (
    <div className="w-full h-full min-h-[280px] md:min-h-[360px] rounded-lg overflow-hidden relative">
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export default function WoodSpecies() {
  return (
    <main className="bg-[#F7F6F4]">
      {/* Hero Section */}
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
            Seven species selected for hardness, grain behavior, and how they accept finish.
          </p>
        </div>
      </section>

      {/* Wood Species Cards */}
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
                {/* Wood Grain Visual */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <WoodGrainSwatch gradient={species.gradient} />
                  </div>
                </div>

                {/* Text Content */}
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
                  <p className="font-sans text-[#242019]/75 text-base md:text-lg leading-relaxed mb-6">
                    {species.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {species.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#242019]/5 border border-[#242019]/10 rounded-full text-xs font-sans text-[#242019]/70 tracking-wide"
                      >
                        {tag === 'Most Popular' && <Sparkles className="w-3 h-3" />}
                        {tag === 'Best for Paint' && <Paintbrush className="w-3 h-3" />}
                        {(tag === 'Very Stable' || tag === 'Extremely Durable') && (
                          <Shield className="w-3 h-3" />
                        )}
                        {(tag === 'Ray Fleck Pattern' || tag === 'Linear Grain' || tag === 'Tight Grain') && (
                          <Layers className="w-3 h-3" />
                        )}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Comparison Note */}
      <section className="bg-white py-16 md:py-20 border-t border-[#E0E1E1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TreePine className="w-5 h-5 text-[#949089]" />
            <span className="text-[#949089] font-sans text-xs uppercase tracking-[0.2em]">
              Availability Note
            </span>
            <TreePine className="w-5 h-5 text-[#949089]" />
          </div>
          <p className="font-sans text-[#242019]/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            All seven wood species are available across all door styles with the following
            exceptions:{' '}
            <span className="text-[#242019] font-medium">Bryant</span> is available in
            Maple, Cherry, Alder, and Paint-Grade Maple (4 species).{' '}
            <span className="text-[#242019] font-medium">Iverson</span> and{' '}
            <span className="text-[#242019] font-medium">Erving</span> are available in
            select species only. See the Door Styles page for full availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Maple', 'Hickory', 'Cherry', 'Walnut', 'Alder', 'QS White Oak', 'Rift White Oak'].map(
              (name) => (
                <span
                  key={name}
                  className="px-4 py-2 border border-[#949089]/30 rounded-full text-[#949089] text-sm font-sans"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

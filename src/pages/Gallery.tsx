import { Link } from 'react-router-dom';
import { Camera, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  doorStyles: string[];
  coverImage: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 'glacier-oak-estate',
    title: 'The Glacier Oak Estate',
    subtitle: "Arctic painted perimeters with custom-stained White Oak island and floating shelves",
    doorStyles: ['Duncan'],
    coverImage: '/projects/nguyen/nguyen_post-00.jpg',
    href: '/gallery/glacier-oak-estate',
  },
  {
    id: 'alabaster-hearth',
    title: 'The Alabaster Hearth',
    subtitle: "Bright airy perimeter balanced by a rich stained wood island and custom range hood",
    doorStyles: ['Jordan'],
    coverImage: '/projects/carsten/carsten-post_photo_000-1.jpg',
    href: '/gallery/alabaster-hearth',
  },
  {
    id: 'deep-sea-reserve',
    title: 'The Deep Sea Reserve',
    subtitle: "Bold 'Deep Sea Dive' painted perimeter with natural hickory island and copper accents",
    doorStyles: ['Duncan'],
    coverImage: '/projects/schneide-kitchen/schneide-post_photo_001-1.jpg',
    href: '/gallery/deep-sea-reserve',
  },
  {
    id: 'refined-slate-sanctuary',
    title: 'The Refined Slate Sanctuary',
    subtitle: 'Spa-like master bathroom with natural hickory cabinetry and copper accents',
    doorStyles: ['Duncan'],
    coverImage: '/projects/schneide-bath/schneide-bath-post_photo_001-1.jpg',
    href: '/gallery/refined-slate-sanctuary',
  },
  {
    id: 'lily-pad-utility-oasis',
    title: 'The Lily Pad Utility Oasis',
    subtitle: "Custom 'Lily Pad' green cabinetry with hickory accents in a multi-functional mudroom",
    doorStyles: ['Duncan'],
    coverImage: '/projects/schneide-laundry/schneide-laundry-post_photo_001-1.jpg',
    href: '/gallery/lily-pad-utility-oasis',
  },
  {
    id: 'cask-reserve',
    title: 'The Cask Reserve',
    subtitle: "Rich 'Cask' stained galley kitchen with warm brass hardware and floor-to-ceiling wardrobe",
    doorStyles: ['Jordan'],
    coverImage: '/projects/pennington/pennington-post_photo_001-1.jpg',
    href: '/gallery/cask-reserve',
  },
  {
    id: 'illuminated-fawn-estate',
    title: 'The Illuminated Fawn Estate',
    subtitle: "Vanilla painted perimeter with a richly stained Fawn island and champagne bronze appliances",
    doorStyles: ['Duncan', 'Jordan'],
    coverImage: '/projects/gaynor/gaynor-post_photo_001-1.jpg',
    href: '/gallery/illuminated-fawn-estate',
  },
  {
    id: 'sesame-rye-estate',
    title: 'The Sesame & Rye Estate',
    subtitle: "White Sesame perimeter with Rye stained island, dual-quartz waterfall, and custom wood hood",
    doorStyles: ['Iverson', 'Erving'],
    coverImage: '/projects/sorens/sorens-post_photo_001-1.jpg',
    href: '/gallery/sesame-rye-estate',
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#F7F6F4]">
      {/* Hero Banner */}
      <section className="relative bg-[#F7F6F4] pt-32 pb-20">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="h-8 w-8 text-[#949089]" />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#242019] md:text-5xl lg:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-sans text-[#949089]">
            Installed work. Not renders, not samples. Real rooms in daily use.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.href}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#949089] focus:ring-offset-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#242019]/0 transition-all duration-300 group-hover:bg-[#242019]/30 flex items-center justify-center">
                  <span className="rounded-full bg-[#F7F6F4]/90 px-4 py-2 font-sans text-sm font-medium text-[#242019] opacity-0 transition-all duration-300 scale-90 group-hover:opacity-100 group-hover:scale-100">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-[#242019]">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-[#949089]">
                  {project.subtitle}
                </p>
                {project.doorStyles.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.doorStyles.map((style) => (
                      <span
                        key={style}
                        className="inline-block px-2 py-0.5 text-xs font-sans font-medium rounded-full bg-[#F7F6F4] text-[#242019]/80 border border-[#E0E1E1]"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Placeholder */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E0E1E1] bg-white">
            <span className="font-sans text-sm text-[#949089]">
              More projects coming soon
            </span>
            <ArrowRight className="w-4 h-4 text-[#949089]" />
          </div>
        </div>
      </section>
    </div>
  );
}

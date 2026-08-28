import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const BEFORE_AFTER_PAIRS = [
  { before: '/projects/sorens/sorens-post_photo_006-6.jpg', after: '/projects/sorens/sorens-post_photo_007-7.jpg', caption: 'Kitchen overview' },
  { before: '/projects/sorens/sorens-post_photo_009-9.jpg', after: '/projects/sorens/sorens-post_photo_010-10.jpg', caption: 'Island and perimeter' },
  { before: '/projects/sorens/sorens-post_photo_012-12.jpg', after: '/projects/sorens/sorens-post_photo_013-13.jpg', caption: 'Range wall' },
  { before: '/projects/sorens/sorens-post_photo_041-41.jpg', after: '/projects/sorens/sorens-post_photo_042-42.jpg', caption: 'Sink wall' },
  { before: '/projects/sorens/sorens-post_photo_043-43.jpg', after: '/projects/sorens/sorens-post_photo_044-44.jpg', caption: 'Full view' },
];

const ALL_IMAGES = Array.from(
  { length: 51 },
  (_, i) => `/projects/sorens/sorens-post_photo_${String(i + 1).padStart(3, '0')}-${i + 1}.jpg`
);

const BEFORE_INDICES = new Set([5, 8, 11, 40, 42]);

const PROJECT_DETAILS = {
  primary: [
    { label: 'Door Style', value: 'Iverson (Perimeter) and Erving (Island)', link: '/door-styles' },
    { label: 'Finish (Perimeter)', value: "Sherwin Williams 'White Sesame'", link: '/finishes' },
    { label: 'Finish (Island & Hood)', value: "'Rye' Stain", link: '/finishes' },
    { label: 'Countertops (Perimeter)', value: "Silestone 'Calacatta Gold' Quartz (Full-Height Backsplash)", link: null },
  ],
  secondary: [
    { label: 'Countertops (Island)', value: "Cambria 'Charlestown' Quartz with Dual-Waterfall Edge" },
    { label: 'Key Features', value: "Integrated hidden outlets, custom minimalist wood range hood, and a bold dual-quartz contrasting design" },
  ],
};

export default function ProjectSorens() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = ALL_IMAGES.filter((_, i) => !BEFORE_INDICES.has(i));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ALL_IMAGES[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16 max-w-7xl mx-auto">
          <Link
            to="/gallery"
            className="absolute top-32 left-6 md:left-12 inline-flex items-center gap-2 text-white/80 hover:text-white font-sans text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3">
            The Sesame & Rye Estate
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-3xl">
            White Sesame painted perimeter with a warm Rye stained island, dual-quartz waterfall, and custom wood hood
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="font-sans text-[#242019]/80 text-lg leading-relaxed">
            This expansive, light-filled L-shaped kitchen achieves a striking two-tone balance by
            pairing a soft 'White Sesame' painted perimeter with a warm, organically textured 'Rye'
            stained island and matching custom range hood. The perimeter features the Iverson door
            style, offering a refined, thin rail shaker profile, while the island utilizes the
            minimalist Erving flat slab to let the natural wood grain take center stage. Grounded by
            a dramatic waterfall island in dark 'Charlestown' quartz and elevated by a seamless
            full-height 'Calacatta Gold' quartz backsplash, this space perfectly merges clean modern
            lines with traditional warmth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl md:text-3xl text-[#242019] mb-8">
              Cabinetry Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROJECT_DETAILS.primary.map((detail) => (
                <div key={detail.label} className="bg-white rounded-xl p-6 shadow-sm">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#949089] block mb-2">
                    {detail.label}
                  </span>
                  {detail.link ? (
                    <Link
                      to={detail.link}
                      className="font-serif text-lg text-[#242019] hover:text-[#6B5E54] transition-colors inline-flex items-center gap-2 group"
                    >
                      {detail.value}
                      <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <span className="font-serif text-lg text-[#242019]">{detail.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#242019] mb-8">
              Project Specifications
            </h2>
            <div className="space-y-4">
              {PROJECT_DETAILS.secondary.map((detail) => (
                <div key={detail.label} className="border-b border-[#E0E1E1] pb-4 last:border-0">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#949089] block mb-1">
                    {detail.label}
                  </span>
                  <span className="font-sans text-sm text-[#242019]">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-[#242019] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-10">
            Before & After
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <div key={pair.caption}>
                <BeforeAfterSlider
                  beforeImage={pair.before}
                  afterImage={pair.after}
                />
                <p className="font-sans text-sm text-white/60 mt-3 text-center">{pair.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-[#E0E1E1]">
        <h2 className="font-serif text-2xl md:text-3xl text-[#242019] mb-10">
          Full Gallery
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {galleryImages.map((src, index) => (
            <button
              key={src}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-lg group break-inside-avoid mb-3 md:mb-4"
            >
              <img
                src={src}
                alt={`The Sesame & Rye Estate photo ${index + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E0E1E1] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-sans text-xs uppercase tracking-wider text-[#949089] block mb-1">
              Custom Cabinetry
            </span>
            <span className="font-serif text-lg text-[#242019]">Harris Cabinetry</span>
          </div>
          <div className="text-right">
            <span className="font-sans text-xs uppercase tracking-wider text-[#949089] block mb-1">
              Remodeling
            </span>
            <a
              href="https://www.cabinettreestudio.com/before-after/warm-elegance-modern-functionality-hlwdx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#6B5E54] hover:text-[#242019] transition-colors inline-flex items-center gap-1.5"
            >
              Cabinet Tree Studio
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={galleryImages[lightboxIndex]}
            alt={`The Sesame & Rye Estate photo ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-sans text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

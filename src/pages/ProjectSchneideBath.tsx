import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ALL_IMAGES = Array.from(
  { length: 26 },
  (_, i) => `/projects/schneide-bath/schneide-bath-post_photo_${String(i + 1).padStart(3, '0')}-${i + 1}.jpg`
);

const PROJECT_DETAILS = {
  primary: [
    { label: 'Door Style', value: 'Duncan', link: '/door-styles' },
    { label: 'Wood Species & Finish', value: 'Natural Hickory with Custom Stain', link: '/wood-species' },
    { label: 'Countertops', value: "Vicostone 'Pure White' Quartz (Honed Finish)", link: null },
    { label: 'Hardware', value: "'Celeste' Square Bar Pulls in Copper", link: null },
  ],
  secondary: [
    { label: 'Key Features', value: 'Curbless walk-in shower with integrated bench, custom mosaic shower niche, deep freestanding soaking tub, and a dedicated vanity makeup area' },
  ],
};

export default function ProjectSchneideBath() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % ALL_IMAGES.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
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
            The Refined Slate Sanctuary
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-3xl">
            Spa-like master bathroom with natural hickory cabinetry and copper accents
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="font-sans text-[#242019]/80 text-lg leading-relaxed">
            Crafted for daily luxury, this spa-like master bathroom pairs the organic warmth of
            custom natural hickory cabinetry with striking slate-toned tile. Showcasing the Duncan
            door style, the precise 45-degree chamfered interior edges add a clean, transitional
            depth that beautifully complements the glowing copper hardware and plumbing fixtures.
            Every detail is designed for serenity and function, from the seamless curbless shower
            and custom bench to the deep freestanding soaking tub and dedicated makeup vanity.
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

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-[#E0E1E1]">
        <h2 className="font-serif text-2xl md:text-3xl text-[#242019] mb-10">
          Full Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {ALL_IMAGES.map((src, index) => (
            <button
              key={src}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={src}
                alt={`The Refined Slate Sanctuary photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              href="https://www.cabinettreestudio.com"
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
            src={ALL_IMAGES[lightboxIndex]}
            alt={`The Refined Slate Sanctuary photo ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-sans text-sm">
            {lightboxIndex + 1} / {ALL_IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
}

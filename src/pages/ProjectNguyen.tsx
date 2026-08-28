import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const BEFORE_AFTER_PAIRS = [
  { before: '/projects/nguyen/nguyen_post-6.jpg', after: '/projects/nguyen/nguyen_post-7.jpg', caption: 'Kitchen overview' },
  { before: '/projects/nguyen/nguyen_post-19.jpg', after: '/projects/nguyen/nguyen_post-20.jpg', caption: 'Island and perimeter' },
  { before: '/projects/nguyen/nguyen_post-30.jpg', after: '/projects/nguyen/nguyen_post-31.jpg', caption: 'Sink wall' },
  { before: '/projects/nguyen/nguyen_post-34.jpg', after: '/projects/nguyen/nguyen_post-35.jpg', caption: 'Range wall' },
  { before: '/projects/nguyen/nguyen_post-42.jpg', after: '/projects/nguyen/nguyen_post-43.jpg', caption: 'Full view' },
];

const ALL_IMAGES = [
  '/projects/nguyen/nguyen_post-00.jpg',
  ...Array.from({ length: 47 }, (_, i) => `/projects/nguyen/nguyen_post-${i + 1}.jpg`),
];

const BEFORE_IMAGES = new Set([6, 19, 30, 34, 42]);

const PROJECT_DETAILS = {
  primary: [
    { label: 'Door Style', value: 'Duncan', link: '/door-styles' },
    { label: 'Finish (Perimeter)', value: "'Arctic' Paint", link: '/finishes' },
    { label: 'Wood Species & Finish (Island & Shelves)', value: 'White Oak with Custom Stain Match', link: '/finishes' },
    { label: 'Specialty Glass', value: "'Glacier' Glass Upper Cabinets", link: '/specialty-glass' },
  ],
  secondary: [
    { label: 'Countertops & Backsplash', value: "MSI 'Taj Mahal' Quartz (Full-Height Backsplash)" },
    { label: 'Hardware', value: "Top Knobs 'Ascendra' Pulls (TK704) in Honey Bronze" },
    { label: 'Appliances', value: 'Premium Wolf Suite' },
    { label: 'Sink', value: 'Kraus PRO 32" (KHU100-32)' },
    { label: 'Key Features', value: 'Integrated lift-up appliance garage, specialty glass upper cabinets, custom stain-matched floating shelves' },
  ],
};

export default function ProjectNguyen() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = ALL_IMAGES.filter((_, i) => !BEFORE_IMAGES.has(i));

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
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/projects/nguyen/nguyen_post-00.jpg)' }}
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
            The Glacier Oak Estate
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-3xl">
            This expansive, light-filled kitchen pairs crisp 'Arctic' painted perimeters with the
            organic warmth of a custom-stained White Oak island and floating shelves.
          </p>
        </div>
      </section>

      {/* Project Description */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="font-sans text-[#242019]/80 text-lg leading-relaxed">
            Showcasing the Duncan door style, the distinct 45-degree chamfered interior edges
            catch the light, framing each panel with a sharp, transitional elegance. Elevated
            by a seamless full-height Taj Mahal quartz backsplash and warm honey bronze
            hardware, the design beautifully balances open specialty glass displays with
            clever, concealed countertop appliance storage.
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Primary Details - Harris Products */}
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

          {/* Secondary Details */}
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

      {/* Before & After Section */}
      <section className="bg-[#242019] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">
            Before & After
          </h2>
          <p className="font-sans text-[#949089] mb-10 text-lg">
            Drag the slider to reveal the transformation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <div key={pair.caption}>
                <BeforeAfterSlider
                  beforeImage={pair.before}
                  afterImage={pair.after}
                />
                <p className="font-sans text-sm text-[#949089] mt-3 text-center">
                  {pair.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
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
                alt={`The Glacier Oak Estate photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* Credits */}
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
              href="https://www.cabinettreestudio.com/before-after/natural-warmth-timeless-craftsmanship-gp56b"
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

      {/* Lightbox */}
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
            alt={`The Glacier Oak Estate photo ${lightboxIndex + 1}`}
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

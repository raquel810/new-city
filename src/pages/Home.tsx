import { Link } from 'react-router-dom';
import { DoorOpen, Palette, TreePine, ArrowRight, ClipboardList, ExternalLink } from 'lucide-react';

const FEATURED_WORK = [
  {
    src: '/featured-images/twotonekitchen2-bryant_photo_0.jpg',
    alt: 'Two-tone kitchen featuring Bryant door style',
    doorStyle: 'Bryant',
    orientation: 'landscape' as const,
  },
  {
    src: '/featured-images/bathroom-duncan_photo_0.jpg',
    alt: 'Custom bathroom vanity featuring Duncan door style',
    doorStyle: 'Duncan',
    orientation: 'portrait' as const,
  },
  {
    src: '/featured-images/kitchen3-jordan_photo_0.jpg',
    alt: 'Kitchen with Jordan door style cabinetry',
    doorStyle: 'Jordan',
    orientation: 'landscape' as const,
  },
  {
    src: '/featured-images/twotonekitchen4-iversonerving_photo_3.jpg',
    alt: 'Two-tone kitchen with Iverson and Erving door styles',
    doorStyle: 'Iverson & Erving',
    orientation: 'landscape' as const,
  },
  {
    src: '/featured-images/twotonekitchen3-russell_photo_0.jpg',
    alt: 'Kitchen cabinetry featuring Russell slab door style',
    doorStyle: 'Russell',
    orientation: 'portrait' as const,
  },
  {
    src: '/featured-images/twotonekitchen5-duncan_photo_2.jpg',
    alt: 'Two-tone kitchen featuring Duncan door style',
    doorStyle: 'Duncan',
    orientation: 'landscape' as const,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/featured-images/shop_photo_0.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-glow">
          <h1 className="font-serif text-5xl md:text-7xl text-[#242019] mb-6 leading-tight">
            Cabinetry Built to Last
          </h1>
          <p className="text-lg md:text-xl text-[#242019]/70 mb-10 max-w-2xl mx-auto font-sans">
            Every cabinet we build is held to 1/16" tolerances. Every project is
            shaped by years of remodeling experience. The result is cabinetry
            that fits the room, the workflow, and the life inside it.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
            style={{ textShadow: 'none' }}
          >
            Begin a Conversation
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#242019]/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#242019]/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/featured-images/twotonekitchen-duncan_photo_1.jpg"
              alt="Harris Cabinetry custom two-tone kitchen"
              className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="font-sans">
            <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-6">
              How We Build
            </h2>
            <div className="w-16 h-1 bg-[#949089] mb-8" />
            <p className="text-[#242019]/80 text-lg leading-relaxed mb-6">
              We are a family-owned shop in Plainfield, Illinois. Every door, drawer
              box, and face frame is built in our facility to 1/16" tolerances. Joints
              are cut clean, panels are square, and finishes are hand-applied with the
              patience the material demands.
            </p>
            <p className="text-[#242019]/80 text-lg leading-relaxed mb-8">
              Our team also brings years of hands-on remodeling experience. We
              understand plumbing offsets, appliance clearances, and how a family
              actually moves through a kitchen. That means cabinetry designed for
              the real conditions of your space, not just the look of it.
            </p>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center gap-2 group transition-all duration-300"
            >
              Our Approach
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-4">
              Intentional Choices
            </h2>
            <p className="font-sans text-[#949089] text-lg max-w-2xl mx-auto">
              Thirteen door profiles. Twenty-two finishes. Six hardwood species.
              Each one selected for a reason.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Door Styles */}
            <Link
              to="/door-styles"
              className="group p-8 rounded-lg border border-[#E0E1E1] hover:border-[#949089] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F7F6F4] flex items-center justify-center group-hover:bg-[#949089]/10 transition-colors duration-300">
                <DoorOpen className="w-8 h-8 text-[#949089] group-hover:text-[#242019] transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-[#242019] mb-3">13 Door Styles</h3>
              <p className="font-sans text-[#949089] leading-relaxed mb-4">
                Raised panels, recessed flats, slim shakers, clean slabs. Each profile
                is defined by its edge geometry and proportions.
              </p>
              <span className="inline-flex items-center gap-1 text-[#242019] font-sans font-medium group-hover:gap-2 transition-all duration-300">
                Explore Styles <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Finishes */}
            <Link
              to="/finishes"
              className="group p-8 rounded-lg border border-[#E0E1E1] hover:border-[#949089] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F7F6F4] flex items-center justify-center group-hover:bg-[#949089]/10 transition-colors duration-300">
                <Palette className="w-8 h-8 text-[#949089] group-hover:text-[#242019] transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-[#242019] mb-3">
                22 Standard Finishes
              </h3>
              <p className="font-sans text-[#949089] leading-relaxed mb-3">
                Eleven stains developed to reveal grain character. Eleven paints
                formulated for density and durability. All hand-applied.
              </p>
              <p className="font-sans text-xs text-[#949089]/80 italic mb-4">
                Plus custom color matching through ColorDrop
              </p>
              <span className="inline-flex items-center gap-1 text-[#242019] font-sans font-medium group-hover:gap-2 transition-all duration-300">
                View Finishes <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Wood Species */}
            <Link
              to="/wood-species"
              className="group p-8 rounded-lg border border-[#E0E1E1] hover:border-[#949089] hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F7F6F4] flex items-center justify-center group-hover:bg-[#949089]/10 transition-colors duration-300">
                <TreePine className="w-8 h-8 text-[#949089] group-hover:text-[#242019] transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-[#242019] mb-3">7 Wood Species</h3>
              <p className="font-sans text-[#949089] leading-relaxed mb-4">
                Maple, hickory, cherry, walnut, alder, and two cuts of white oak.
                Selected for hardness, grain behavior, and how they take finish.
              </p>
              <span className="inline-flex items-center gap-1 text-[#242019] font-sans font-medium group-hover:gap-2 transition-all duration-300">
                Discover Woods <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quiz Teaser */}
      <section className="py-16 md:py-20 bg-[#F7F6F4]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <ClipboardList className="w-8 h-8 md:w-10 md:h-10 text-[#949089]" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="font-serif text-2xl md:text-3xl text-[#242019] mb-2">
              Not sure where to start?
            </h2>
            <p className="font-sans text-[#949089] text-base md:text-lg max-w-xl">
              Take our 60-second project quiz. We will use your answers to shape a
              personalized starting point for your cabinetry project.
            </p>
          </div>
          <Link
            to="/consultation"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 whitespace-nowrap transition-transform duration-300 hover:scale-105 flex-shrink-0"
            style={{ textShadow: 'none' }}
          >
            Take the Quiz
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[#949089] uppercase tracking-widest text-sm mb-4">
              Installed Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-4">
              Recent Projects
            </h2>
            <p className="font-sans text-[#949089] text-lg max-w-2xl mx-auto">
              Real kitchens, bathrooms, and living spaces. Built, delivered, and in use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {FEATURED_WORK.map((item, i) => {
              const spanClasses =
                item.orientation === 'portrait'
                  ? 'row-span-2'
                  : 'col-span-2';

              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-lg ${spanClasses}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242019]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link
                      to="/door-styles"
                      className="inline-flex items-center gap-1.5 font-sans text-sm text-white/90 hover:text-white transition-colors"
                    >
                      <span className="border-b border-white/40 hover:border-white/80 transition-colors">
                        {item.doorStyle}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="btn-outline inline-flex items-center gap-2 group transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Teaser Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/featured-images/laundry-duncan_photo_0.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-glow">
          <p className="font-sans text-[#242019] uppercase tracking-widest text-sm mb-4">
            Door Configurator
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#242019] mb-6">The Studio</h2>
          <p className="font-sans text-[#242019]/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Study the details before you commit. Pair edge profiles with panel styles,
            choose your species, and see how different finishes change the character
            of the wood.
          </p>
          <Link
            to="/studio"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
            style={{ textShadow: 'none' }}
          >
            Enter The Studio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Frameless Line Section */}
      <section className="relative bg-[#1B2B3A] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/hinge assets/hinge-white.png"
                alt="Hinge Cabinets"
                className="h-7 w-auto mb-6 opacity-80"
                loading="lazy"
              />
              <p className="font-sans text-white/50 uppercase tracking-[0.2em] text-xs mb-4">
                A Different Approach
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                The Frameless Line
              </h2>
              <div className="w-16 h-px bg-white/30 mb-8" />
              <p className="font-sans text-white/70 text-lg leading-relaxed mb-6">
                Clean geometry. Full-overlay doors. European-style construction
                engineered for modern spaces that demand precision without ornament.
              </p>
              <p className="font-sans text-white/50 text-base leading-relaxed mb-10">
                Same shop. Same tolerances. A completely different aesthetic.
              </p>
              <a
                href="https://hingecabinets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm tracking-wide uppercase border border-white/40 text-white px-6 py-3 rounded-sm hover:bg-white hover:text-[#1B2B3A] transition-all duration-300 group"
              >
                Explore Hinge Cabinets
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <img
                  src="/hinge assets/erving_hc-project4-2.jpg"
                  alt="Frameless cabinetry project by Hinge Cabinets"
                  className="w-full rounded-sm object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 pt-8">
                <img
                  src="/hinge assets/morawski-hingeselect_photo_3.jpg"
                  alt="Modern frameless kitchen cabinetry"
                  className="w-full rounded-sm object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F7F6F4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-6">
            The Best Projects Start with a Conversation
          </h2>
          <p className="font-sans text-[#949089] text-lg mb-10 max-w-2xl mx-auto">
            Tell us about the space, the constraints, and what matters most to you.
            We will figure out the rest together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-block text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
            >
              Start a Conversation
            </Link>
            <Link
              to="/door-styles"
              className="btn-outline inline-flex items-center justify-center gap-2 text-lg px-8 py-4 transition-all duration-300"
            >
              View the Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

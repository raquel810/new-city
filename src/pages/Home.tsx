import { Link } from 'react-router-dom';
import { DoorOpen, Palette, TreePine, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/projects/nguyen/nguyen_post-00.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-[#242019] mb-6 leading-tight">
            Crafted Custom Cabinetry
          </h1>
          <p className="text-lg md:text-xl text-[#242019]/70 mb-10 max-w-2xl mx-auto font-sans">
            Where precision woodworking meets timeless artistry — bespoke cabinetry
            designed and built to elevate every room in your home.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
          >
            Start Your Project
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
              src="/projects/nguyen/nguyen_post-23.jpg"
              alt="Harris Cabinetry custom appliance garage detail"
              className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="font-sans">
            <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-6">
              The Harris Difference
            </h2>
            <div className="w-16 h-1 bg-[#949089] mb-8" />
            <p className="text-[#242019]/80 text-lg leading-relaxed mb-6">
              At Harris Cabinetry, every piece we create is a testament to hand-crafted
              excellence. As a family-owned business based in Plainfield, Illinois, we
              bring generations of woodworking expertise and an unwavering attention to
              detail to every project.
            </p>
            <p className="text-[#242019]/80 text-lg leading-relaxed mb-8">
              We believe your home deserves more than mass-produced solutions. Our custom
              cabinetry is designed and built to fit your unique space, style, and
              lifestyle — ensuring every joint, finish, and detail is nothing short of
              perfection.
            </p>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center gap-2 group transition-all duration-300"
            >
              Learn More About Us
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
              Endless Possibilities
            </h2>
            <p className="font-sans text-[#949089] text-lg max-w-2xl mx-auto">
              Choose from our extensive collection of styles, finishes, and materials to
              create cabinetry that is uniquely yours.
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
              <h3 className="font-serif text-2xl text-[#242019] mb-3">12 Door Styles</h3>
              <p className="font-sans text-[#949089] leading-relaxed mb-4">
                From classic raised panels to sleek modern slabs, find the perfect door
                profile to match your vision.
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
              <p className="font-sans text-[#949089] leading-relaxed mb-4">
                A curated palette of stains and paints, each hand-applied to enhance the
                natural beauty of the wood.
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
                Premium hardwoods sourced for their grain, durability, and character —
                from rich walnut to warm maple.
              </p>
              <span className="inline-flex items-center gap-1 text-[#242019] font-sans font-medium group-hover:gap-2 transition-all duration-300">
                Discover Woods <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Teaser Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/projects/nguyen/nguyen_post-40.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="font-sans text-[#949089] uppercase tracking-widest text-sm mb-4">
            Interactive Experience
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#242019] mb-6">The Studio</h2>
          <p className="font-sans text-[#242019]/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Visualize your perfect cabinetry with our interactive door configurator.
            Combine styles, finishes, and wood species to see your vision come to life.
          </p>
          <Link
            to="/studio"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
          >
            Enter The Studio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F7F6F4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-sans text-[#949089] text-lg mb-10 max-w-2xl mx-auto">
            Let's bring your vision to life. Schedule a consultation with our design team
            and discover what Harris Cabinetry can create for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-block text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/door-styles"
              className="btn-outline inline-flex items-center justify-center gap-2 text-lg px-8 py-4 transition-all duration-300"
            >
              Browse Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { Crosshair, Box, PanelLeft, Cpu, ArrowRight } from 'lucide-react';

const PILLARS = [
  {
    icon: Crosshair,
    title: 'Defeating Tolerance Drift',
    description:
      'Every component is machined to a strict 1/16\u201D micro-tolerance, ensuring appliance reveals perfectly match your custom door lines.',
  },
  {
    icon: Box,
    title: 'Appliance-Grade Rigidity',
    description:
      'Full-depth 3/4\u201D plywood boxes provide a rock-solid foundation designed to support heavy 300 lb+ refrigeration columns without deflection.',
  },
  {
    icon: PanelLeft,
    title: '3-1/2\u201D Finished Returns',
    description:
      'Pre-engineered, color-matched interior pockets conceal raw cabinet structures and metal casings when appliance doors are swung open.',
  },
  {
    icon: Cpu,
    title: 'Factory CNC Bypasses',
    description:
      'Milled ventilation paths and utility tracks are routed at the factory, preserving box integrity and saving hours of installation labor.',
  },
];

export default function OptiFit() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[#F7F6F4]">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/optifit-logo_blue.png"
            alt="OptiFit"
            className="h-10 md:h-12 w-auto mx-auto mb-8"
          />
          <h1 className="font-serif text-4xl md:text-6xl text-[#242019] mb-4 leading-tight">
            Precision Appliance Integration
          </h1>
          <p className="font-sans text-[#949089] uppercase tracking-[0.2em] text-sm mb-8">
            Defeating Tolerance Drift on the Job Site
          </p>
          <div className="w-16 h-px bg-[#949089]/40 mx-auto mb-8" />
          <p className="font-sans text-[#242019]/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Custom cabinetry is an investment in your home's long-term equity.
            While luxury millwork flawlessly shapes the footprint of a room,
            integrating high-end appliances can introduce unpredictable job site
            variables. The OptiFit program applies our signature 1/16"
            engineering precision to your appliance specifications, eliminating
            on-site guesswork and maximizing every inch of your space.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group p-8 md:p-10 rounded-2xl border border-[#E0E1E1] hover:border-[#949089] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#F7F6F4] flex items-center justify-center mb-6 group-hover:bg-[#949089]/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#949089] group-hover:text-[#242019] transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-[#242019] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[#242019]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OptiFit+ Banner */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl bg-[#1c1917] overflow-hidden">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative p-10 md:p-16">
              <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                {/* Left: Badge + Logo */}
                <div className="shrink-0 flex flex-col items-start">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 font-sans text-[10px] uppercase tracking-[0.25em] text-white/70 mb-6">
                    Premium Add-On
                  </span>
                  <img
                    src="/optifit-plus-logo-white.png"
                    alt="OptiFit+"
                    className="h-8 md:h-10 w-auto"
                    loading="lazy"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                    Laser-Accurate Site Surveys
                  </h3>
                  <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                    A factory-certified technician maps precise wall plumbness,
                    floor slopes, and mechanical utility coordinates prior to
                    manufacturing. The result is cabinetry dimensioned to the
                    room as it actually exists -- not as the blueprints say it
                    should.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#1c1917] font-sans text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors duration-300 group"
                  >
                    Inquire About OptiFit+
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

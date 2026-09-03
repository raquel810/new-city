import ProjectQuiz from '@/components/ProjectQuiz';
import { Helmet } from 'react-helmet-async';

export default function Consultation() {
  return (
    <main>
      <Helmet>
        <title>Quick Consultation | Harris Cabinetry</title>
        <meta name="description" content="Answer six quick questions about your space, style, and timeline to start planning your custom cabinetry project with Harris Cabinetry." />
        <link rel="canonical" href="https://www.harris-cabinetry.com/consultation" />
      </Helmet>
      <section className="pt-32 pb-12 bg-[#F7F6F4]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="font-sans text-[#949089] uppercase tracking-widest text-sm mb-4">
            Quick Consultation
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#242019] mb-4">
            Tell Us About Your Project
          </h1>
          <p className="font-sans text-[#949089] text-lg max-w-2xl mx-auto">
            Six quick questions about your space, style, and timeline.
            We will use your answers to shape a personalized starting point.
          </p>
        </div>
      </section>

      <ProjectQuiz startOpen />
    </main>
  );
}

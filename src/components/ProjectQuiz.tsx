import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Send,
  Mail,
  Check,
  ArrowRight,
} from 'lucide-react';

interface QuizAnswers {
  room: string;
  size: string;
  style: string;
  features: string[];
  budget: string;
  timeline: string;
}

const ROOMS = [
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathroom', label: 'Bathroom / Vanity' },
  { id: 'closet', label: 'Closet / Dressing Room' },
  { id: 'bar', label: 'Bar / Wet Bar' },
  { id: 'office', label: 'Home Office / Study' },
  { id: 'builtins', label: 'Built-Ins / Entertainment' },
  { id: 'multiple', label: 'Multiple Rooms' },
];

const SIZES = [
  { id: 'compact', label: 'Compact', desc: 'Under 100 sq ft' },
  { id: 'midsize', label: 'Mid-Size', desc: '100–200 sq ft' },
  { id: 'large', label: 'Large / Open-Concept', desc: '200–400 sq ft' },
  { id: 'multi', label: 'Multi-Room', desc: '400+ sq ft' },
];

const STYLES = [
  {
    id: 'modern',
    label: 'Clean & Modern',
    desc: 'Slab doors, flat panels, minimal detail',
    image: '/erving_hc-door.jpg',
  },
  {
    id: 'transitional',
    label: 'Transitional',
    desc: 'Slim shaker, balanced proportions, timeless',
    image: '/duncan_hc-door.jpg',
  },
  {
    id: 'classic',
    label: 'Classic & Detailed',
    desc: 'Raised panels, layered profiles, heavier molding',
    image: '/russell_hc-door.jpg',
  },
  {
    id: 'unsure',
    label: 'Not Sure Yet',
    desc: "Happy to explore options together",
    image: '/jordan_hc-door.jpg',
  },
];

const FEATURES = [
  { id: 'colordrop', label: 'Custom color matching (ColorDrop)' },
  { id: 'optifit', label: 'Precision appliance integration (OptiFit)' },
  { id: 'glass', label: 'Specialty glass inserts' },
  { id: 'wood', label: 'Specific wood species in mind' },
  { id: 'storage', label: 'Maximize storage & function' },
  { id: 'match', label: 'Match existing cabinetry' },
];

const BUDGETS = [
  { id: 'under50', label: 'Under $50K' },
  { id: '50to100', label: '$50K – $100K' },
  { id: '100to150', label: '$100K – $150K' },
  { id: '150plus', label: '$150K+' },
];

const TIMELINES = [
  { id: 'ready', label: 'Ready to start', desc: 'Within 3 months' },
  { id: 'planning', label: 'In planning phase', desc: '3–6 months' },
  { id: 'longrange', label: 'New build / long-range', desc: '6+ months' },
];

const TOTAL_STEPS = 6;

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current
              ? 'w-8 bg-[#242019]'
              : i < current
              ? 'w-4 bg-[#949089]'
              : 'w-4 bg-[#E0E1E1]'
          }`}
        />
      ))}
    </div>
  );
}

export default function ProjectQuiz() {
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({
    room: '',
    size: '',
    style: '',
    features: [],
    budget: '',
    timeline: '',
  });
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canAdvance = () => {
    switch (step) {
      case 0: return !!answers.room;
      case 1: return !!answers.size;
      case 2: return !!answers.style;
      case 3: return true;
      case 4: return !!answers.budget;
      case 5: return !!answers.timeline;
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep(step + 1);
    else setShowContact(true);
  };

  const prev = () => {
    if (showContact) {
      setShowContact(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const toggleFeature = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      features: prev.features.includes(id)
        ? prev.features.filter((f) => f !== id)
        : [...prev.features, id],
    }));
  };

  const buildSummary = () => {
    const roomLabel = ROOMS.find((r) => r.id === answers.room)?.label ?? '';
    const sizeItem = SIZES.find((s) => s.id === answers.size);
    const sizeLabel = sizeItem ? `${sizeItem.label} (${sizeItem.desc})` : '';
    const styleLabel = STYLES.find((s) => s.id === answers.style)?.label ?? '';
    const featLabels = FEATURES.filter((f) => answers.features.includes(f.id)).map((f) => f.label);
    const budgetLabel = BUDGETS.find((b) => b.id === answers.budget)?.label ?? '';
    const timeItem = TIMELINES.find((t) => t.id === answers.timeline);
    const timeLabel = timeItem ? `${timeItem.label} (${timeItem.desc})` : '';

    return {
      roomLabel,
      sizeLabel,
      styleLabel,
      featLabels,
      budgetLabel,
      timeLabel,
    };
  };

  const buildPlainText = () => {
    const s = buildSummary();
    let text = `Project Quiz Selections\n`;
    text += `---\n`;
    text += `Room: ${s.roomLabel}\n`;
    text += `Size: ${s.sizeLabel}\n`;
    text += `Style: ${s.styleLabel}\n`;
    if (s.featLabels.length > 0) text += `Features: ${s.featLabels.join(', ')}\n`;
    text += `Budget: ${s.budgetLabel}\n`;
    text += `Timeline: ${s.timeLabel}\n`;
    return text;
  };

  const handleSubmitToHC = async () => {
    setSubmitting(true);
    const payload: Record<string, string> = {
      'form-name': 'contact',
      name,
      email,
      phone,
      'project-type': answers.room,
      message: buildPlainText(),
    };

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: Object.keys(payload)
          .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(payload[k]))
          .join('&'),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEmailSelf = () => {
    const subject = encodeURIComponent('My Harris Cabinetry Project Selections');
    const body = encodeURIComponent(buildPlainText());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  if (!started) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-[#949089] uppercase tracking-widest text-sm mb-4">
            Quick Consultation
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#242019] mb-4">
            Exploring a Project?
          </h2>
          <p className="font-sans text-[#949089] text-lg max-w-2xl mx-auto mb-10">
            Answer a few quick questions about your space and style.
            We will put together a personalized starting point for your project.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
          >
            Take the Quiz
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#242019] mb-4">
            We Have Your Selections
          </h2>
          <p className="font-sans text-[#949089] text-lg mb-8">
            Thank you! We will review your project details and follow up within 24 hours.
          </p>
          <Link
            to="/studio"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            Explore The Studio
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    );
  }

  if (showContact) {
    const summary = buildSummary();
    return (
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={prev}
            className="inline-flex items-center gap-1 font-sans text-sm text-[#949089] hover:text-[#242019] transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <h2 className="font-serif text-3xl md:text-4xl text-[#242019] mb-3">
            Your Selections
          </h2>
          <p className="font-sans text-[#949089] mb-8">
            Review your choices below, then send them to our team or save a copy for yourself.
          </p>

          {/* Summary card */}
          <div className="bg-[#F7F6F4] rounded-xl p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SummaryField label="Room" value={summary.roomLabel} />
              <SummaryField label="Size" value={summary.sizeLabel} />
              <SummaryField label="Style" value={summary.styleLabel} />
              <SummaryField label="Budget" value={summary.budgetLabel} />
              <SummaryField label="Timeline" value={summary.timeLabel} />
              {summary.featLabels.length > 0 && (
                <div className="sm:col-span-2">
                  <SummaryField label="Features" value={summary.featLabels.join(', ')} />
                </div>
              )}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white border border-[#E0E1E1] rounded-xl p-6 md:p-8">
            <h3 className="font-serif text-xl text-[#242019] mb-4">
              Send to Our Team
            </h3>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSubmitToHC}
                disabled={!name || !email || submitting}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {submitting ? 'Sending...' : 'Send to Harris Cabinetry'}
              </button>
              <button
                onClick={handleEmailSelf}
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-lg"
              >
                <Mail className="w-4 h-4" />
                Email Myself a Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-[#949089] uppercase tracking-widest text-sm mb-2">
          Quick Consultation
        </p>
        <StepIndicator current={step} total={TOTAL_STEPS} />

        <div className="min-h-[340px]">
          {step === 0 && (
            <QuizStep title="What room are we working on?">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ROOMS.map((room) => (
                  <OptionCard
                    key={room.id}
                    selected={answers.room === room.id}
                    onClick={() => setAnswers({ ...answers, room: room.id })}
                  >
                    {room.label}
                  </OptionCard>
                ))}
              </div>
            </QuizStep>
          )}

          {step === 1 && (
            <QuizStep title="How big is the space?">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIZES.map((size) => (
                  <OptionCard
                    key={size.id}
                    selected={answers.size === size.id}
                    onClick={() => setAnswers({ ...answers, size: size.id })}
                  >
                    <span className="block font-medium">{size.label}</span>
                    <span className="block text-sm text-[#949089]">{size.desc}</span>
                  </OptionCard>
                ))}
              </div>
            </QuizStep>
          )}

          {step === 2 && (
            <QuizStep title="What style feels right?">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setAnswers({ ...answers, style: style.id })}
                    className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 text-left ${
                      answers.style === style.id
                        ? 'border-[#242019] shadow-lg'
                        : 'border-[#E0E1E1] hover:border-[#949089]'
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <span className="block font-sans font-medium text-[#242019] text-sm md:text-base">
                        {style.label}
                      </span>
                      <span className="block font-sans text-xs md:text-sm text-[#949089] mt-0.5">
                        {style.desc}
                      </span>
                    </div>
                    {answers.style === style.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#242019] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </QuizStep>
          )}

          {step === 3 && (
            <QuizStep title="Anything specific in mind?" subtitle="Select all that apply (or skip)">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES.map((feat) => (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      answers.features.includes(feat.id)
                        ? 'border-[#242019] bg-[#242019]/5'
                        : 'border-[#E0E1E1] hover:border-[#949089]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        answers.features.includes(feat.id)
                          ? 'border-[#242019] bg-[#242019]'
                          : 'border-[#949089]'
                      }`}
                    >
                      {answers.features.includes(feat.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="font-sans text-sm text-[#242019]">{feat.label}</span>
                  </button>
                ))}
              </div>
            </QuizStep>
          )}

          {step === 4 && (
            <QuizStep title="Approximate budget range?">
              <div className="grid grid-cols-2 gap-3">
                {BUDGETS.map((budget) => (
                  <OptionCard
                    key={budget.id}
                    selected={answers.budget === budget.id}
                    onClick={() => setAnswers({ ...answers, budget: budget.id })}
                  >
                    {budget.label}
                  </OptionCard>
                ))}
              </div>
            </QuizStep>
          )}

          {step === 5 && (
            <QuizStep title="Where are you in the process?">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINES.map((tl) => (
                  <OptionCard
                    key={tl.id}
                    selected={answers.timeline === tl.id}
                    onClick={() => setAnswers({ ...answers, timeline: tl.id })}
                  >
                    <span className="block font-medium">{tl.label}</span>
                    <span className="block text-sm text-[#949089]">{tl.desc}</span>
                  </OptionCard>
                ))}
              </div>
            </QuizStep>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E0E1E1]">
          <button
            onClick={prev}
            className={`inline-flex items-center gap-1 font-sans text-sm text-[#949089] hover:text-[#242019] transition-colors ${
              step === 0 ? 'invisible' : ''
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={next}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#242019] text-white font-sans text-sm uppercase tracking-widest rounded-lg hover:bg-[#949089] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {step === TOTAL_STEPS - 1 ? 'See Results' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function QuizStep({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fadeIn">
      <h3 className="font-serif text-2xl md:text-3xl text-[#242019] mb-2">{title}</h3>
      {subtitle && (
        <p className="font-sans text-sm text-[#949089] mb-6">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-6" />}
      {children}
    </div>
  );
}

function OptionCard({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-4 rounded-lg border-2 font-sans text-sm text-left transition-all duration-200 ${
        selected
          ? 'border-[#242019] bg-[#242019]/5 shadow-sm'
          : 'border-[#E0E1E1] hover:border-[#949089]'
      }`}
    >
      {children}
    </button>
  );
}

function SummaryField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-sans uppercase tracking-wider text-[#949089] mb-0.5">{label}</p>
      <p className="font-sans text-sm font-medium text-[#242019]">{value || '--'}</p>
    </div>
  );
}

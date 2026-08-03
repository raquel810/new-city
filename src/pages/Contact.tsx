import { useState, FormEvent } from 'react';
import {
  Send,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

const PROJECT_TYPES = [
  'Kitchen',
  'Bathroom',
  'Closet',
  'Built-in/Entertainment',
  'Office/Study',
  'Other',
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name,
          email,
          phone,
          'project-type': projectType,
          message,
        }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <div className="bg-[#F7F6F4] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F7F6F4] pt-32 pb-20 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#242019] mb-4">
          Start Your Project
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#949089] max-w-2xl mx-auto">
          Tell us about your vision. We'll bring it to life.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT: Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-16 h-16 text-green-600 animate-[scaleIn_0.4s_ease-out]" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#242019] mb-3">
                  Message Sent!
                </h2>
                <p className="font-sans text-[#949089] text-lg">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-sm font-medium text-[#242019] mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-[#242019] mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm font-medium text-[#242019] mb-2"
                  >
                    Phone <span className="text-[#949089] text-xs">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="project-type"
                    className="block font-sans text-sm font-medium text-[#242019] mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow appearance-none"
                  >
                    <option value="">Select a project type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm font-medium text-[#242019] mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project — dimensions, style preferences, timeline…"
                    className="w-full px-4 py-3 border border-[#E0E1E1] rounded-lg font-sans text-[#242019] placeholder-[#949089] bg-white focus:outline-none focus:ring-2 focus:ring-[#949089] focus:border-transparent transition-shadow resize-vertical"
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg font-sans text-sm">
                    <span className="text-red-500 font-medium">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary inline-flex items-center gap-2 px-8 py-3 bg-[#242019] text-white font-sans font-medium rounded-lg hover:bg-[#949089] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Contact Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm sticky top-8">
              <h2 className="font-serif text-2xl text-[#242019] mb-6">
                Visit Our Showroom
              </h2>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#949089] mt-0.5 flex-shrink-0" />
                  <div className="font-sans text-[#242019]">
                    <p>12515 Rhea Dr.</p>
                    <p>Plainfield, IL 60585</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#949089] flex-shrink-0" />
                  <a
                    href="tel:8152341000"
                    className="font-sans text-[#242019] hover:text-[#949089] transition-colors"
                  >
                    815.234.1000
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#949089] flex-shrink-0" />
                  <a
                    href="mailto:info@harriscrafted.com"
                    className="font-sans text-[#242019] hover:text-[#949089] transition-colors"
                  >
                    info@harriscrafted.com
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#949089] mt-0.5 flex-shrink-0" />
                  <div className="font-sans text-[#242019]">
                    <p>Mon–Fri: 8am–5pm</p>
                    <p>Sat: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Response Note */}
              <div className="mt-8 pt-6 border-t border-[#E0E1E1]">
                <p className="font-sans text-sm text-[#949089] italic">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

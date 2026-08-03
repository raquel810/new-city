import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'The Schneider Residence',
    description: 'Custom walnut cabinetry with modern hardware',
    images: Array.from({ length: 9 }, (_, i) => `/schneide-project_0${i}.jpg`),
  },
  {
    id: 2,
    title: 'The Nguyen Residence',
    description: 'White shaker with natural wood accents',
    images: Array.from({ length: 8 }, (_, i) => `/nguyen-project_0${i}.jpg`),
  },
  {
    id: 3,
    title: 'The Carsten Residence',
    description: 'Transitional kitchen with custom island',
    images: Array.from({ length: 7 }, (_, i) => `/carsten-project_0${i}.jpg`),
  },
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentImageIndex(0);
    }, 300);
  }, []);

  const nextImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }, [selectedProject]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal, nextImage, prevImage]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[#F7F6F4]">
      {/* Hero Banner */}
      <section className="relative bg-[#242019] py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#242019]/90 to-[#242019]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="h-8 w-8 text-[#949089]" />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#F7F6F4] md:text-5xl lg:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-sans text-[#E0E1E1]/80">
            Explore our portfolio of custom crafted projects.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#949089] focus:ring-offset-2 text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#242019]/0 transition-all duration-300 group-hover:bg-[#242019]/30 flex items-center justify-center">
                  <span className="rounded-full bg-[#F7F6F4]/90 px-4 py-2 font-sans text-sm font-medium text-[#242019] opacity-0 transition-all duration-300 scale-90 group-hover:opacity-100 group-hover:scale-100">
                    View Project
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[#242019]/70 px-3 py-1 backdrop-blur-sm">
                  <Camera className="h-3.5 w-3.5 text-[#F7F6F4]" />
                  <span className="font-sans text-xs text-[#F7F6F4]">
                    {project.images.length}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-[#242019]">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-[#949089]">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal / Carousel */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`absolute inset-0 bg-[#242019]/90 backdrop-blur-sm transition-opacity duration-300 ${
              isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeModal}
          />

          <div
            className={`relative w-full max-w-5xl transform transition-all duration-300 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 rounded-full bg-[#F7F6F4]/10 p-2 text-[#F7F6F4] transition-colors hover:bg-[#F7F6F4]/20 focus:outline-none focus:ring-2 focus:ring-[#F7F6F4]/50"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-4 text-center">
              <h2 className="font-serif text-2xl font-bold text-[#F7F6F4] md:text-3xl">
                {selectedProject.title}
              </h2>
              <p className="mt-1 font-sans text-sm text-[#E0E1E1]/70">
                {selectedProject.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-[#242019]">
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#F7F6F4]/90 p-2 text-[#242019] shadow-lg transition-all hover:bg-[#F7F6F4] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#949089]"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#F7F6F4]/90 p-2 text-[#242019] shadow-lg transition-all hover:bg-[#F7F6F4] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#949089]"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {selectedProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentImageIndex
                      ? 'w-8 bg-[#F7F6F4]'
                      : 'w-2.5 bg-[#F7F6F4]/40 hover:bg-[#F7F6F4]/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <p className="mt-3 text-center font-sans text-xs text-[#E0E1E1]/50">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

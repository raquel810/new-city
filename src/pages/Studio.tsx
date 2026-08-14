import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Palette, TreePine, Paintbrush } from 'lucide-react';

// --- DATA ---

const outerEdges = [
  { id: 'squared', name: 'Squared Edge', image: '/thestudio-outeredge_squarededge.png' },
  { id: 'quarter-round', name: '1/4 Round', image: '/thestudio-outeredge_1-4_round.png' },
  { id: 'ogee', name: 'Ogee', image: '/thestudio-outeredge_ogee.png' },
];

const innerEdges = [
  { id: 'sanders', name: 'Sanders', image: '/thestudio-insideedge_sanders.png' },
  { id: 'duncan', name: 'Duncan', image: '/thestudio-insideedge_duncan.png' },
  { id: 'james', name: 'James', image: '/thestudio-insideedge_james.png' },
  { id: 'jordan', name: 'Jordan', image: '/thestudio-insideedge_jordan.png' },
  { id: 'bryant', name: 'Bryant', image: '/thestudio-insideedge_bryant.png' },
  { id: 'taylor', name: 'Taylor', image: '/thestudio-insideedge_taylor.png' },
  { id: '05', name: '05', image: '/thestudio-insideedge_05.png' },
];

const centerPanels = [
  { id: 'flat', name: 'Flat Panel', image: '/thestudio-center_flat.png' },
  { id: 'raised', name: 'Raised Panel', image: '/thestudio-center_raised.png' },
];

const woodSpecies = [
  'Maple', 'Hickory', 'Cherry', 'Walnut', 'Alder',
  'Quarter Sawn Oak',
] as const;

type WoodSpecies = (typeof woodSpecies)[number];

const MAX_FINISHES = 3;

const paintColors: Record<string, string> = {
  Polar: '#F8F7F1',
  Arctic: '#F1EDEC',
  Moonlight: '#DFD3C3',
  Stone: '#CCC8BF',
  Slate: '#7F817E',
  Sage: '#95978A',
  Basil: '#626F61',
  Drift: '#C6DDF0',
  Harbor: '#758B9A',
  Navy: '#35454E',
  Orbital: '#2F2F30',
};

const stainColors: Record<string, { hex: string; image: string }> = {
  Oat:      { hex: '#E8D5B0', image: '/oat_hc-stain.jpg' },
  Honey:    { hex: '#C8A050', image: '/honey_hc-stain.jpg' },
  Fawn:     { hex: '#B08860', image: '/fawn_hc-stain.jpg' },
  Rye:      { hex: '#9A7040', image: '/rye_hc-stain.jpg' },
  Reed:     { hex: '#7A6830', image: '/reed_hc-stain.jpg' },
  Port:     { hex: '#6B2A2A', image: '/port_hc-stain.jpg' },
  Cask:     { hex: '#6B4A2A', image: '/cask_hc-stain.jpg' },
  Alcove:   { hex: '#4A3020', image: '/alcove_hc-stain.jpg' },
  Pumice:   { hex: '#8A8580', image: '/pumice_hc-stain.jpg' },
  Shale:    { hex: '#5A5550', image: '/shale_hc-stain.jpg' },
  Graphite: { hex: '#3A3530', image: '/graphite_hc-stain.jpg' },
};

function getColorType(name: string): 'paint' | 'stain' {
  if (name in paintColors) return 'paint';
  return 'stain';
}

// --- COMPONENT ---

export default function Studio() {
  const navigate = useNavigate();
  const [selectedOuterEdge, setSelectedOuterEdge] = useState<string | null>(null);
  const [selectedInnerEdge, setSelectedInnerEdge] = useState<string | null>(null);
  const [selectedCenterPanel, setSelectedCenterPanel] = useState<string | null>(null);
  const [selectedWood, setSelectedWood] = useState<WoodSpecies | null>(null);
  const [finishType, setFinishType] = useState<'paint' | 'stain'>('paint');
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [customColor, setCustomColor] = useState(false);

  const handleFinishToggle = (name: string) => {
    setSelectedFinishes((prev) => {
      if (prev.includes(name)) return prev.filter((f) => f !== name);
      if (prev.length >= MAX_FINISHES) return prev;
      return [...prev, name];
    });
  };

  const finishComplete = selectedFinishes.length > 0;

  const allSelected =
    selectedOuterEdge &&
    selectedInnerEdge &&
    selectedCenterPanel &&
    selectedWood &&
    finishComplete;

  const getSelectedName = (list: { id: string; name: string }[], id: string | null) =>
    list.find((item) => item.id === id)?.name ?? null;

  const paintSwatches = Object.entries(paintColors);

  const handleRequestQuote = () => {
    if (!allSelected) return;
    const params = new URLSearchParams();
    params.set('outer', getSelectedName(outerEdges, selectedOuterEdge) ?? '');
    params.set('inner', getSelectedName(innerEdges, selectedInnerEdge) ?? '');
    params.set('panel', getSelectedName(centerPanels, selectedCenterPanel) ?? '');
    params.set('wood', selectedWood ?? '');
    params.set('finishes', selectedFinishes.map((f) => `${f} (${getColorType(f)})`).join(', '));
    if (customColor) params.set('custom', '1');
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F4]">
      {/* Hero Section */}
      <section className="bg-[#F7F6F4] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/THESTUDIO_hc_logo.png"
            alt="The Studio"
            className="mx-auto mb-6 h-20 sm:h-24 object-contain dark-logo"
            style={{ filter: 'invert(1) brightness(0.25)' }}
          />
          <p className="font-sans text-[#949089] text-lg sm:text-xl max-w-2xl mx-auto">
            Study the proportions. Pair edge profiles with panel styles, select your species, and test finishes before you commit.
          </p>
        </div>
      </section>

      {/* Configurator */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-14">

        {/* Step 1: Outer Edge */}
        <div>
          <StepHeader number={1} title="Outer Edge Profile" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {outerEdges.map((edge) => (
              <SelectableImageCard
                key={edge.id}
                selected={selectedOuterEdge === edge.id}
                onClick={() => setSelectedOuterEdge(edge.id)}
                image={edge.image}
                label={edge.name}
              />
            ))}
          </div>
        </div>

        {/* Step 2: Inner Edge */}
        <div>
          <StepHeader number={2} title="Inner Edge Profile" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {innerEdges.map((edge) => (
              <SelectableImageCard
                key={edge.id}
                selected={selectedInnerEdge === edge.id}
                onClick={() => setSelectedInnerEdge(edge.id)}
                image={edge.image}
                label={edge.name}
              />
            ))}
          </div>
        </div>

        {/* Step 3: Center Panel */}
        <div>
          <StepHeader number={3} title="Center Panel" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {centerPanels.map((panel) => (
              <SelectableImageCard
                key={panel.id}
                selected={selectedCenterPanel === panel.id}
                onClick={() => setSelectedCenterPanel(panel.id)}
                image={panel.image}
                label={panel.name}
              />
            ))}
          </div>
        </div>

        {/* Step 4: Wood Species */}
        <div>
          <StepHeader number={4} title="Wood Species" icon={<TreePine className="w-5 h-5 text-[#949089]" />} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {woodSpecies.map((wood) => (
              <button
                key={wood}
                onClick={() => setSelectedWood(wood)}
                className={`relative px-3 py-3 rounded-lg border text-sm font-sans transition-all duration-200 ${
                  selectedWood === wood
                    ? 'border-[#242019] bg-[#242019] text-white shadow-md'
                    : 'border-[#E0E1E1] bg-white text-[#242019] hover:border-[#949089] hover:shadow-sm'
                }`}
              >
                {selectedWood === wood && (
                  <Check className="absolute top-1.5 right-1.5 w-3.5 h-3.5" />
                )}
                {wood}
              </button>
            ))}
          </div>
        </div>

        {/* Step 5: Finish */}
        <div>
          <StepHeader number={5} title="Finish" icon={<Paintbrush className="w-5 h-5 text-[#949089]" />} />

          <p className="font-sans text-sm text-[#949089] mb-4">
            Pick up to {MAX_FINISHES} finishes you like — mix paint and stain if you want.
            <span className="ml-2 font-medium text-[#242019]">
              {selectedFinishes.length} of {MAX_FINISHES} selected
            </span>
          </p>

          {/* Paint / Stain tabs */}
          <div className="flex gap-1 mb-4 bg-[#E0E1E1] rounded-lg p-1 w-fit">
            <button
              onClick={() => setFinishType('paint')}
              className={`px-4 py-2 rounded-md text-sm font-sans font-medium transition-all ${
                finishType === 'paint'
                  ? 'bg-white text-[#242019] shadow-sm'
                  : 'text-[#949089] hover:text-[#242019]'
              }`}
            >
              <Palette className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
              Paint
            </button>
            <button
              onClick={() => setFinishType('stain')}
              className={`px-4 py-2 rounded-md text-sm font-sans font-medium transition-all ${
                finishType === 'stain'
                  ? 'bg-white text-[#242019] shadow-sm'
                  : 'text-[#949089] hover:text-[#242019]'
              }`}
            >
              <TreePine className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
              Stain
            </button>
          </div>

          {finishType === 'paint' ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {paintSwatches.map(([name, hex]) => (
                <PaintSwatch
                  key={name}
                  name={name}
                  hex={hex}
                  selected={selectedFinishes.includes(name)}
                  disabled={!selectedFinishes.includes(name) && selectedFinishes.length >= MAX_FINISHES}
                  onToggle={handleFinishToggle}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {Object.entries(stainColors).map(([name, { image }]) => (
                <StainSwatch
                  key={name}
                  name={name}
                  image={image}
                  selected={selectedFinishes.includes(name)}
                  disabled={!selectedFinishes.includes(name) && selectedFinishes.length >= MAX_FINISHES}
                  onToggle={handleFinishToggle}
                />
              ))}
            </div>
          )}

          {/* Selected finishes pills */}
          {selectedFinishes.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedFinishes.map((name) => (
                <button
                  key={name}
                  onClick={() => handleFinishToggle(name)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242019] text-white text-xs font-sans font-medium transition-all hover:bg-[#242019]/80"
                >
                  {name}
                  <span className="text-white/60">{getColorType(name)}</span>
                  <span className="ml-0.5 text-white/80">&times;</span>
                </button>
              ))}
            </div>
          )}

          {/* Custom Color */}
          <label className="flex items-center gap-3 mt-6 cursor-pointer group">
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                customColor
                  ? 'bg-[#242019] border-[#242019]'
                  : 'border-[#949089] group-hover:border-[#242019]'
              }`}
            >
              {customColor && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
            <input
              type="checkbox"
              checked={customColor}
              onChange={(e) => setCustomColor(e.target.checked)}
              className="sr-only"
            />
            <span className="font-sans text-sm text-[#242019]">
              I'd like a custom color match
              <span className="text-[#949089] ml-1">(ColorDrop)</span>
            </span>
          </label>
        </div>

        {/* Summary */}
        <div>
          <StepHeader number={6} title="Your Selection" />
          <div className="bg-white rounded-xl border border-[#E0E1E1] p-6 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              <SummaryField label="Outer Edge" value={getSelectedName(outerEdges, selectedOuterEdge)} />
              <SummaryField label="Inner Edge" value={getSelectedName(innerEdges, selectedInnerEdge)} />
              <SummaryField label="Center Panel" value={getSelectedName(centerPanels, selectedCenterPanel)} />
              <SummaryField label="Wood Species" value={selectedWood} />
              <SummaryField
                label={selectedFinishes.length > 1 ? 'Finishes' : 'Finish'}
                value={
                  selectedFinishes.length > 0
                    ? selectedFinishes.map((f) => `${f} (${getColorType(f)})`).join(', ')
                    : null
                }
              />
            </div>

            {customColor && (
              <p className="text-sm font-sans text-[#949089] mb-4 flex items-center gap-1.5">
                <Palette className="w-4 h-4" />
                Custom color match requested (ColorDrop)
              </p>
            )}

            <button
              onClick={handleRequestQuote}
              disabled={!allSelected}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-sans font-medium text-sm transition-all duration-200 ${
                allSelected
                  ? 'bg-[#242019] text-white hover:bg-[#242019]/90 shadow-md hover:shadow-lg cursor-pointer'
                  : 'bg-[#E0E1E1] text-[#949089] cursor-not-allowed'
              }`}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </button>

            {!allSelected && (
              <p className="text-xs font-sans text-[#949089] mt-2">
                Complete all selections above to request a quote.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function StepHeader({ number, title, icon }: { number: number; title: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-full bg-[#242019] text-white flex items-center justify-center text-sm font-sans font-semibold">
        {number}
      </div>
      <h3 className="font-serif text-xl text-[#242019] flex items-center gap-2">
        {icon}
        {title}
      </h3>
    </div>
  );
}

function SelectableImageCard({
  selected,
  onClick,
  image,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  image: string;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-xl border-2 overflow-hidden transition-all duration-200 ${
        selected
          ? 'border-[#242019] shadow-lg ring-1 ring-[#242019]'
          : 'border-[#E0E1E1] hover:border-[#949089] hover:shadow-md'
      }`}
    >
      <div className="aspect-[4/3] bg-white p-4 flex items-center justify-center">
        <img
          src={image}
          alt={label}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className={`px-3 py-2 text-center font-sans text-sm transition-colors ${
        selected ? 'bg-[#242019] text-white' : 'bg-[#F7F6F4] text-[#242019]'
      }`}>
        {label}
      </div>
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#242019] flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </div>
      )}
    </button>
  );
}

function SummaryField({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div>
      <p className="text-xs font-sans uppercase tracking-wider text-[#949089] mb-1">
        {label}
      </p>
      <p className="font-sans text-[#242019] font-medium text-sm">
        {value || <span className="text-[#949089]">--</span>}
      </p>
    </div>
  );
}

function PaintSwatch({
  name,
  hex,
  selected,
  disabled,
  onToggle,
}: {
  name: string;
  hex: string;
  selected: boolean;
  disabled: boolean;
  onToggle: (name: string) => void;
}) {
  const lightColors = ['Polar', 'Arctic', 'Moonlight', 'Stone', 'Drift'];
  return (
    <button
      onClick={() => onToggle(name)}
      disabled={disabled}
      className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 ${
        selected
          ? 'bg-[#242019]/5 ring-2 ring-[#242019] ring-offset-1'
          : disabled
          ? 'opacity-40 cursor-not-allowed'
          : 'hover:bg-[#E0E1E1]/50'
      }`}
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-transform duration-200 ${
          !disabled ? 'group-hover:scale-110' : ''
        } ${selected ? 'border-[#242019]' : 'border-[#E0E1E1]'}`}
        style={{ backgroundColor: hex }}
      >
        {selected && (
          <div className="w-full h-full flex items-center justify-center">
            <Check
              className={`w-4 h-4 ${lightColors.includes(name) ? 'text-[#242019]' : 'text-white'}`}
            />
          </div>
        )}
      </div>
      <span className="text-xs font-sans text-[#242019] text-center leading-tight">{name}</span>
    </button>
  );
}

function StainSwatch({
  name,
  image,
  selected,
  disabled,
  onToggle,
}: {
  name: string;
  image: string;
  selected: boolean;
  disabled: boolean;
  onToggle: (name: string) => void;
}) {
  return (
    <button
      onClick={() => onToggle(name)}
      disabled={disabled}
      className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 ${
        selected
          ? 'bg-[#242019]/5 ring-2 ring-[#242019] ring-offset-1'
          : disabled
          ? 'opacity-40 cursor-not-allowed'
          : 'hover:bg-[#E0E1E1]/50'
      }`}
    >
      <div
        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 overflow-hidden transition-transform duration-200 ${
          !disabled ? 'group-hover:scale-110' : ''
        } ${selected ? 'border-[#242019]' : 'border-[#E0E1E1]'}`}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {selected && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Check className="w-4 h-4 text-white drop-shadow" />
          </div>
        )}
      </div>
      <span className="text-xs font-sans text-[#242019] text-center leading-tight">{name}</span>
    </button>
  );
}

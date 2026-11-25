import { useEffect, useRef, useState } from 'react';
import { 
  Home, 
  Sparkles, 
  Layers, 
  Terminal, 
  Calendar, 
  Users, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Sparkles },
  { id: 'verticals', label: 'Verticals', icon: Layers },
  { id: 'projects', label: 'Projects', icon: Terminal },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'team', label: 'Crew', icon: Users },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isVertical, setIsVertical] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const hoverTimerRef = useRef<number | null>(null);
  const expandTimerRef = useRef<number | null>(null);
  const unhoverTimerRef = useRef<number | null>(null);
  const rotateBackTimerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearAllTimers = () => {
    if (hoverTimerRef.current) { window.clearTimeout(hoverTimerRef.current); hoverTimerRef.current = null; }
    if (expandTimerRef.current) { window.clearTimeout(expandTimerRef.current); expandTimerRef.current = null; }
    if (unhoverTimerRef.current) { window.clearTimeout(unhoverTimerRef.current); unhoverTimerRef.current = null; }
    if (rotateBackTimerRef.current) { window.clearTimeout(rotateBackTimerRef.current); rotateBackTimerRef.current = null; }
  };

  const handleMouseEnter = () => {
    clearAllTimers();

    // Stage 1 (140ms delay): Hamburger starts rotating smoothly from horizontal to vertical
    hoverTimerRef.current = window.setTimeout(() => {
      setIsVertical(true);
    }, 140);

    // Stage 2 (380ms delay): Dynamic Island pill smoothly expands horizontally
    expandTimerRef.current = window.setTimeout(() => {
      setIsExpanded(true);
    }, 380);
  };

  const handleMouseLeave = () => {
    clearAllTimers();

    // Added noticeable delay (350ms) on unhover before closing
    unhoverTimerRef.current = window.setTimeout(() => {
      // Retract the island smoothly
      setIsExpanded(false);

      // Smoothly rotate the hamburger from vertical back to horizontal with full transition
      rotateBackTimerRef.current = window.setTimeout(() => {
        setIsVertical(false);
      }, 100);
    }, 350);
  };

  const toggleExpand = () => {
    clearAllTimers();
    if (!isExpanded) {
      setIsVertical(true);
      expandTimerRef.current = window.setTimeout(() => {
        setIsExpanded(true);
      }, 250);
    } else {
      setIsExpanded(false);
      rotateBackTimerRef.current = window.setTimeout(() => {
        setIsVertical(false);
      }, 150);
    }
  };

  const handleSelect = (id: string) => {
    clearAllTimers();
    setIsExpanded(false);
    rotateBackTimerRef.current = window.setTimeout(() => {
      setIsVertical(false);
    }, 150);
    onNavigate(id);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        clearAllTimers();
        setIsExpanded(false);
        setIsVertical(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      clearAllTimers();
    };
  }, []);

  return (
    <nav 
      className="fixed top-4 right-8 sm:top-5 sm:right-16 md:right-24 z-50 flex items-center justify-end" 
      aria-label="Main Navigation"
    >
      <div 
        ref={containerRef}
        className="relative flex items-center justify-end"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Desktop Dynamic Island */}
        <div 
          className={`hidden sm:flex items-center rounded-full overflow-hidden cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isExpanded 
              ? 'bg-black/95 border border-cyan-500/50 shadow-[0_0_30px_rgba(103,232,249,0.25),0_12px_35px_rgba(0,0,0,0.85)] pl-2 pr-4 py-1.5 gap-2.5 max-w-[720px] min-w-[48px] h-12' 
              : 'bg-black/90 border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.7),0_0_12px_rgba(255,255,255,0.08)] max-w-[48px] min-w-[48px] h-12 justify-center px-0 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(103,232,249,0.35)]'
          }`}
          onClick={toggleExpand}
        >
          {/* Hamburger Icon Anchor: Robust HTML div transform for silky-smooth rotation */}
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12">
            <div 
              style={{
                transform: isVertical ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 650ms cubic-bezier(0.34, 1.25, 0.64, 1)'
              }}
              className="flex items-center justify-center origin-center"
            >
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-all duration-500 ${
                  isVertical 
                    ? 'stroke-[#67E8F9] drop-shadow-[0_0_8px_rgba(103,232,249,0.6)]' 
                    : 'stroke-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                }`}
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </div>
          </div>

          {/* Expanded Content: Fades and collapses cleanly on unhover with zero text wrapping */}
          <div 
            className={`flex items-center gap-2.5 flex-nowrap overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isExpanded 
                ? 'max-w-[620px] opacity-100 scale-100 delay-100' 
                : 'max-w-0 opacity-0 scale-95 duration-300 pointer-events-none'
            }`}
          >
            {/* Divider */}
            <div className="h-4 w-[1px] bg-white/20 flex-shrink-0" />

            {/* Navigation Option Buttons */}
            <div className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(item.id);
                    }}
                    className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-cyan-500/20 text-[#67E8F9] border border-cyan-400/40 shadow-[0_0_12px_rgba(103,232,249,0.3)] font-bold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? 'text-cyan-300' : 'text-white/70 group-hover:text-white'
                    }`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_4px_#22d3ee]"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Trigger Button */}
        <button
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-label="Toggle navigation menu"
          className={`sm:hidden relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 cursor-pointer ${
            isExpanded 
              ? 'bg-black text-cyan-400 border-cyan-400/50 shadow-[0_0_20px_rgba(103,232,249,0.35)]' 
              : 'bg-black/90 border-white/30 shadow-lg'
          }`}
        >
          <div 
            style={{
              transform: isVertical ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 650ms cubic-bezier(0.34, 1.25, 0.64, 1)'
            }}
            className="flex items-center justify-center origin-center"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-colors duration-500 ${
                isVertical ? 'stroke-[#67E8F9]' : 'stroke-white'
              }`}
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
        </button>

        {/* Mobile Floating Island Dropdown */}
        {isExpanded && (
          <div className="sm:hidden absolute right-0 top-14 w-56 rounded-2xl bg-black/95 backdrop-blur-2xl border border-cyan-500/30 p-2 shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(103,232,249,0.18)] flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-200">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-[#67E8F9] font-bold border border-cyan-400/30'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-white/70'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

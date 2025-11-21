import { Menu, Settings, User, Sparkles } from "lucide-react";

function Header({ onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            onClick={onToggleSidebar}
            aria-label="Toggle navigation"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-amber-400 animate-pulse" />
            <div className="text-white font-semibold tracking-tight">Aurastory</div>
            <span className="text-xs text-slate-400 bg-white/5 rounded px-2 py-0.5 border border-white/10">AI Audiobooks</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 border border-white/10 transition-colors">
            <Sparkles size={16} className="text-amber-300" />
            <span>Fast Mode</span>
          </button>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">
            <Settings size={18} />
          </button>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
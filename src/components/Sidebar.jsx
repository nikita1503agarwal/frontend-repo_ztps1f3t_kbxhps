import { BookOpen, Users, Map, Timer, Settings, Store, Waves, Upload, LayoutTemplate, Library, Package } from "lucide-react";

function Sidebar({ open }) {
  return (
    <aside className={`${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:sticky top-16 left-0 z-20 h-[calc(100vh-4rem)] w-80 bg-slate-900/70 backdrop-blur border-r border-white/10 transition-transform`}>
      <div className="p-4 space-y-2">
        <div className="text-xs uppercase tracking-wider text-slate-400 px-2">Project</div>
        <nav className="space-y-1">
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#characters">
            <Users size={18} className="text-fuchsia-300" /> Characters
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#chapter-map">
            <Map size={18} className="text-blue-300" /> Chapter Map
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#queue">
            <Timer size={18} className="text-emerald-300" /> Processing Queue
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#rendering">
            <Waves size={18} className="text-cyan-300" /> Rendering Modes
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#player">
            <BookOpen size={18} className="text-amber-300" /> Audio Player
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#scenes">
            <LayoutTemplate size={18} className="text-rose-300" /> Scenes & Emotions
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#consistency">
            <Settings size={18} className="text-violet-300" /> Consistency
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#marketplace">
            <Store size={18} className="text-indigo-300" /> Marketplace
          </a>
          <a className="group flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 border border-transparent hover:border-white/10" href="#export">
            <Package size={18} className="text-teal-300" /> Export
          </a>
        </nav>
        <div className="pt-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 px-2">Input</div>
          <div className="mt-2">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10">
              <Upload size={18} /> Upload/Paste Chapter
            </button>
          </div>
        </div>
        <div className="pt-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 px-2">Library</div>
          <div className="mt-2 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-transparent border border-white/10 text-slate-300 hover:bg-white/5">
              <Library size={18} /> My Novels
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
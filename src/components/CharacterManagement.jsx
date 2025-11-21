import { Pencil, User, ChevronRight, History, Sparkles, Tags, AudioLines, Quote, Wand2, AlertTriangle } from 'lucide-react'

function CharacterCard() {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/7.5 transition-colors">
      <div className="flex items-start gap-4">
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="w-12 h-12 rounded-full object-cover" />
          <span className="absolute -bottom-1 -right-1 text-[10px] px-1.5 py-0.5 rounded bg-fuchsia-500 text-white">F</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="truncate">
              <div className="text-white font-semibold">Aria Valen</div>
              <div className="text-xs text-slate-400">Detected: Female • Override: Neutral</div>
            </div>
            <button className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10">
              <Pencil size={12} /> Edit
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div className="bg-black/20 border border-white/10 rounded-lg px-3 py-2">
              <div className="text-slate-400 text-xs">Voice</div>
              <div className="text-slate-200">Nova • Warm</div>
            </div>
            <div className="bg-black/20 border border-white/10 rounded-lg px-3 py-2">
              <div className="text-slate-400 text-xs">Emotion</div>
              <div className="text-slate-200">Calm +2</div>
            </div>
            <div className="bg-black/20 border border-white/10 rounded-lg px-3 py-2">
              <div className="text-slate-400 text-xs">Pitch/Speed</div>
              <div className="text-slate-200">-1 / 1.05x</div>
            </div>
            <div className="bg-black/20 border border-white/10 rounded-lg px-3 py-2">
              <div className="text-slate-400 text-xs">Mode</div>
              <div className="text-slate-200">Studio</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <History size={12} /> Voice Memory active • 4 changes in timeline
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300"><Tags size={12}/>Alias: "Aria V."</span>
        <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300"><Quote size={12}/>Baseline: "Warm but guarded"</span>
        <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300"><AudioLines size={12}/>History</span>
      </div>
    </div>
  )
}

function CharacterManagement() {
  return (
    <section id="characters" className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white font-semibold">Characters</h2>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-sm font-semibold">Add Character</button>
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/10">Auto-detect</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
      <div className="mt-4 bg-amber-500/10 border border-amber-400/20 rounded-lg p-3 text-amber-200 text-sm flex items-center gap-2">
        <AlertTriangle size={16}/> Consistency Analyzer: 2 similar voices detected, 1 unassigned character
      </div>
    </section>
  )
}

export default CharacterManagement
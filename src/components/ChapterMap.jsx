import { Play, Activity, MessageSquare, MousePointerClick } from 'lucide-react'

function ChapterMap() {
  return (
    <section id="chapter-map" className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white font-semibold">Chapter Character Map</h2>
        <div className="text-slate-300 text-sm">Chapter 12 • The Midnight Bridge</div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-slate-300 text-sm mb-2">Emotion Curve</div>
          <div className="h-40 rounded-lg bg-gradient-to-b from-emerald-400/20 via-fuchsia-400/10 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.25),transparent_50%)]" />
            <div className="absolute inset-x-0 bottom-2 px-4 text-xs text-slate-300">Drag points to edit emotion curve</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-sm font-semibold">Preview 10s</button>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/10">Reset</button>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-slate-300 text-sm mb-2">Characters in this chapter</div>
          <div className="space-y-2">
            {['Aria','Captain Rook','Narrator','Jax'].map((c,i)=> (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/10">
                <div className="flex items-center gap-2">
                  <img src={`https://i.pravatar.cc/80?img=${i+5}`} alt="" className="w-8 h-8 rounded-full" />
                  <div className="text-slate-200">{c}</div>
                </div>
                <button className="text-xs px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10">Voice</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChapterMap
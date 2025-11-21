import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'

function AudioPlayer() {
  return (
    <section id="player" className="py-8">
      <h2 className="text-xl text-white font-semibold mb-4">Streaming Audio Player</h2>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          {["Aria","Rook","Narrator","Jax"].map((name,i)=> (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full border-2`} style={{borderColor: ['#f0abfc','#93c5fd','#fde68a','#6ee7b7'][i]}}>
                <img src={`https://i.pravatar.cc/80?img=${i+20}`} alt="" className="w-full h-full rounded-full" />
              </div>
              <span className="text-[10px] text-slate-400 mt-1">{name}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 relative h-24 rounded-lg bg-black/40 border border-white/10 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-12">
            <div className="col-span-3 bg-fuchsia-400/20" />
            <div className="col-span-2 bg-blue-400/20" />
            <div className="col-span-5 bg-amber-400/20" />
            <div className="col-span-2 bg-emerald-400/20" />
          </div>
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_80%,rgba(252,231,243,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(191,219,254,0.25),transparent_50%)]" />
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">Real-time streamed waveform</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-white/10 text-white border border-white/10 flex items-center justify-center"><SkipBack size={16}/></button>
            <button className="w-12 h-12 rounded-lg bg-white text-slate-900 flex items-center justify-center"><Pause size={18}/></button>
            <button className="w-10 h-10 rounded-lg bg-white/10 text-white border border-white/10 flex items-center justify-center"><SkipForward size={16}/></button>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/10 text-sm">Preview 10s</button>
        </div>
      </div>
    </section>
  )
}

export default AudioPlayer
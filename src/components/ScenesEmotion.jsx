import { Flame, Heart, Laugh, Moon, CloudRain, Zap } from 'lucide-react'

function ScenesEmotion() {
  return (
    <section id="scenes" className="py-8">
      <h2 className="text-xl text-white font-semibold mb-4">Scene Presets & Emotion Controls</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[{icon:Moon,label:'Whisper'},{icon:CloudRain,label:'Sadness'},{icon:Heart,label:'Romance'},{icon:Zap,label:'Action'},{icon:Flame,label:'Suspense'},{icon:Laugh,label:'Comedy'}].map((p,i)=> (
          <button key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-left text-slate-200 hover:bg-white/10">
            <p.icon />
            <div>
              <div className="font-semibold">{p.label}</div>
              <div className="text-xs text-slate-400">Apply to selected scenes</div>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm mb-2">Emotion Curve Editor</div>
        <div className="h-40 rounded-lg bg-gradient-to-b from-fuchsia-400/20 via-amber-400/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_30%_60%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(251,191,36,0.25),transparent_50%)]" />
          <div className="absolute inset-x-0 bottom-2 px-4 text-xs text-slate-300">Interactive editor placeholder</div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-sm font-semibold">Apply</button>
          <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/10">Reset</button>
        </div>
      </div>
    </section>
  )
}

export default ScenesEmotion
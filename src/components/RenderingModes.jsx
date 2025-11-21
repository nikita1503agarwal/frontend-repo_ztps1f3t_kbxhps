import { Radio, BadgeDollarSign, Gauge } from 'lucide-react'

function RenderingModes() {
  return (
    <section id="rendering" className="py-8">
      <h2 className="text-xl text-white font-semibold mb-4">Rendering Modes</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio size={18} className="text-emerald-300" />
              <div className="text-white font-semibold">Draft Mode</div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20"><BadgeDollarSign size={14}/> Cheaper</span>
          </div>
          <p className="text-slate-300 text-sm mt-2">Self-hosted, fast and economical for iteration.</p>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
            <div>Cost: ~$0.12 / 1k words</div>
            <div className="inline-flex items-center gap-1"><Gauge size={14}/> ETA: ~1.2x realtime</div>
          </div>
          <button className="mt-3 w-full px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10">Use Draft</button>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio size={18} className="text-indigo-300" />
              <div className="text-white font-semibold">Studio Mode</div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-indigo-500/10 text-indigo-200 border border-indigo-400/20">Premium</span>
          </div>
          <p className="text-slate-300 text-sm mt-2">Google/ElevenLabs quality with premium expressiveness.</p>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
            <div>Cost: ~$0.60 / 1k words</div>
            <div className="inline-flex items-center gap-1"><Gauge size={14}/> ETA: ~0.8x realtime</div>
          </div>
          <button className="mt-3 w-full px-3 py-2 rounded-lg bg-white text-slate-900 font-semibold">Use Studio</button>
        </div>
      </div>
    </section>
  )
}

export default RenderingModes
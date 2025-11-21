import { Clock, Zap, Recycle, CheckCircle2 } from 'lucide-react'

function Queue() {
  return (
    <section id="queue" className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white font-semibold">Processing Queue</h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20"><Recycle size={14}/> Batch Mode</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-500/10 text-amber-200 border border-amber-400/20"><Zap size={14}/> Fast Mode</span>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { status: 'Pending', eta: '3m', mode: 'Draft' },
          { status: 'Batching', eta: '2m', mode: 'Draft' },
          { status: 'Rendering', eta: '45s', mode: 'Studio' },
          { status: 'Ready', eta: '—', mode: 'Studio' },
        ].map((item,i)=> (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-slate-300"/>
              <div>
                <div className="text-slate-200">Chapter {11 + i}</div>
                <div className="text-xs text-slate-400">{item.mode} • {item.status}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-400">ETA {item.eta}</span>
              {item.status === 'Ready' ? (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20"><CheckCircle2 size={14}/> Ready</span>
              ) : (
                <button className="px-2.5 py-1.5 rounded bg-white/10 text-white border border-white/10">Expedite</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Queue
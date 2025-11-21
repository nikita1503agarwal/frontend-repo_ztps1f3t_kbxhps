import { AlertTriangle, ShieldCheck, UserX, Volume2 } from 'lucide-react'

function Consistency() {
  return (
    <section id="consistency" className="py-8">
      <h2 className="text-xl text-white font-semibold mb-4">Consistency Analyzer</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-4">
          <div className="text-emerald-200 text-sm">Overall Score</div>
          <div className="text-3xl font-bold text-white mt-1">87</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-amber-500/10 p-4">
          <div className="text-amber-200 text-sm inline-flex items-center gap-2"><Volume2 size={16}/> Similar Voices</div>
          <div className="text-white mt-1 text-sm">2 pairs flagged</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-rose-500/10 p-4">
          <div className="text-rose-200 text-sm inline-flex items-center gap-2"><UserX size={16}/> Unassigned</div>
          <div className="text-white mt-1 text-sm">1 character</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-indigo-500/10 p-4">
          <div className="text-indigo-200 text-sm inline-flex items-center gap-2"><ShieldCheck size={16}/> Gender mismatch</div>
          <div className="text-white mt-1 text-sm">0 issues</div>
        </div>
      </div>
      <div className="mt-4 text-slate-300 text-sm">Resolve flagged items or apply a template for best results.</div>
    </section>
  )
}

export default Consistency
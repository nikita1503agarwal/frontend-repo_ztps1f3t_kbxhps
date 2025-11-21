import { ShoppingBag, Star, ArrowRight, LineChart } from 'lucide-react'

function Marketplace() {
  return (
    <section id="marketplace" className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl text-white font-semibold">Template Marketplace</h2>
        <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/10 text-sm">Creator Dashboard</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map((i)=> (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white font-semibold">Voice Pack {i}</div>
              <div className="inline-flex items-center gap-1 text-amber-300 text-sm"><Star size={14}/> 4.{i%5}</div>
            </div>
            <div className="text-slate-300 text-sm">Curated voices and emotion presets for sci‑fi, romance, comedy and more.</div>
            <div className="mt-3 flex items-center justify-between">
              <button className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-sm font-semibold">Apply Template</button>
              <button className="text-slate-300 text-sm inline-flex items-center gap-1">Details <ArrowRight size={14}/></button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-2 text-slate-200"><LineChart size={16}/> Creator earnings & analytics coming soon</div>
      </div>
    </section>
  )
}

export default Marketplace
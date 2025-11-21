import { Download, Layers, MapPin } from 'lucide-react'

function ExportOptions() {
  return (
    <section id="export" className="py-8">
      <h2 className="text-xl text-white font-semibold mb-4">Export</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-white font-semibold">Audio Formats</div>
          <div className="mt-2 flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-white text-slate-900 text-sm font-semibold">MP3</button>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/10">OGG</button>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-white font-semibold inline-flex items-center gap-2"><Layers size={16}/> Per-character Tracks</div>
          <div className="mt-2 text-slate-300 text-sm">Download as ZIP</div>
          <button className="mt-3 px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/10">Prepare ZIP</button>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-white font-semibold inline-flex items-center gap-2"><MapPin size={16}/> Chapter Markers</div>
          <div className="mt-2 text-slate-300 text-sm">Toggle markers for players</div>
          <div className="mt-3 flex items-center gap-2">
            <label className="inline-flex items-center gap-2 text-slate-300 text-sm">
              <input type="checkbox" className="accent-white" defaultChecked /> Include markers
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold inline-flex items-center gap-2"><Download size={16}/> Download</button>
        <button className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">Re-render chapters</button>
      </div>
    </section>
  )
}

export default ExportOptions
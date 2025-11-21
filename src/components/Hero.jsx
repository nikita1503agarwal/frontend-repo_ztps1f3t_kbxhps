import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[380px] sm:h-[420px] lg:h-[520px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900" />
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Multi-character AI Audiobooks for Novel Chapters
              </h1>
              <p className="mt-3 text-slate-300 max-w-2xl">
                Upload or paste chapters, assign voices per character, and render expressive audio with consistent voice memory across your entire novel.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">
                New Project
              </button>
              <button className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10">
                Import Chapter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
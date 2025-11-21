import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import CharacterManagement from './components/CharacterManagement'
import ChapterMap from './components/ChapterMap'
import Queue from './components/Queue'
import RenderingModes from './components/RenderingModes'
import AudioPlayer from './components/AudioPlayer'
import ScenesEmotion from './components/ScenesEmotion'
import Consistency from './components/Consistency'
import Marketplace from './components/Marketplace'
import ExportOptions from './components/ExportOptions'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.07),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.05),transparent_45%)]" />

      <Header onToggleSidebar={() => setSidebarOpen(v => !v)} />

      <div className="relative">
        <Sidebar open={sidebarOpen} />

        <main className="lg:ml-80">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <CharacterManagement />
                <ChapterMap />
              </div>
              <div className="lg:col-span-1">
                <Queue />
                <RenderingModes />
              </div>
            </div>

            <AudioPlayer />
            <ScenesEmotion />
            <Consistency />
            <Marketplace />
            <ExportOptions />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
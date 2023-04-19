import { Footer } from '@/components/Footer'
import { Playlist } from '@/components/Playlist'
import { PlaylistRecomendation } from '@/components/Playlist/PlaylistRecomendations'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <Playlist />

          <h2 className="font-semibold text-3xl mt-10">
            Made for Marcos Duarte
          </h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <PlaylistRecomendation />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

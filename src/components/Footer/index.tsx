import { MusicPlaying } from './MusicPlaying'
import { PlayerMusicControl } from './PlayMusicControl'
import { MenuMusicPlay } from './MenuMusicPlay'

export function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <MusicPlaying nameMusic="Rope" band="Foo Figthers" />
        <PlayerMusicControl />
        <MenuMusicPlay />
      </footer>
    </>
  )
}

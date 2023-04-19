import { Play } from 'lucide-react'
import Image from 'next/image'

interface PlaylistProps {
  urlImage: string
  titlePlaylist: string
}

export function PlaylistLink({ urlImage, titlePlaylist }: PlaylistProps) {
  return (
    <>
      <a
        href="#"
        className="bg-white/5 group rounded flex items-center gap-4 overflow-hiden hover:bg-white/10 transitions-colors"
      >
        <Image
          src={urlImage}
          width={120}
          height={120}
          alt="Capa do album Ride the Lightining"
        />
        <strong>{titlePlaylist}</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
    </>
  )
}

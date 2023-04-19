import Image from 'next/image'

interface MusicPlayingProps {
  nameMusic: string
  band: string
}

export function MusicPlaying({ nameMusic, band }: MusicPlayingProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          src="/album.jpg"
          width={56}
          height={56}
          alt="Capa do album Ride the Lightining"
        />
        <div className="flex flex-col">
          <strong className="font-normal">{nameMusic}</strong>
          <span className="text-sx text-zinc-400">{band}</span>
        </div>
      </div>
    </>
  )
}

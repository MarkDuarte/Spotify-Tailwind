import Image from 'next/image'

interface PlaylistRecomendationsProps {
  urlImage: string
  title: string
  subtitle: string
}

export function PlaylistLinkRecomendations({
  urlImage,
  title,
  subtitle,
}: PlaylistRecomendationsProps) {
  return (
    <>
      <a
        href="#"
        className="bg-white/5 p-3 flex flex-col rounded-md gap-2 hover:bg-white/10"
      >
        <Image
          src={urlImage}
          className="w-full"
          width={120}
          height={120}
          alt="Capa do album Ride the Lightining"
        />
        <strong>{title}</strong>
        <span className="text-sm text-zinc-400">{subtitle}</span>
      </a>
    </>
  )
}

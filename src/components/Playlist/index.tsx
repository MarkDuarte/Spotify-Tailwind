import { PlaylistLink } from './PlaylistLink'

export function Playlist() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <PlaylistLink urlImage="/album.jpg" titlePlaylist="Wasting Light" />
        <PlaylistLink urlImage="/album.jpg" titlePlaylist="Wasting Light" />
        <PlaylistLink urlImage="/album.jpg" titlePlaylist="Wasting Light" />
        <PlaylistLink urlImage="/album.jpg" titlePlaylist="Wasting Light" />
        <PlaylistLink urlImage="/album.jpg" titlePlaylist="Wasting Light" />
        <PlaylistLink urlImage="/album.jpg" titlePlaylist="Wasting Light" />
      </div>
    </>
  )
}

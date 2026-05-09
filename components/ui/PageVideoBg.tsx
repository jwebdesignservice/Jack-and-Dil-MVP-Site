// Poster is a 12KB still extracted from frame 0 of hero-bg.mp4 so the
// poster→video swap is visually identical (no flash of a different image).
export default function PageVideoBg() {
  return (
    <div aria-hidden="true" className="bg-page-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-bg-poster.webp"
        disablePictureInPicture
        disableRemotePlayback
        width={1920}
        height={1080}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

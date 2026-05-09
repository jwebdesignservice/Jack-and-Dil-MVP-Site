// Server component — purely presentational, no JS shipped to client.
// `preload="metadata"` keeps the initial network cost tiny (only the moov
// header, ~a few KB) so the LCP isn't blocked by the full mp4 download,
// while still letting the video start playing as soon as the browser is
// idle. The poster image is the same WebP we already use elsewhere so it
// piggybacks on the next/image cache.
export default function PageVideoBg() {
  return (
    <div aria-hidden="true" className="bg-page-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/Images/Hero illustration.webp"
        // disable picture-in-picture & remote-playback prompts on supporting browsers
        disablePictureInPicture
        disableRemotePlayback
        // Dimensions stop CLS from the <video> element before metadata loads.
        width={1920}
        height={1080}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

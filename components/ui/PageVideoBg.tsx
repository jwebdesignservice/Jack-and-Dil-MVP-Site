export default function PageVideoBg() {
  return (
    <div aria-hidden="true" className="bg-page-video">
      <video autoPlay loop muted playsInline poster="/Images/Hero illustration.webp">
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

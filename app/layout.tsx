import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'FastLaunch — Production-Ready MVPs',
  description: 'We build production-ready MVPs for ambitious founders in 3-14 days.',
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJKCWBW5');` }}/>
      </head>
      <body className="bg-black text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJKCWBW5" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}/></noscript>
        {/* Floating dots — left gutter only (hidden below xl to prevent negative-width overflow) */}
        <div className="fixed top-0 bottom-0 pointer-events-none overflow-hidden hidden xl:block" style={{ left: 0, width: 'calc(50% - 600px)', zIndex: 8 }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: `${4 + (i % 3)}px`,
                height: `${4 + (i % 3)}px`,
                left: `${15 + i * 12}%`,
                bottom: '-20px',
                background: '#F97316',
                opacity: i % 2 === 0 ? 0.6 : 0.35,
                boxShadow: '0 0 8px #F97316',
                animation: `floatUp ${7 + (i % 5) * 2}s linear ${i * 0.8}s infinite`,
              }}/>
          ))}
        </div>
        {/* Floating dots — right gutter only (hidden below xl to prevent negative-width overflow) */}
        <div className="fixed top-0 bottom-0 pointer-events-none overflow-hidden hidden xl:block" style={{ right: 0, width: 'calc(50% - 600px)', zIndex: 8 }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: `${4 + (i % 3)}px`,
                height: `${4 + (i % 3)}px`,
                left: `${10 + i * 13}%`,
                bottom: '-20px',
                background: '#F97316',
                opacity: i % 2 === 0 ? 0.6 : 0.35,
                boxShadow: '0 0 8px #F97316',
                animation: `floatUp ${8 + (i % 4) * 2}s linear ${(i + 3) * 0.7}s infinite`,
              }}/>
          ))}
        </div>

        {/* Fixed vertical side lines — must be last in DOM to overlay section backgrounds */}
        <div className="fixed top-0 bottom-0 w-[1px] pointer-events-none hidden xl:block"
          style={{ left: 'calc(50% - 620px)', zIndex: 9999, background: 'linear-gradient(to bottom, transparent 0%, rgba(249,115,22,0.25) 15%, rgba(249,115,22,0.25) 85%, transparent 100%)' }} />
        <div className="fixed top-0 bottom-0 w-[1px] pointer-events-none hidden xl:block"
          style={{ right: 'calc(50% - 620px)', zIndex: 9999, background: 'linear-gradient(to bottom, transparent 0%, rgba(249,115,22,0.25) 15%, rgba(249,115,22,0.25) 85%, transparent 100%)' }} />
        <Nav />
        {children}
        <Footer />

        {/* WhatsApp floating button */}
        <a href="https://wa.me/447700900000" target="_blank" rel="noopener noreferrer"
          className="fixed z-[99998] group"
          style={{ bottom: '21px', right: '21px' }}
          aria-label="Chat on WhatsApp">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity"/>
          <span className="absolute inset-[-8px] rounded-full opacity-40 group-hover:opacity-70 transition-opacity"
            style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.4) 0%, transparent 70%)', filter: 'blur(10px)' }}/>
          <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
        </a>
      </body>
    </html>
  )
}


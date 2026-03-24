import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'LaunchFast — Production-Ready MVPs',
  description: 'We build production-ready MVPs for ambitious founders in 3-14 days.',
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
        {/* Floating dots — left gutter only */}
        <div className="fixed top-0 bottom-0 pointer-events-none overflow-hidden" style={{ left: 0, width: 'calc(50% - 600px)', zIndex: 8 }}>
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
        {/* Floating dots — right gutter only */}
        <div className="fixed top-0 bottom-0 pointer-events-none overflow-hidden" style={{ right: 0, width: 'calc(50% - 600px)', zIndex: 8 }}>
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
      </body>
    </html>
  )
}

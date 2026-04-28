import { Inter, Syne } from 'next/font/google'
import './globals.css'
// import Aoscompo from '@/lib/utils/aos'
import ScrollToTop from './components/scroll-to-top'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
<body className={`${inter.className} ${syne.variable} bg-white`}>


        {/* <Aoscompo> */}
          {/* ✅ Wrapper ensures all content sits above the background */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Header />
            {children}
            <Footer />
          </div>
        {/* </Aoscompo> */}

        <ScrollToTop />

      </body>
    </html>
  )
}
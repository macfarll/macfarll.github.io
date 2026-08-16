import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

const Navigation = () => (
  <nav className="portfolio-nav">
    <a href="/">About</a>
    <a href="/projects/goldstar">GoldStar</a>
    <a href="/projects/microgrid">Microgrid Capstone Poster</a>
    <a href="/documents/LM-Resume.pdf">Resume</a>
    <a href="https://github.com/macfarll">GitHub</a>
  </nav>
)

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Navigation />

      <Component {...pageProps} />
    </>
  )
}
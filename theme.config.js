const YEAR = new Date().getFullYear()

export default {
  logo: <strong>Logan MacFarland</strong>,

  navbar: {
    extraContent: (
      <nav className="portfolio-nav">
        <a href="/">About</a>
        <a href="/projects/goldstar">GoldStar</a>
        <a href="/projects/microgrid">Microgrid Capstone Poster</a>
        <a href="/documents/LM-Resume.pdf">Resume</a>
        <a href="https://github.com/macfarll">GitHub</a>
      </nav>
    )
  },

  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      © {YEAR} Logan MacFarland.
    </small>
  )
}
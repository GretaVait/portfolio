// Base
import Head from 'next/head'

// Components
import Header from '@components/Header'

// Sections
import Intro from '@sections/Intro'
import Projects from '@sections/Projects'
import About from '@sections/About'
import Contact from '@sections/Contact'
import Seperator from '@components/Seperator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greta | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        <div>
          <div className="container">
            <Seperator />
          </div>
        </div>

        <Intro />

        <Projects />

        <About />

        <Contact />

      </main>
    </div>
  )
}

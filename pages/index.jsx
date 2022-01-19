// Base
import Head from 'next/head'
import Image from 'next/image'

// Components
import Header from '@components/Header'

// Sections
import Intro from '@sections/Intro'
import Projects from '@sections/Projects'
import About from '@sections/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front-End Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        <Intro />

        <Projects />

        <About />

      </main>
    </div>
  )
}

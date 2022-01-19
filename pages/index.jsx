// Base
import Head from 'next/head'
import Image from 'next/image'

// Components
import Header from '@components/Header'

// Sections
import Intro from '@sections/Intro'

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

      </main>
    </div>
  )
}

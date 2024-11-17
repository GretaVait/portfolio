'use client'

// Base
import Image from 'next/image'

// Packages
import { motion } from 'framer-motion'

// Helpers
import { transformYAnimation } from '@helpers/options/animations'

// Components
import Container from '@components/helpers/layout/container/Container'
import Flex from '@components/helpers/flex/Flex'
import Title from '@components/title/Title'

// Styles
import styles from './Projects.module.sass'

// Data
import logos from '@data/project-logos.json'

const Projects = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Title
          heading="Projects"
          ghostHeading="I Worked On"
          headingColor="white"
          ghostHeadingColor="black-90"
          textAlign="center"
          className={styles.heading}
        />

        <motion.div
          transition={{
            delay: 0.6,
            duration: 0.6
          }}
          {...transformYAnimation}
        >
          <Flex
            wrap="wrap"
            columnGap={{ sm: 2, lg: 4 }}
            rowGap={{ sm: 2 }}
            className={styles.list}
          >
            {logos.map((item, index) => (
              <Flex center className={styles.logo} key={index}>
                <LogoBox image={item} />
              </Flex>
            ))}
          </Flex>
        </motion.div>
      </Container>
    </section>
  )
}

interface LogoBoxProps {
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
}

const LogoBox = ({ image }: LogoBoxProps) => {
  return (
    <div>
      <Image {...image} alt={image.alt} />
    </div>
  )
}

export default Projects

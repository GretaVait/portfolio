'use client'

// Base
import Link from 'next/link'

// Packages
import { motion } from 'framer-motion'

// Helpers
import {
  scaleAnimation,
  scaleXAnimation,
  transformYAnimation
} from '@helpers/options/animations'

// Components
import Container from '@components/helpers/layout/container/Container'
import Title from '@components/title/Title'
import Flex from '@components/helpers/flex/Flex'
import Text from '@components/helpers/text/Text'

// Styles
import styles from './Intro.module.sass'

// Icons
import FlowerIcon from 'icons/Icons'

const Intro = () => {
  return (
    <section className={styles.section}>
      <motion.div
        transition={{
          delay: 0.4,
          duration: 0.6
        }}
        {...scaleXAnimation}
        className={styles.decoration}
      ></motion.div>

      <Container>
        <Flex flexDirection="column" rowGap={{ sm: 7, lg: 12 }}>
          <Title
            heading="Front-end developer"
            ghostHeading="Design enthusiast"
            className={styles.title}
          />

          <Flex
            flexDirection="column"
            alignItems="center"
            rowGap={{ sm: 2 }}
            className={styles.contact}
          >
            <motion.div
              transition={{
                delay: 0.4,
                duration: 0.6
              }}
              {...scaleAnimation}
            >
              <FlowerIcon />
            </motion.div>

            <motion.div
              transition={{
                delay: 0.4,
                duration: 0.6
              }}
              {...transformYAnimation}
            >
              <Flex
                alignItems="center"
                columnGap={{ sm: 2 }}
                spacing={{ sm: 1 }}
              >
                <LinkText href="https://www.linkedin.com/in/gvaitiekunaite">
                  Linkedin
                </LinkText>

                <LinkText href="https://github.com/GretaVait">GitHub</LinkText>
              </Flex>
              <Text variant="body-2" align="center">
                Vilnius, Lithuania
              </Text>
            </motion.div>
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}

interface LinkTextProps {
  href: string
  children: React.ReactNode
}

const LinkText = ({ href, children }: LinkTextProps) => {
  return (
    <Link href={href} target="_blank">
      <Text variant="body-2" decoration="underline">
        {children}
      </Text>
    </Link>
  )
}

export default Intro

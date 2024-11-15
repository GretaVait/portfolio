'use client'

// Base
import Link from 'next/link'

// Packages
import { motion } from 'framer-motion'

// Helpers
import { transformYAnimation } from '@helpers/options/animations'

// Components
import Container from '@components/helpers/layout/container/Container'
import Row from '@components/helpers/layout/grid/Row'
import Column from '@components/helpers/layout/grid/Column'
import Text from '@components/helpers/text/Text'
import IconTitle from '@components/icon-title/IconTitle'
import Flex from '@components/helpers/flex/Flex'

// Styles
import styles from './About.module.sass'

const About = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row position="center">
          <Column column={5} gutter={6}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              rowGap={{ sm: 2, lg: 4 }}
            >
              <IconTitle>Hi, nice to meet you!</IconTitle>

              <motion.div
                transition={{
                  delay: 0.8,
                  duration: 0.6
                }}
                {...transformYAnimation}
              >
                <Text
                  variant="body-1"
                  textColor="orange"
                  align="center"
                  spacing={{ sm: 2 }}
                >
                  As a curious front-end developer, I love crafting beautiful
                  and accessible user experiences. I strive to achieve the best
                  result through code and participating in solving a wide range
                  of challenges.
                </Text>

                <Link href="/images/resume.pdf" target="_blank">
                  <Text
                    variant="title-3"
                    textColor="orange"
                    decoration="underline"
                    align="center"
                    transform="uppercase"
                  >
                    My resume
                  </Text>
                </Link>
              </motion.div>
            </Flex>
          </Column>
        </Row>
      </Container>
    </section>
  )
}

export default About

'use client'

// Base
import Link from 'next/link'

// Packages
import { motion } from 'framer-motion'

// Helpers
import { transformYAnimation } from '@helpers/options/animations'

// Components
import Container from '@components/helpers/layout/container/Container'
import IconTitle from '@components/icon-title/IconTitle'
import Text from '@components/helpers/text/Text'
import Flex from '@components/helpers/flex/Flex'

// Styles
import styles from './Contact.module.sass'

const Contact = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="center"
          rowGap={{ sm: 4, lg: 6 }}
        >
          <IconTitle>Contact me!</IconTitle>

          <motion.div
            transition={{
              delay: 0.6,
              duration: 0.6
            }}
            {...transformYAnimation}
          >
            <Link href="mailto:gretavait@gmail.com">
              <Text variant="title-2" transform="uppercase" align="center">
                gretavait <br /> @gmail <br /> .com
              </Text>
            </Link>
          </motion.div>

          <motion.div
            transition={{
              delay: 0.8,
              duration: 0.6
            }}
            {...transformYAnimation}
          >
            <Text
              variant="body-5"
              transform="uppercase"
              textColor="orange"
              align="center"
            >
              Designed with figma, coded with NextJS. <br /> 2024
            </Text>
          </motion.div>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact

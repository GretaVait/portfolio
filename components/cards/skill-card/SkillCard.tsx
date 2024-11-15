// Base
import Image from 'next/image'

// Packages
import { motion } from 'framer-motion'

// Helpers
import { transformYAnimation } from '@helpers/options/animations'

// Components
import Flex from '@components/helpers/flex/Flex'
import Text from '@components/helpers/text/Text'

// Styles
import styles from './SkillCard.module.sass'

// Placeholders
import imagePlaceholder from '@data/placeholders/image-placeholder.json'

interface SkillCardProps {
  image: {
    src: string
    alt: string
  }
  heading: string
  index: number
  className?: string
}

const SkillCard = ({
  image,
  heading,
  index,
  className = ''
}: SkillCardProps) => {
  return (
    <motion.div
      transition={{
        delay: 0.2 * index,
        duration: 0.4
      }}
      {...transformYAnimation}
      className={`${styles.card} ${className}`}
    >
      <Flex flexDirection="column" rowGap={{ sm: 2, lg: 3 }}>
        <div className={styles.image}>
          <Image
            src={image.src}
            fill
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 800px, 800px"
            placeholder="blur"
            blurDataURL={imagePlaceholder}
            alt={image.alt}
          />
        </div>

        <Text tagName="h2" variant="title-4" textColor="orange">
          {heading}
        </Text>
      </Flex>
    </motion.div>
  )
}

export default SkillCard

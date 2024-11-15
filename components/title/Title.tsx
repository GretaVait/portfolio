// Base
import { DetailedHTMLProps, HTMLAttributes } from 'react'

// Packages
import { motion } from 'framer-motion'

// Helpers
import { transformYAnimation } from '@helpers/options/animations'

// Components
import Text from '@components/helpers/text/Text'

// Styles
import styles from './Title.module.sass'

interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: React.ReactNode
  ghostHeading: React.ReactNode
  textAlign?: 'center' | 'left' | 'right'
  headingColor?: string
  ghostHeadingColor?: string
}

const Title = ({
  heading,
  ghostHeading,
  textAlign = 'left',
  headingColor = 'black',
  ghostHeadingColor = 'black-10',
  ...rest
}: TitleProps) => {
  const { className, ...restProps } = rest

  return (
    <div className={`${styles.title} ${styles[textAlign]} ${className}`}>
      <motion.div
        transition={{
          duration: 0.6
        }}
        {...transformYAnimation}
      >
        <Text
          tagName="h1"
          variant="title-1"
          align={textAlign}
          transform="uppercase"
          textColor={headingColor}
        >
          {heading}
        </Text>
        <Text
          tagName="h1"
          variant="title-1"
          textColor={ghostHeadingColor}
          align={textAlign}
          className={styles.ghostTitle}
          transform="uppercase"
        >
          {ghostHeading}
        </Text>
      </motion.div>
    </div>
  )
}

export default Title

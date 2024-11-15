// Packages
import { motion } from 'framer-motion'

// Helpers
import {
  scaleAnimation,
  transformYAnimation
} from '@helpers/options/animations'

// Components
import Flex from '@components/helpers/flex/Flex'
import Text from '@components/helpers/text/Text'

// Icons
import FlowerIcon from 'icons/Icons'

const IconTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDirection="column" center rowGap={{ sm: 2 }}>
      <motion.div
        transition={{
          duration: 0.6
        }}
        {...scaleAnimation}
      >
        <FlowerIcon color="#FF4004" />
      </motion.div>

      <motion.div
        transition={{
          delay: 0.4,
          duration: 0.6
        }}
        {...transformYAnimation}
      >
        <Text
          variant="body-3"
          fontWeight={600}
          transform="uppercase"
          textColor="orange"
        >
          {children}
        </Text>
      </motion.div>
    </Flex>
  )
}

export default IconTitle

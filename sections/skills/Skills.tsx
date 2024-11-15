'use client'

// Components
import Container from '@components/helpers/layout/container/Container'
import Title from '@components/title/Title'
import Flex from '@components/helpers/flex/Flex'
import SkillCard from '@components/cards/skill-card/SkillCard'

// Styles
import styles from './Skills.module.sass'

// Data
import skillsData from '@data/skills.json'

const Skills = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Title
          heading="My top skills"
          ghostHeading="(Among others)"
          textAlign="center"
          className={styles.heading}
        />

        <Flex
          wrap="wrap"
          columnGap={{ lg: 4 }}
          rowGap={{ sm: 4, lg: 6 }}
          stackMobile
          className={styles.list}
        >
          {skillsData.map((skill, index) => (
            <SkillCard
              image={skill.image}
              heading={skill.heading}
              index={index}
              className={styles.card}
              key={index}
            />
          ))}
        </Flex>
      </Container>
    </section>
  )
}

export default Skills

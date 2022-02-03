// Components
import Seperator from "@components/Seperator"

const About = () => {

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">
          <span>About</span>
          <Seperator />
        </h2>

        <div className="about__list">
          <AboutCard title="Dev" skills={["HTML5, CSS3, JavaScript", "Sass", "Styled Components", "React.js, Redux, Router", "Next.js", "Git", "Node.js, Yarn, Npm"]} />
          <AboutCard title="Tools" skills={["Adobe XD", "Adobe Illustrator", "Figma"]} />
        </div>
      </div>
    </section>
  )
}

const AboutCard = ({ title, skills }) => (
  <div className="about__card">
    <h3 className="about__card__title">{title}</h3>
    <ul className="about__card__list">
      {
        skills.map((skill, index) => (
          <li key={index}><p>{skill}</p></li>
        ))
      }
    </ul>
  </div>
)

export default About
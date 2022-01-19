
const About = () => {

  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">About</h2>

        <div className="about__list">
          <AboutCard title="Dev" skills={["React.js", "HTML", "CSS, Sass", "Next.js"]} />
          <AboutCard title="Tools" skills={["React.js", "HTML", "CSS, Sass", "Next.js"]} />
          <AboutCard title="Design" skills={["React.js", "HTML", "CSS, Sass", "Next.js"]} />
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
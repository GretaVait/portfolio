// Components
import Seperator from "@components/Seperator"

const Projects = () => {

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects__wrapper">
          <h2 className="projects__title">Projects</h2>

          <div className="projects__filter">
            <div className="projects__filter__name active" role="button">
              <h5>Web Development</h5>
            </div>
            <div className="projects__filter__name" role="button">
              <h5>Mobile Deveopment</h5>
            </div>
            <div className="projects__filter__name" role="button">
              <h5>Design</h5>
            </div>
          </div>
        </div>

        <Seperator />
      </div>
    </section>
  )
}

export default Projects

const Projects = () => {

  return (
    <section className="projects">
      <div className="container">
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
    </section>
  )
}

export default Projects
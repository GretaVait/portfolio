// Base
import { useState } from "react"

// Components
import Seperator from "@components/Seperator"

const Projects = () => {
  const [filter, setFilter] = useState("web")

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects__wrapper">
          <h2 className="projects__title">Projects</h2>
        
          <div className="projects__filter">
            <FilterItem label="Web Development" active={filter === "web"} onSelect={() => { setFilter("web") }} />
            {/* <FilterItem label="Mobile Development" active={filter === "mobile"} onSelect={() => { setFilter("mobile") }} /> */}
            <FilterItem label="Design" active={filter === "design"} onSelect={() => { setFilter("design") }} />
          </div>
        </div>

        <Seperator />

        <div className="projects__list">
          <ProjectCard label="Sos Vaikų Kaimai" link="https://sos-vaikukaimai.lt/" active={filter === "web"} />
          <ProjectCard label="Rinvest" link="https://rinvest.lt/" active={filter === "web"} />
          <ProjectCard label="MarkID" link="https://markid.eu/" active={filter === "web"} />
          <ProjectCard label="Pakruojo dvaras" link="https://pakruojo-dvaras.lt/" active={filter === "web"} />
          <ProjectCard label="Shopper" link="https://www.behance.net/gallery/114269853/Grocery-Store-App-Design" active={filter === "design"} />
          <ProjectCard label="Food Rush" link="https://dribbble.com/shots/15192890-Food-Rush-Illustrations" active={filter === "design"} />
        </div>
      </div>
    </section>
  )
}

const FilterItem = ({ label, active, onSelect }) => {
  return (
    <div className={`projects__filter__name ${active ? "active" : ""}`} onClick={onSelect} role="button">
      <h5>{label}</h5>
    </div>
  )
}

const ProjectCard = ({ label, link, active }) => (
  <h3 className={`projects__list__card ${active ? 'active' : ''}`}>
    <a href={link} target="_blank" rel="noopener noreferrer">{label}</a>
  </h3>
)

export default Projects
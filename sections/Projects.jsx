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
            <FilterItem label="Mobile Development" active={filter === "mobile"} onSelect={() => { setFilter("mobile") }} />
            <FilterItem label="Design" active={filter === "design"} onSelect={() => { setFilter("design") }} />
          </div>
        </div>

        <Seperator />

        <div className="projects__list">
          <ProjectCard label="1" active={filter === "web"} />
          <ProjectCard label="2" active={filter === "mobile"} />
          <ProjectCard label="3" active={filter === "design"} />
          <ProjectCard label="4" active={filter === "web"} />
          <ProjectCard label="5" active={filter === "mobile"} />
          <ProjectCard label="6" active={filter === "design"} />
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

const ProjectCard = ({ label, active }) => (
  <div className={`projects__list__card ${active ? 'active' : ''}`}>
    {label}
  </div>
)

export default Projects
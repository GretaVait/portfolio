import scrollTo from "@client-api/smoothScroll"

const Navigation = () => {

  return (
    <>
      <NavigationItem label="Projects" />
      <NavigationItem label="About" />
      <NavigationItem label="Contact" />
      <li><a href="/images/resume.pdf" target="_blank" rel="noreferrer"><h5>Resume</h5></a></li>
    </>
  )
}

const NavigationItem = ({ label }) => (
  <li><h5 onClick={() => { scrollTo('elem', label.toLowerCase(), 0) }} role="button">{label}</h5></li>
)

export default Navigation
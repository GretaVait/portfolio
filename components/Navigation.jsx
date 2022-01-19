import scrollTo from "@client-api/smoothScroll"

const Navigation = ({ open }) => {

  return (
    <nav className={`mobile-navigation ${open ? 'active' : ''}`}>
      <ul>
        <li>
          <h5 onClick={() => { scrollTo('elem', 'projects', -8) }}>Projects</h5>
          <h5 onClick={() => { scrollTo('elem', 'about', -8) }}>About</h5>
          <h5 onClick={() => { scrollTo('elem', 'contact', 0) }}>Contact</h5>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
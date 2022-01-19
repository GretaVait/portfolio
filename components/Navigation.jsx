const Navigation = ({ open }) => {

  return (
    <nav className={`mobile-navigation ${open ? 'active' : ''}`}>
      <ul>
        <li>
          <h5><a href="#">Projects</a></h5>
          <h5><a href="#">About</a></h5>
          <h5><a href="#">Contact</a></h5>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
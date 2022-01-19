import { useState } from "react"
import Navigation from "./Navigation"

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const onToggleNav = () => {
    setToggleNav((prevState) => { return !prevState })
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">

          </div>
          <button className="header__menu" onClick={onToggleNav}><h5>{toggleNav ? 'Close' : 'Menu'}</h5></button>
          <Navigation open={toggleNav} />
        </div>
      </div>
    </header>
  )
}

export default Header
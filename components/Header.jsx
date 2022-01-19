// Base
import { useState } from "react"

// Components
import Navigation from "./Navigation"
import Seperator from "./Seperator"

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
        <Seperator />
      </div>
    </header>
  )
}

export default Header
// Base
import { useState } from "react"

// Lib
import { useMediaQuery } from '@lib/useMediaQuery'

// Components
import Navigation from "./Navigation"
import Seperator from "./Seperator"

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

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

          {
            isDesktop ?
            <ul className="header__navigation">
                <li><h5><a href="#">Projects</a></h5></li>
                <li><h5><a href="#">About</a></h5></li>
                <li><h5><a href="#">Contact</a></h5></li>
              </ul>
            :
              <>
                <button className="header__menu" onClick={onToggleNav}><h5>{toggleNav ? 'Close' : 'Menu'}</h5></button>
                <Navigation open={toggleNav} />
              </>
          }
        </div>
        <Seperator />
      </div>
    </header>
  )
}

export default Header
// Base
import { useState } from "react"

// Lib
import { useMediaQuery } from '@lib/useMediaQuery'

// Components
import Navigation from "./Navigation"
import Image from "next/image"

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
            <Image 
              src="/images/logo.svg"
              width={98}
              height={40}
              alt="Logo"
            />
          </div>

          <nav>
            {
              isDesktop ?
                <ul className="header__navigation">
                  <Navigation />
                </ul>
              :
                <>
                  <button className="header__menu" onClick={onToggleNav}><h5>{toggleNav ? 'Close' : 'Menu'}</h5></button>
                  <ul className={`mobile-navigation ${toggleNav ? 'active' : ''}`}>
                    <Navigation />
                  </ul>
                </>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}



export default Header
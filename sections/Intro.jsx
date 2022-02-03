// Packages
import Typewriter from 'typewriter-effect'

const Intro = () => {

  return (
    <section className="intro" id="intro">
      <div className="container">
        <h5 className="intro__subtitle">Hello, my name is Greta and </h5>
        <h1 className="intro__title">
          <Typewriter
            options={{
              strings: ['I am Front-End Web Developer', 'I love responsive design', 'I am Web Designer', 'I love React!'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </section>
  )
}

export default Intro
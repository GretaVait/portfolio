// Components
import Seperator from "@components/Seperator"

const Contact = () => {

  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">
          <span>Contact</span>
          <Seperator />
        </h2>

        <div className="contact__wrapper">
          <div className="contact__social">
            <h5 className="contact__social__item"><a href="#">Linkedin</a></h5>
            <h5 className="contact__social__item"><a href="#">Github</a></h5>
            <h5 className="contact__social__item"><a href="#">Dribbble</a></h5>
            <h5 className="contact__social__item"><a href="#">Behance</a></h5>
          </div>

          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the.</p>
            <a href="mailto:gretavait@gmail.com" className="contact__link">Send me email</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
// Components
import Seperator from "@components/Seperator"

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">
          <span>Contact</span>
          <Seperator />
        </h2>

        <div className="contact__wrapper">
          <div className="contact__social">
            <ContactItem link="https://www.linkedin.com/in/gvaitiekunaite/" title="Linkedin" />
            <ContactItem link="https://github.com/GretaVait" title="Github" />
            <ContactItem link="https://dribbble.com/gvaitiekunaite" title="Dribbble" />
            <ContactItem link="https://www.behance.net/gretavaitiek" title="Behance" />
          </div>

          <div>
            <p>If you are interested in working with me or want to propose a job offer I am always open to any suggestions.</p>
            <a href="mailto:gretavait@gmail.com" className="contact__link">Send me email</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

const ContactItem = ({ link, title }) => (
  <h5 className="contact__social__item"><a href={link} target="_blank" rel="noreferrer">{title}</a></h5>
)

export default Contact
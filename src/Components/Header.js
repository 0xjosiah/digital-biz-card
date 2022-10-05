import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default () => (
    <div>
        <div className="headshot"></div>
        <h1 className="name">Josiah Webb</h1>
        <h3 className="title">Frontend Developer</h3>
        <a href="https://0xjosiah.xyz" target="_blank" className="website">0xjosiah.xyz</a>
        <div className="contact-links">
            <a className="contact-link__email" href="mailto:hello@josiahwebb.com" target="_blank"><FontAwesomeIcon className="contact-links__icon" icon={solid('envelope')} />Email</a>
            <a className="contact-link__linked" href="https://www.linkedin.com/in/josiahwebb/" target="_blank"><FontAwesomeIcon className="contact-links__icon" icon={brands('linkedin')} />LinkedIn</a>
        </div>
    </div>
)
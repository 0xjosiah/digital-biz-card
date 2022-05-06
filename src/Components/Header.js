import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default () => (
    <div>
        <div className="headshot"></div>
        <h1 className="name">Josiah Webb</h1>
        <h3 className="title">Frontend Developer</h3>
        <a href="" className="website">josiahwebb.com</a>
        <div className="contact-links">
            <a className="contact-link__email" href=""><FontAwesomeIcon className="contact-links__icon" icon={solid('envelope')} />Email</a>
            <a className="contact-link__linked" href=""><FontAwesomeIcon className="contact-links__icon" icon={brands('linkedin')} />LinkedIn</a>
        </div>
    </div>
)
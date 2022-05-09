import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function Footer() {
    return (
        <div className='footer'>
            <a className="social-link" href=""><FontAwesomeIcon className="social-links__icon" icon={brands('twitter')} /></a>
            <a className="social-link" href=""><FontAwesomeIcon className="social-links__icon" icon={brands('instagram')} /></a>
            <a className="social-link" href=""><FontAwesomeIcon className="social-links__icon" icon={brands('github')} /></a>
            <a className="social-link" href=""><FontAwesomeIcon className="social-links__icon" icon={brands('dev')} /></a>
        </div>
    )
}
import { SITE_NAME, YEAR } from '../data/siteInfo'

function getCopyrightSymbol() {
    return '©'
}

function Footer() {
    const foundingYear = 2023

    return (
        <footer className="footer-container">
            <div className="footer-glow"></div>
            <p className="footer-copyright">
                <span className="copyright-icon">{getCopyrightSymbol()}</span>
                <span className="site-brand">{SITE_NAME}</span>
                <span className="footer-sep">•</span>
                <span>All rights reserved, {YEAR}</span>
                <span className="years-pill">{YEAR - foundingYear} years running</span>
            </p>
        </footer>
    )
}
export default Footer
import { SITE_NAME, YEAR } from '../data/siteInfo'

function getCopyrightSymbol() {
    return '©'
}

function Footer() {
    const foundingYear = 2023

    return (
        <p>
            {getCopyrightSymbol()} {`${SITE_NAME} - All rights reserved, ${YEAR}`} ({YEAR - foundingYear} years running)
        </p>
    )
}
export default Footer
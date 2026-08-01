import Divider from './Divider'
import './Hobbies.css'

function Hobbies() {
    const hobbyCount = 3
    const isHobbyist = hobbyCount > 2

    return (
        <section className="hobbies-card">
            <div className="section-header">
                <span className="section-subtitle">Curated Interests</span>
                <h2 className="section-title">Hobbies</h2>
            </div>
            
            <ul className="hobbies-list">
                <li className="hobby-item">
                    <span className="hobby-icon" role="img" aria-label="Reading">📖</span>
                    <span className="hobby-text">Reading</span>
                </li>
                <Divider />
                <li className="hobby-item">
                    <span className="hobby-icon" role="img" aria-label="Swimming">🏊‍♂️</span>
                    <span className="hobby-text">Swimming</span>
                </li>
                <Divider />
                <li className="hobby-item">
                    <span className="hobby-icon" role="img" aria-label="Photography">📷</span>
                    <span className="hobby-text">Photography</span>
                </li>
                <Divider />
            </ul>

            <div className="hobbyist-status">
                <span className="status-indicator"></span>
                <p className="status-message">
                    {isHobbyist ? "I'm quite the hobbyist!" : "I'm just getting started."}
                </p>
            </div>
        </section>
    )
}
export default Hobbies
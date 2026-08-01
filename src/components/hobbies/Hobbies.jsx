import Divider from './Divider'
import './Hobbies.css'

function Hobbies() {
    const hobbyCount = 3
    const isHobbyist = hobbyCount > 2

    return (
        <div>
            <h2>Hobbies</h2>
            <ul className="hobbies-list">
                <li>Reading</li>
                <Divider />
                <li>Swimming</li>
                <Divider />
                <li>Photography</li>
                <Divider />
            </ul>
            <p>{isHobbyist ? "I'm quite the hobbyist!" : "I'm just getting started."}</p>
        </div>
    )
}
export default Hobbies
import './Feedback.css'
// import Loggito from '../utils/Loggito'

function Feedback ({ level, message, onClick}) {
    // const logger = new Loggito ('Feedback')

    return <div className={`Feedback container Feedback--${level? level : 'info'}`}>
        <div className="Feedback__box container container--spaced container--padded">
            {message}
            <button className="button" onClick={onClick}> Continue </button>
        </div>
    
    </div>
}

export default Feedback
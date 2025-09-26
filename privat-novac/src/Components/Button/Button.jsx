import './Button.css';

export function Button ({ text, className }) {
    return (
        <div className='btn-container'>
            <button className={`btn ${className}`} >
                <span > {text}</span>
                <span className='arrow'>➔</span>
            </button>
        </div>
    )
}
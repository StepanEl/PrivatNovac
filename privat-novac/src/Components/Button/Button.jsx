import './Button.css';

export const Button = ({ text, className }) => {
    return (
        <div className='btn-container'>
            <button className={`btn ${className}`} >
                <span > {text}</span>
                <span className='arrow'>➔</span>
            </button>
        </div>
    )
}
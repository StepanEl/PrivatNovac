import './Title.css';

export function Title ({ children, variant }) {
    const frameClass =
        variant === 'primary'
            ? 'frame-white'
            : variant === 'secondary'
            ? 'frame-blue'
             : variant === 'secondary-small'
            ? 'frame-blue small'
            : '';

    return (
        <div className={`title-container ${frameClass}`}>
            <div className="title">{children}</div>
        </div>
    );
}
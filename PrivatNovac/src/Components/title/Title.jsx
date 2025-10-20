import './Title.css';

export function Title({ children, variant, column }) {
    const frameClass =
        variant === 'primary'
            ? 'frame-white'
            : variant === 'secondary'
                ? 'frame-blue'
                : variant === 'secondary-small'
                    ? 'frame-blue small'
                    : variant === 'secondary-intro'
                        ? 'frame-blue intro'
                        : '';

    const columnClass = column ? 'flex-column' : '';

    return (
        <div className={`title-container ${frameClass} ${columnClass}`}>
            <div className="title">{children}</div>
        </div>
    );
}
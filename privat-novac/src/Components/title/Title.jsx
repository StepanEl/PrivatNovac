import './Title.css';

export const Title = ({children}) => {
    return (
        <div className="title-container ">
            <div className="title">{children}</div>
        </div>
    );
}   
import './Title.css';

export const Title = ({children}) => {
    return (
        <div className="title-container ">
            <p className="title">{children}</p>
        </div>
    );
}   
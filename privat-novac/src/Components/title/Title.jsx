import './Title.css';

export const Title = ({children}) => {
    return (
        <div className="title-container ">
            <h2 className="title">{children}</h2>
        </div>
    );
}   
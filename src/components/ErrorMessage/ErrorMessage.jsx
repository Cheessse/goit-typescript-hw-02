const ErrorMessage = ({ ErrorMessage }) => {
    const errorStyle = {
        margin:"auto",
    };
    return ( 
        <div className={errorStyle}>
            <p>{ ErrorMessage }</p>
    </div>
)
}
export default ErrorMessage;
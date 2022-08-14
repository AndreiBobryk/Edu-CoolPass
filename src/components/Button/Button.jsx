import "./Button.css";

function Button ({className, style, onClick, text}) {
    return (
        <button className={className} style={style} onClick={onClick}  >
            {text}
        </button>
    )
}

export default Button;
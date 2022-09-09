const Button = (props) =>{
    return(
        <button className="btn mybtn" onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default Button
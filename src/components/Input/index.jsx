const Input = (props) => {
    const onChangeHandler = (event) =>{
        console.log(event.target.value)
        console.log(props.type)
        props.setValue(event.target.value)
    }

    return (
        <div className="input">
            <label htmlFor="">{props.label}:</label>
            <input 
            onChange={onChangeHandler}
            value={props.value}
            type={`${props.type}`}
            placeholder={props.placeholder} type="text" />
        </div>
    )
}

export default Input
import './InputPassword.css'

const InputPassword = (props) =>{
    const onChangeHandler = (event) => {
        console.log(event.target.value);
        console.log(props.type);
        props.setValue(event.target.value);
      };

    return(
        <div className="input-password">
        <input
          onChange={onChangeHandler}
          value={props.value}
          placeholder={props.placeholder}
          type="password"
        />
      </div>
    )
}


export default InputPassword
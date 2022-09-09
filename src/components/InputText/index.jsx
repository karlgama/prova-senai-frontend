import './InputText.css'

const InputText = (props) => {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(props.type);
    props.setValue(event.target.value);
  };

  return (
    <div className="input-text">      
      <input
        onChange={onChangeHandler}
        value={props.value}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default InputText;


const TextField = ({ type, keyFilter, maxLength, onChange, disabled, value, className }) => {
  const validation = { numeric:  /\D/g, alphaNumeric: /[^a-z0-9]/gi, alphabet: /[^a-zA-Z]/}

  const onChangeValue = (event) => {
    onChange(event.target.value.replace(validation[keyFilter], ''));
  }
  return(
    <input
      type={type}
      value={value}
      onChange={onChangeValue}
      className={`form-control ${className}`}
      maxLength={maxLength}
      disabled={disabled}
    />
  );
};

export default TextField;

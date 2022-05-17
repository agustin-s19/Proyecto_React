const Input = ({ id, name, type = "text", label, placeholder }) => {
  name ||= id;
  return (
    <div className="style-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
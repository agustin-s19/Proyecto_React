const InputSelect = ({ id, name, label, options }) => {
  name ||= id;
  return (
    <div className="style-input">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name}>
        {options.map (a =><option value={a}>{a}</option>)}
      </select>
    </div>
  );
}

export default InputSelect;
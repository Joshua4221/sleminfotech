import React from "react";

const SelectField = ({ option, name, classname, HandleChange }) => {
  return (
    <div>
      <select name={name} onChange={HandleChange} className={`${classname}`}>
        {option.map((item, key) => (
          <option className={`${item.classname}`} key={key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

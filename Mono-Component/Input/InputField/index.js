import React from "react";

const InputField = ({
  type,
  HandleChange,
  classname,
  placeholder,
  name,
  passwordShow,
}) => {
  return (
    <div>
      <input
        type={type === "password" ? (passwordShow ? "text" : type) : type}
        placeholder={placeholder}
        name={name}
        onChange={HandleChange}
        className={`${classname}`}
      />
    </div>
  );
};

export default InputField;

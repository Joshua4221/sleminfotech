import React from "react";

const SubmitField = ({ type, value, classname }) => {
  return (
    <div>
      <input type={type} value={value} className={`${classname}`} />
    </div>
  );
};

export default SubmitField;

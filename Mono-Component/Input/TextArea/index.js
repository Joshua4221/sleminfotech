import React from "react";

const Textarea = ({
  cols,
  rows,
  placeholder,
  name,
  HandleChange,
  classname,
}) => {
  return (
    <div>
      <textarea
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        name={name}
        onChange={HandleChange}
        className={`${classname}`}
      ></textarea>
    </div>
  );
};

export default Textarea;

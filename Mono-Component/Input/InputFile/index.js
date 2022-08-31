import React from "react";

const InputFile = ({
  name,
  placeholder,
  type,
  HandleChange,
  classname,
  filename,
  ImageBuilder,
  file_text,
  classdiv,
  classcontent,
  fileName,
}) => {
  return (
    <div className={`${classdiv}`}>
      <div className={`${classcontent}`}>
        {ImageBuilder && (
          <div className={"file-icon-div"}>
            <ImageBuilder className={"file-icon"} />
          </div>
        )}
        <div>
          <p>{!filename ? file_text : filename}</p>
        </div>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={HandleChange}
        className={`${classname}`}
      />
    </div>
  );
};

export default InputFile;

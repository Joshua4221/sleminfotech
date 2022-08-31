import React from "react";
import { FormDiv, MultipleInputDiv } from "./form.style";
import InputField from "../../Mono-Component/Input/InputField";
import SubmitField from "../../Mono-Component/Input/SubmitField";
import Textarea from "../../Mono-Component/Input/TextArea";
import { withTheme } from "styled-components";

const FormComponent = ({ formArray, theme, HandleChange, sign }) => {
  return (
    <FormDiv color={theme} sign={sign}>
      {formArray.map((item, key) => (
        <div key={key} className={`${item.classbody}`}>
          <label>{item.label}</label>
          {item.type === "submit" ? (
            <SubmitField
              type={item.type}
              value={item.value}
              classname={item.classname}
            />
          ) : !item.type && item.description ? (
            <div className={"formFlexT"}>
              <div className={"iconlayout"}>
                <item.icons className={"formIcon"} />
              </div>
              <div className={"inputlayout"}>
                <Textarea
                  cols={item.cols}
                  rows={item.rows}
                  placeholder={item.placeholder}
                  name={item.name}
                  HandleChange={HandleChange}
                  classname={`${item.classname}`}
                />
              </div>
            </div>
          ) : (
            <div>
              {!item.multiple_input ? (
                <div className={"formFlex"}>
                  <div className={"iconlayout"}>
                    <item.icons className={"formIcon"} />
                  </div>
                  <div className={"inputlayout"}>
                    <InputField
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      HandleChange={HandleChange}
                      classname={`${item.classname}`}
                    />
                  </div>
                </div>
              ) : (
                <MultipleInputDiv
                  color={theme}
                  Arr={
                    item.multiple_input.length === 1
                      ? 2
                      : item.multiple_input.length
                  }
                >
                  {item.multiple_input?.map((item, key) => (
                    <div key={key} className={"mulitple"}>
                      <div className={"mulitples"}>
                        <label className={`${item.labelclassname}`}>
                          {item.label}
                        </label>
                        <div className={"formFlex"}>
                          <div className={"iconlayout"}>
                            <item.icons className={"formIcon"} />
                          </div>
                          <div className={"inputlayout"}>
                            <InputField
                              type={item.type}
                              placeholder={item.placeholder}
                              name={item.name}
                              HandleChange={HandleChange}
                              classname={`${item.classname}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </MultipleInputDiv>
              )}
            </div>
          )}
        </div>
      ))}
    </FormDiv>
  );
};

export default withTheme(FormComponent);

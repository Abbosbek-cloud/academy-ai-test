import React from "react";
import InputMask from "react-input-mask";
import { StyledInputBase } from "./StyledComponents";

const MaskInput = (props) => (
  <InputMask
    mask="+\9\9\89999999"
    value={props.value}
    onChange={props.onChange}
  >
    {(inputProps) => (
      <StyledInputBase
        {...inputProps}
        placeholder="+998 --- --- -- --"
        type="tel"
        disableUnderline
      />
    )}
  </InputMask>
);

export default MaskInput;

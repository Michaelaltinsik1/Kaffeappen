import { useState } from "react";
import styled from "styled-components";

function validateInput(input: string): boolean {
  return input.length > 0;
}

interface StyledInputPropsType {
  error?: boolean;
  fullWidth?: boolean;
}
const StyledInputField = styled.input<StyledInputPropsType>`
  max-width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  ${(props) =>
    props.error === true
      ? "background-color: #fa7f7f; border: 1px solid red;"
      : "background-color: #ffffff; border: 1px solid #000;"};
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  min-width: ${(props) => (props.fullWidth === true ? "100%" : "50%")};

  ::placeholder {
    color: #151414;
  }
`;

interface InputPropsType {
  placeholder: string;
  fullWidth?: boolean;
  name: string;
  inputHandler: Function;
  type: string;
}

const InputField = ({
  placeholder,
  fullWidth = false,
  name,
  inputHandler,
  type,
}: InputPropsType) => {
  function handlepropsFunction(name: string, inputData: string) {
    inputHandler({ [name]: inputData });

    // return {name:inputData};
  }

  const [errorState, setErrorState] = useState(false);
  return (
    <>
      <p>{errorState}</p>

      <StyledInputField
        onChange={(e) => {
          handlepropsFunction(name, e.target.value);
          setErrorState(!validateInput(e.target.value));
        }}
        fullWidth={fullWidth}
        error={errorState}
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </>
  );
};

export default InputField;

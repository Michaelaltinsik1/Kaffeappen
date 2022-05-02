import Button from "../Components/Button";
import InputField from "../Components/InputField";
import AlertList from "../Components/AlertList";
import styled from "styled-components";
import React, { useState } from "react";

const SigningViewStyled = styled.main`
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SigningProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}
const Signing = ({ state, setState }: SigningProps) => {
  const [alertStatus, setAlertStatus] = useState<IalertOptions>({
    isAlert: false,
    isError: false,
  });
  const [alerts, setAlerts] = useState<string[]>([]);
  const [users, setUser] = useState<User[]>([]);
  const [inputFields, setInputField] = useState<User>({
    userName: "",
    password: "",
    repeatPassword: "",
  });
  interface User {
    userName?: string;
    password?: string;
    repeatPassword?: string;
  }
  interface IalertOptions {
    isAlert: boolean;
    isError: boolean;
  }

  function inputHandler(newData: User) {
    const key = Object.keys(newData);
    if (key.length > 0) {
      if (key[0] === "userName") {
        setInputField({ ...inputFields, userName: newData.userName });
      } else if (key[0] === "password") {
        setInputField({ ...inputFields, password: newData.password });
      } else {
        setInputField({
          ...inputFields,
          repeatPassword: newData.repeatPassword,
        });
      }
    }
  }

  function handleButtonClick(button: string) {
    let isValid = false;
    if (button === "Register" && state === "mainPage") {
      setState("register");
      setAlertStatus({ isAlert: false, isError: false });
    } else if (button === "Back" && state === "register") {
      setState("mainPage");
      setAlertStatus({ isAlert: false, isError: false });
    } else if (button === "Register" && state === "register") {
      isValid = validateRegistration();
      if (isValid) {
        setAlertStatus({ isAlert: true, isError: false });
        setAlerts((alerts) => ["Validation was successful"]);
        setState("mainPage");
      } else {
        setAlertStatus({ isAlert: true, isError: true });
        setAlerts((alerts) => ["Validation was unsuccessful"]);
      }
    } else {
      isValid = validateLoggIn();
      //setAlertStatus();
      if (isValid) {
        setAlertStatus({ isAlert: true, isError: false });
        setAlerts((alerts) => ["Log in was successful"]);
      } else {
        setAlertStatus({ ...alertStatus, isAlert: true, isError: true });
        setAlerts((alerts) => ["Log in was unsuccessful"]);
      }
    }
  }
  function validateLoggIn(): boolean {
    let userFound: User | undefined;
    if (users.length > 0 && inputFields.userName && inputFields.password) {
      userFound = users.find((user) => user.userName === inputFields.userName);
      if (userFound) {
        return true;
      }
    }
    return false;
  }
  function validateRegistration(): boolean {
    console.log(inputFields);
    let userFound: User | undefined;
    console.log(users.length);
    if (
      inputFields.userName &&
      inputFields.password &&
      inputFields.repeatPassword &&
      inputFields.password === inputFields.repeatPassword
    ) {
      if (users.length === 0) {
        console.log("length 0");
        setUser((users) => [
          ...users,
          {
            userName: inputFields.userName,
            password: inputFields.password,
          },
        ]);
        return true;
      } else {
        userFound = users.find(
          (user) => user.userName === inputFields.userName
        );
        console.log("UserFound: ", userFound);
        if (userFound) {
          return false;
        } else {
          setUser((users) => [
            ...users,
            {
              userName: inputFields.userName,
              password: inputFields.password,
            },
          ]);
          return true;
        }
      }
    }
    return false;
  }

  return (
    <SigningViewStyled>
      <InputField
        inputHandler={inputHandler}
        placeholder="userName"
        name="userName"
        type="text"
      ></InputField>

      <InputField
        inputHandler={inputHandler}
        placeholder="Password"
        name="password"
        type="password"
      ></InputField>

      {state === "register" && (
        <InputField
          inputHandler={inputHandler}
          placeholder="Repeat Password"
          name="repeatPassword"
          type="password"
        ></InputField>
      )}

      {state === "mainPage" && (
        <Button handleClick={handleButtonClick}>Sign in</Button>
      )}

      <Button handleClick={handleButtonClick}>Register</Button>
      {state === "register" && (
        <Button handleClick={handleButtonClick}>Back</Button>
      )}
      {alertStatus.isAlert && (
        <AlertList error={alertStatus.isError}>
          {/* <li>Du har nu blivit registerad. Nu kan du logga in!</li> */}
          {alerts.map((alert) => (
            <li>{alert}</li>
          ))}
        </AlertList>
      )}
    </SigningViewStyled>
  );
};

export default Signing;

// <AlertList error={true}>
//   <li>Användarnamnet är upptaget</li>
//   <li>Lösenorden stämmer inte överens</li>
// </AlertList>

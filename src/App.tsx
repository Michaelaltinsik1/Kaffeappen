import React, { useState } from "react";
// import InputField from './Components/InputField';
// import Button from './Components/Button';
import SiteHeading from "./Components/SiteHeading";
import SigningView from "./Views/SigningView";
import "./App.css";
function App() {
  const [state, setState] = useState("mainPage");

  return (
    <div className="wrapper">
      {state === "mainPage" ? (
        <SiteHeading>KaffeAppen</SiteHeading>
      ) : (
        <SiteHeading>Register</SiteHeading>
      )}
      {/* <InputField placeholder='Username'/>
      <InputField placeholder='Password'/>
      <Button>Sign in</Button>
      <Button>Register</Button> */}
      <SigningView state={state} setState={setState}></SigningView>
    </div>
  );
}

export default App;

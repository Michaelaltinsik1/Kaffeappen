import React, { useState } from "react";
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
      <SigningView state={state} setState={setState}></SigningView>
    </div>
  );
}

export default App;

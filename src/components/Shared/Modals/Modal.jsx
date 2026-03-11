import React from "react";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MemberScreen from "./screens/MemberScreen";
import ReleaseScreen from "./screens/ReleaseScreen";
import AdoptScreen from "./screens/AdoptScreen";
import DonateScreen from "./screens/DonateScreen";
import { useSelector } from "react-redux";

const Modal = () => {

  const screen = useSelector((state) => state?.modal?.screen);

  let Screen;
  if (screen === "login-screen") {
    Screen = (
      <LoginScreen />
    );
  }

  if (screen === "signup-screen") {
    Screen = (
      <SignUpScreen />
    )
  }

  if (screen === "member") {
    Screen = (
      <MemberScreen />
    )
  }

  if (screen === "release") {
    Screen = (
      <ReleaseScreen />
    )
  }

  if (screen === "adopt") {
    Screen = (
      <AdoptScreen />
    )
  }

  if (screen === "donate") {
    Screen = (
      <DonateScreen />
    )
  }

  return (
    <div className=" fixed top-0 w-full h-full z-30 ">
      <div className=" modal ">
        {Screen}
      </div>
    </div>
  );
};

export default Modal;

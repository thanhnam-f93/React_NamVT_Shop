import { useSelector } from "react-redux";

import Settings from "./Settings";
import Question from "./Question";
import FinalScreen from "./FinalScreen";

// import "./quiz.css";
import React from "react";

function Start() {
  const questions = useSelector((state: any) => state.questions);
  const questionIndex = useSelector((state: any) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  );
}

export default Start;

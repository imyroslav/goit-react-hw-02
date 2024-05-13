import { useState, useEffect } from "react";
import css from "./App.module.css"
import Feedback from "../Feedback/Feedback";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notifications from "../Notifications/Notifications";
function App() {
  const [countFeedback, setCountFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("countFeedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const { good, neutral, bad } = countFeedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (type, value = null) => {
    setCountFeedback((prevCountFeedback) => {
      if (value === null) {
        return {
          ...prevCountFeedback,
          [type]: prevCountFeedback[type] + 1,
        };
      } else {
        return {
          ...prevCountFeedback,
          [type]: value,
        };
      }
    });
  };
  useEffect(() => {
    localStorage.setItem("countFeedback", JSON.stringify(countFeedback));
  }, [countFeedback]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notifications totalFeedback={totalFeedback} />
      ) : (
        <Feedback
          countFeedback={countFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
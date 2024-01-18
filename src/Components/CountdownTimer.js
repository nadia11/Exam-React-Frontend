import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_QUESTION_REMAINING =
  "LOCAL_STORAGE_QUESTION_REMAINING".toLowerCase();

const getTimeRemainingByQuestionTestId = (questionTestId) => {
  try {
    return (
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUESTION_REMAINING))?.[
        questionTestId
      ] || null
    );
  } catch (error) {
    return null;
  }
};

const CountdownTimer = ({
  initialTime,
  onTimeIsUp,
  questionTestId,
  isPauseInterval = false,
  containerStyle = {},
  styleTimer = {},
  forceUpdate = false,
}) => {
  const timeRemainingByQuestionTestId =
    getTimeRemainingByQuestionTestId(questionTestId);
  const [timeRemaining, setTimeRemaining] = useState(
    parseInt(timeRemainingByQuestionTestId) || initialTime
  );

  useEffect(() => {
    if (forceUpdate) {
      setTimeRemaining(initialTime);
    }
  }, [forceUpdate, initialTime]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        if (!isPauseInterval) {
          setTimeRemaining((prevTime) => {
            const newTimer = prevTime - 1;
            const saveValue = {
              [questionTestId]: newTimer.toString(),
            };
            localStorage.setItem(
              LOCAL_STORAGE_QUESTION_REMAINING,
              JSON.stringify(saveValue)
            );
            return newTimer;
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    onTimeIsUp && onTimeIsUp();
  }, [timeRemaining, isPauseInterval, onTimeIsUp, questionTestId]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div style={containerStyle}>
      <p style={styleTimer}>{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;

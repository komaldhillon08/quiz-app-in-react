import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // Reset time for each question
    setRemainingTime(timeout);

    const timerId = setTimeout(() => {
      onTimeout();
    }, timeout);

    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [timeout, onTimeout]);

  return (
    <div className="timer-div">
      <progress id="question-time" max={timeout} value={remainingTime} />
      <span className="timer-span">{Math.ceil(remainingTime / 1000)}s</span>
    </div>
  );
}

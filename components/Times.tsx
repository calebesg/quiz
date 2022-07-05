import { Children } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/components/Timer.module.css";

interface TimerProps {
  key: number;
  duration: number;
  timeOut: () => void;
}

export function Timer({ duration, timeOut, key }: TimerProps) {
  const renderTime = (time: number, color: string) => {
    return <span style={{ color: color }}>{time}</span>;
  };

  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        key={key}
        duration={duration}
        size={120}
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 5, 0]}
        isPlaying
        onComplete={timeOut}
      >
        {(data) => renderTime(data.remainingTime, data.color)}
      </CountdownCircleTimer>
    </div>
  );
}

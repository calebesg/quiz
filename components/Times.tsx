import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/components/Timer.module.css";

interface TimerProps {
  duration: number;
  timeOut: () => void;
}

export function Timer({ duration, timeOut }: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={duration}
        size={120}
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 5, 0]}
        isPlaying
        onComplete={timeOut}
        children={({ remainingTime, color }) => (
          <span style={{ color: color }}>{remainingTime}</span>
        )}
      />
    </div>
  );
}

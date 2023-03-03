import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const CountDownTimer = ({
  size = 60,
  strokeWidth = 0,
  duration,
  onComplete = () => null,
}) => {
  return (
    <CountdownCircleTimer
      size={size}
      isPlaying
      strokeWidth={strokeWidth}
      duration={duration}
      colors="#218380"
      onComplete={() => onComplete()}>
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return <b>{`${minutes}:${seconds}`}</b>;
      }}
    </CountdownCircleTimer>
  );
};

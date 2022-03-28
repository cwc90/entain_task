import {useState, useEffect} from 'react';

const useCountdown = (startTimeInSecond: number) => {
  const [countdownInSeconds, setCountdownInSeconds] = useState<number>(
    startTimeInSecond - Math.round(Date.now() / 1000),
  );

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdownInSeconds(countDown => countDown - 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  return {countdownInSeconds};
};

export default useCountdown;

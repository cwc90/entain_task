import {MIN_IN_SECONDS} from '_constants';

const countdownFormatter = (seconds: number) => {
  const absSeconds = Math.abs(seconds);
  const minsInt = Math.floor(absSeconds / MIN_IN_SECONDS);
  const secondsInt = absSeconds % MIN_IN_SECONDS;
  return seconds < 0 ? `Started : ${secondsInt}s` : `${minsInt}m${secondsInt}s`;
};

export default countdownFormatter;

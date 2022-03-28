import {RaceSummary, RaceSummaries} from '_types';
import {MIN_IN_SECONDS} from '_constants';

export const removeStartedRaces = (
  raceSummaries: RaceSummaries,
): RaceSummary[] => {
  const raceSummaryArray = Object.values(raceSummaries);
  return raceSummaryArray.filter(raceSummary => {
    const currentTimeInSeconds = Math.round(Date.now() / 1000);
    return (
      raceSummary.advertised_start.seconds - currentTimeInSeconds >=
      -MIN_IN_SECONDS
    );
  });
};

export const sortRacesByTime = (
  raceSummaries: RaceSummary[],
): RaceSummary[] => {
  return raceSummaries.sort(
    (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
  );
};

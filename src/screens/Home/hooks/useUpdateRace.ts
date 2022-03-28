import {useEffect} from 'react';
import {MIN_IN_SECONDS} from '_constants';

const useUpdateRace = (
  secondsTillNow: number,
  raceId: string,
  removeRace: (startedRaceId: string) => void,
) => {
  useEffect(() => {
    if (secondsTillNow < -MIN_IN_SECONDS) {
      removeRace(raceId);
    }
  }, [secondsTillNow, removeRace, raceId]);
};

export default useUpdateRace;

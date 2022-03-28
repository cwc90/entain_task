import {useEffect, useState, useCallback} from 'react';
import {Alert} from 'react-native';
import {getAPIErrMsg, getNextRacing} from '_api';
import {RaceSummary} from '_types';
import {removeStartedRaces, sortRacesByTime} from '../logic';
import {NUMBER_OF_RACES} from '_constants';

const useGetRaces = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [races, setRaces] = useState<RaceSummary[]>([]);

  const fetchRaces = useCallback(async () => {
    try {
      const racingData = await getNextRacing();
      // remove races and sort races
      const filtertedRaces: RaceSummary[] = sortRacesByTime(
        removeStartedRaces(racingData.race_summaries),
      );
      setRaces(filtertedRaces);
    } catch (error) {
      Alert.alert('Fetch Races Error', getAPIErrMsg(error));
    }
  }, []);

  const removeRace = useCallback((raceId: string) => {
    setRaces(prevRaces => {
      return prevRaces.filter(prevRace => prevRace.race_id !== raceId);
    });
  }, []);

  useEffect(() => {
    //When races is less than five, fetch more races
    if (races.length <= NUMBER_OF_RACES) {
      fetchRaces();
    }
  }, [races, fetchRaces]);

  useEffect(() => {
    const initalFetch = async () => {
      setIsLoading(true);
      await fetchRaces();
      setIsLoading(false);
    };
    initalFetch();
  }, [fetchRaces]);

  return {isLoading, races, removeRace};
};

export default useGetRaces;

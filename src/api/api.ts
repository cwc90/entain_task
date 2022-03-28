import {nedsAPI} from './helpers';
import {RacingData} from '_types';

export const getNextRacing = async (): Promise<RacingData> => {
  const res = await nedsAPI.get('/racing/', {
    params: {method: 'nextraces', count: 10},
  });
  return res.data.data;
};

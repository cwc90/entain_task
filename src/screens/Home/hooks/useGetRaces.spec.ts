import {renderHook} from '@testing-library/react-hooks';
import {Alert} from 'react-native';

import useGetRaces from './useGetRaces';
import {getNextRacing, getAPIErrMsg} from '_api';
import {raceSummariesMock} from '~/__mocks__';

jest.mock('_api');
jest.spyOn(Alert, 'alert');

describe('useGetRaces', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('initial fetch race', async () => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => 1648444800001);
    (getNextRacing as jest.Mock).mockResolvedValue({
      next_to_go_ids: [],
      race_summaries: raceSummariesMock,
    });
    const {result, waitForNextUpdate} = renderHook(() => useGetRaces());

    await waitForNextUpdate();
    expect(getNextRacing).toHaveBeenCalledWith();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.races.length).toBe(8);
  });

  it('initial fetch race fail', async () => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => 1644669570000);
    (getNextRacing as jest.Mock).mockRejectedValue(new Error('oops'));
    (getAPIErrMsg as jest.Mock).mockReturnValue('Internal Server Error');
    const {result, waitForNextUpdate} = renderHook(() => useGetRaces());

    await waitForNextUpdate();

    expect(Alert.alert).toBeCalledWith(
      'Fetch Races Error',
      'Internal Server Error',
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.races.length).toBe(0);
  });
});

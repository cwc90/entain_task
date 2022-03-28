import {removeStartedRaces, sortRacesByTime} from './logic';
import {raceSummariesMock, raceSummaryArrayMock} from '~/__mocks__';

afterAll(() => {
  jest.resetAllMocks();
});

describe('home screen logic', () => {
  describe('Sort races by time', () => {
    it('sort races correctly', () => {
      jest.spyOn(global.Date, 'now').mockImplementation(() => 1644669570000);
      const latestSortedRaces = sortRacesByTime(raceSummaryArrayMock);
      const raceStartTimes = latestSortedRaces.map(
        race => race.advertised_start.seconds,
      );
      expect(raceStartTimes).toStrictEqual([
        1648444620, 1648444800, 1648445040, 1648445040, 1648445040, 1648445040,
        1648445040, 1648445040, 1648445040,
      ]);
    });

    it('removes races correctly', () => {
      jest.spyOn(global.Date, 'now').mockImplementation(() => 1648444800001);
      const filteredRaces = removeStartedRaces(raceSummariesMock);
      expect(filteredRaces.length).toBe(8);
    });
  });
});

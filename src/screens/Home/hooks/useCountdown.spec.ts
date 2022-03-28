import {renderHook, act} from '@testing-library/react-hooks';

import useCountdown from './useCountdown';

describe('useCountdown', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('return the countdownInSeconds correctly', () => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => 1648459850001);
    const {result} = renderHook(() => useCountdown(1648459871));
    expect(result.current.countdownInSeconds).toBe(21);
  });

  it('countdownTimer works correctly', () => {
    jest.useFakeTimers();
    jest.spyOn(global.Date, 'now').mockImplementation(() => 1648459850001);
    const {result} = renderHook(() => useCountdown(1648459871));
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.countdownInSeconds).toBe(18);
  });
});

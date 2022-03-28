import {renderHook} from '@testing-library/react-hooks';

import useUpdateRace from './useUpdateRace';

const removeRaceMock = jest.fn();

describe('useUpdateRace', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('removeRace called when countdown < -60', () => {
    renderHook(() => useUpdateRace(-61, 'test', removeRaceMock));
    expect(removeRaceMock).toHaveBeenCalledWith('test');
  });

  it('removeRace is not called when countdown >= -60', () => {
    renderHook(() => useUpdateRace(0, 'test', removeRaceMock));
    expect(removeRaceMock).not.toHaveBeenCalled();
  });
});

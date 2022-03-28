import {getAPIErrMsg} from './helpers';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getAPIErrMsg Helper', () => {
  it('returns the correct error message', () => {
    const errMsg = getAPIErrMsg({
      response: {data: {message: 'Error Message', status: 400}},
    });
    expect(errMsg).toBe('Error Message');
  });

  it('return a fallback message if there is no error message', () => {
    const errMsg = getAPIErrMsg({
      response: {data: {message: '', status: 400}},
    });
    expect(errMsg).toBe('Internal Server Error');
  });
});

import countdownFormatter from './countdownFormatter';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('countdownFormatter test', () => {
  it('format countdown correctly', () => {
    const countdownString = countdownFormatter(3 * 60 + 12);
    expect(countdownString).toBe('3m12s');
  });

  it('format started timer correctly', () => {
    const countdownString = countdownFormatter(-1 * 30);
    expect(countdownString).toBe('Started : 30s');
  });
});

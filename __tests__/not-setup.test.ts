import { log, setup, deleteLog } from '../src/index';

describe('index', () => {
  test('test not setup()', () => {
    const r = log('test not setup()');

    expect(r).toEqual(true);
  });
});

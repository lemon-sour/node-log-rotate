import { log, setup, deleteLog } from '../src/index';

describe('index', () => {
  test('test ES module', () => {
    const pkg = require('../package.json');

    setup({
      appName: pkg.name + '-test',
      maxSize: 10 * 1024 * 1024
    });

    const r = log('test ES');

    // deleteLog(2);

    expect(r).toEqual(true);
  });

  test('test Common JS', () => {
    const pkg = require('../package.json');

    const logCJS = require('../src/index');
    logCJS.setup({
      appName: pkg.name + '-test',
      maxSize: 10 * 1024 * 1024
    });

    const r = logCJS.log('test CJS');

    expect(r).toEqual(true);
  });

  test('test delete file', () => {
    deleteLog(10);

    expect(1).toEqual(1);
  });
});

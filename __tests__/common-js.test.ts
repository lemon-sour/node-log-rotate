describe('index', () => {
  test('test Common JS', () => {
    const pkg = require('../package.json');

    const logCJS = require('../src/index');
    logCJS.setup({
      appName: pkg.name + '-test',
      maxSize: 10 * 1024 * 1024,
    });

    const r = logCJS.log('test CJS');

    expect(r).toEqual(true);
  });
});

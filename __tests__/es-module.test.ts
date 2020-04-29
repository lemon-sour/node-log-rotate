import { log, setup, deleteLog } from '../src/index'

describe('index', () => {
  test('test ES module', () => {
    const pkg = require('../package.json')

    setup({
      appName: pkg.name + '-test',
      maxSize: 10 * 1024 * 1024,
    })

    const r = log('test ES')

    expect(r).toEqual(true)
  })
})

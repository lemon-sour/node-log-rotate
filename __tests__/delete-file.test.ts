import { log, setup, deleteLog } from '../src/index'

describe('index', () => {
  beforeEach(() => {
    console.log('beforeEach')
    const pkg = require('../package.json')

    setup({
      appName: pkg.name + '-test',
      maxSize: 10 * 1024 * 1024
    })

    const r = log('test ES')

    expect(r).toEqual(true)
  })

  test('test delete file', () => {
    deleteLog(2)

    expect(1).toEqual(1)
  })
})

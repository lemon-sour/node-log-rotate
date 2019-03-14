import { log, setup, deleteLog } from '../src/index'

describe('index', () => {
  test('test no pkg with setup()', () => {
    setup({
      maxSize: 10 * 1024 * 1024
    })

    const r = log('test no pkg')

    expect(r).toEqual(true)
  })
})

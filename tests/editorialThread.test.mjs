import test from 'node:test'
import assert from 'node:assert/strict'
import { editorialThreadPath, editorialThreadSettings } from '../src/components/editorialThread.js'
import { advanceTrail, createTrail } from '../src/components/scrollTrailMotion.js'

const layout = { width: 1440, contentRight: 1300, start: 466, end: 2723, boundaries: [458, 1541, 2111, 2468] }

test('the entire curve stays outside content and inside the viewport at every desktop size', () => {
  for (const [width, contentRight] of [[768, 736], [1024, 976], [1440, 1300], [2560, 1860]]) {
    const path = editorialThreadPath({ ...layout, width, contentRight })
    const coordinates = path.match(/-?\d+(?:\.\d+)?/g).map(Number)
    const x = coordinates.filter((_, index) => index % 2 === 0)
    const y = coordinates.filter((_, index) => index % 2 !== 0)
    // A Bezier stays within its control points' convex hull.
    assert.ok(x.every(value => value >= contentRight + editorialThreadSettings.contentGap))
    assert.ok(x.every(value => value <= width - editorialThreadSettings.viewportInset))
    assert.equal(y[0], layout.start)
    assert.equal(y.at(-1), layout.end)
    assert.ok(y.every((value, index) => !index || value >= y[index - 1]))
  }
})

test('insufficient gutter or no path extent safely omits the artwork', () => {
  assert.equal(editorialThreadPath({ ...layout, width: 1320 }), '')
  assert.equal(editorialThreadPath({ ...layout, end: layout.start }), '')
  assert.equal(editorialThreadPath({ ...layout, end: layout.start - 1 }), '')
})

test('short sections and unsorted joins remain monotonic, without loops', () => {
  const path = editorialThreadPath({ ...layout, start: 100, end: 130, boundaries: [128, 105, 112] })
  const y = path.match(/-?\d+(?:\.\d+)?/g).map(Number).filter((_, index) => index % 2 !== 0)
  assert.ok(y.every((value, index) => !index || value >= y[index - 1]))
})

test('page-length drawing reverses without overshoot and stops completely', () => {
  const state = createTrail(0)
  for (const target of [2400, 0, 1800, 600]) {
    for (let frame = 0; frame < 12; frame++) {
      advanceTrail(state, target, 1 / 60, 0, false)
      assert.ok(state.points[0] >= 0 && state.points[0] <= 2400)
    }
  }
  let moving = true
  for (let frame = 0; frame < 300 && moving; frame++) moving = advanceTrail(state, 600, 1 / 60, 0, false)
  assert.equal(moving, false)
  assert.equal(state.points[0], 600)
})

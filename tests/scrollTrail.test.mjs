import test from 'node:test'
import assert from 'node:assert/strict'
import { advanceTrail, createTrail, scrollProgress, scrollTrailSettings as settings } from '../src/components/scrollTrailMotion.js'

test('restored progress, overscroll and non-scrollable documents', () => {
  assert.equal(scrollProgress(500, 2000, 1000), 0.5)
  assert.equal(scrollProgress(-50, 2000, 1000), 0)
  assert.equal(scrollProgress(2000, 2000, 1000), 1)
  assert.equal(scrollProgress(500, 700, 1000), 0)
  const state = createTrail(220)
  assert.equal(advanceTrail(state, 220, 1 / 60, 0, false), false)
})
test('large jumps and reversals stay bounded, then settle completely', () => {
  const state = createTrail(0)
  for (const target of [440, 0, 440, 40, 400]) {
    for (let i = 0; i < 20; i++) {
      advanceTrail(state, target, 1 / 60, i === 0 ? target : 0, true)
      assert.ok(Math.max(...state.points) - Math.min(...state.points) <= settings.maxTrailDisplacement + 1e-6)
      assert.ok(state.points.every(p => p >= 0 && p <= 440))
      assert.ok(Math.abs(state.visual) <= settings.maxVisualDisplacement)
    }
  }
  let moving = true
  for (let i = 0; i < 600 && moving; i++) moving = advanceTrail(state, 400, 1 / 60, 0, true)
  assert.equal(moving, false)
  assert.equal(state.opacity, 0)
  assert.equal(state.visual, 0)
  assert.deepEqual(state.points, Array(settings.trailLength + 1).fill(400))
})
test('30, 60 and 120 Hz produce consistent following motion', () => {
  const results = [30, 60, 120].map(hz => {
    const state = createTrail(0)
    for (let i = 0; i < hz / 2; i++) advanceTrail(state, 440, 1 / hz, 0, false)
    return state.points
  })
  results[0].forEach((value, index) => {
    assert.ok(Math.abs(value - results[1][index]) < 0.1)
    assert.ok(Math.abs(value - results[2][index]) < 0.1)
  })
})

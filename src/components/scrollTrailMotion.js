export const scrollTrailSettings = Object.freeze({
  accentColor: 'var(--accent)',
  trailLength: 6,
  followStrength: 18,
  maxTrailDisplacement: 32,
  maxVisualDisplacement: 4,
})

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const follow = (value, target, rate, dt) => target + (value - target) * Math.exp(-rate * dt)
export const scrollProgress = (scroll, height, viewport) => height > viewport ? clamp(scroll / (height - viewport), 0, 1) : 0
export const curveX = progress => 7 + 12 * progress * (1 - progress) * (1 - 2 * progress)

export function createTrail(position, settings = scrollTrailSettings) {
  return { points: Array(settings.trailLength + 1).fill(position), opacity: 0, velocity: 0, visual: 0 }
}

// Substeps keep the follower chain consistent across display refresh rates.
export function advanceTrail(state, target, elapsed, delta, visualActive, settings = scrollTrailSettings) {
  const dt = clamp(elapsed, 0.001, 0.064)
  state.velocity += delta / 0.12
  let remaining = dt
  while (remaining > 0) {
    const step = Math.min(remaining, 1 / 120)
    state.points[0] = follow(state.points[0], target, settings.followStrength, step)
    for (let i = 1; i < state.points.length; i++) {
      const previous = state.points[i - 1]
      state.points[i] = follow(state.points[i], previous, 14 / (1 + i * 0.12), step)
      const spacing = settings.maxTrailDisplacement / settings.trailLength
      state.points[i] = clamp(state.points[i], previous - spacing, previous + spacing)
    }
    state.velocity = follow(state.velocity, 0, 1 / 0.12, step)
    const visualTarget = visualActive ? clamp(-state.velocity * 0.012, -settings.maxVisualDisplacement, settings.maxVisualDisplacement) : 0
    state.visual = follow(state.visual, visualTarget, 16, step)
    const spread = Math.max(...state.points.map(point => Math.abs(point - target)))
    state.opacity = follow(state.opacity, clamp(spread / 14, 0, 1), 12, step)
    remaining -= step
  }
  const settled = state.points.every(point => Math.abs(point - target) < 0.03) && Math.abs(state.velocity) < 0.05 && Math.abs(state.visual) < 0.02 && state.opacity < 0.005
  if (settled) { state.points.fill(target); state.velocity = 0; state.visual = 0; state.opacity = 0 }
  return !settled
}

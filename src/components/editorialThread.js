import { clamp } from './scrollTrailMotion.js'

export const editorialThreadSettings = Object.freeze({
  contentGap: 20,
  viewportInset: 12,
  maximumBend: 36,
  bendHeight: 120,
})

// All control points stay in the gutter. Vertical tangents soften section joins
// without allowing a curve to drift across the content or beyond the viewport.
export function editorialThreadPath({ width, contentRight, start, end, boundaries }, settings = editorialThreadSettings) {
  const space = width - contentRight - settings.contentGap - settings.viewportInset
  if (space < 0 || end <= start) return ''
  const inner = contentRight + settings.contentGap
  const outer = inner + clamp(space / 2, 0, settings.maximumBend)
  const joins = boundaries.filter(y => y > start && y < end).sort((a, b) => a - b)
  const points = [[inner, start]]
  const firstGap = (joins[0] ?? end) - start
  points.push([outer, start + Math.min(settings.bendHeight, firstGap / 3)])
  joins.forEach((y, index) => {
    const previous = joins[index - 1] ?? start
    const next = joins[index + 1] ?? end
    const radius = Math.min(settings.bendHeight, (y - previous) / 3, (next - y) / 3)
    points.push([outer, y - radius], [inner, y], [outer, y + radius])
  })
  points.push([inner, end])
  return points.reduce((path, [x, y], index) => {
    if (!index) return `M ${x} ${y}`
    const [previousX, previousY] = points[index - 1]
    const middle = (previousY + y) / 2
    return `${path} C ${previousX} ${middle} ${x} ${middle} ${x} ${y}`
  }, '')
}

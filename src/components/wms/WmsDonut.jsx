// Port of the rounded segment geometry in components/dashboard-donut.blade.php.
function segmentGeometry(start, percentage) {
  const outer = 57, inner = 39
  const point = (radius, angle) => `${(60 + radius * Math.cos(angle)).toFixed(3)} ${(60 + radius * Math.sin(angle)).toFixed(3)}`
  const padding = Math.min(0.8, percentage * 0.2)
  const from = (-90 + (start + padding) * 3.6) * Math.PI / 180
  const to = (-90 + (start + percentage - padding) * 3.6) * Math.PI / 180
  const sweep = Math.max(to - from, 0.001)
  const corner = Math.min(2.5, sweep * inner / 4)
  const outerInset = Math.min(corner / outer, sweep / 4)
  const innerInset = Math.min(corner / inner, sweep / 4)
  const middle = (-90 + (start + percentage / 2) * 3.6) * Math.PI / 180
  return {
    path: `M ${point(outer, from + outerInset)} A 57 57 0 ${sweep - 2 * outerInset > Math.PI ? 1 : 0} 1 ${point(outer, to - outerInset)} Q ${point(outer, to)} ${point(outer - corner, to)} L ${point(inner + corner, to)} Q ${point(inner, to)} ${point(inner, to - innerInset)} A 39 39 0 ${sweep - 2 * innerInset > Math.PI ? 1 : 0} 0 ${point(inner, from + innerInset)} Q ${point(inner, from)} ${point(inner + corner, from)} L ${point(outer - corner, from)} Q ${point(outer, from)} ${point(outer, from + outerInset)} Z`,
    x: 60 + 48 * Math.cos(middle), y: 61.8 + 48 * Math.sin(middle),
  }
}

export default function WmsDonut({ label, value, segments }) {
  const total = segments.reduce((sum, item) => sum + item.value, 0)
  return (
    <div className="wms-donut">
      <svg viewBox="0 0 120 120" role="img" aria-label={`${label}: ${value}. ${segments.map(item => `${item.label}: ${item.display}`).join('. ')}`}>
        <circle cx="60" cy="60" r="48" fill="none" stroke="#e5e7eb" strokeWidth="18" />
        {segments.map((item, index) => {
          const share = item.value / total * 100
          const start = segments.slice(0, index).reduce((sum, segment) => sum + segment.value, 0) / total * 100
          const shape = segmentGeometry(start, share)
          return <g key={item.label}><path d={shape.path} fill={item.color} />{share >= 12 && <text x={shape.x} y={shape.y} textAnchor="middle" fill="white" fontSize="5.5" fontWeight="800">{Math.round(share)}%</text>}</g>
        })}
      </svg>
      <div className="wms-donut-center"><span>{label}</span><strong>{value}</strong></div>
    </div>
  )
}

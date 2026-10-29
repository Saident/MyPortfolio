import { useLayoutEffect, useRef } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import WmsPreview from './wms/WmsPreview'
import { startupState } from '../startup'

export default function ProjectPreview({ expandOnDesktop = false }) {
  const disclosure = useRef(null)

  useLayoutEffect(() => {
    if (startupState.previewOpen !== undefined) disclosure.current.open = startupState.previewOpen
    if (!expandOnDesktop) return
    const desktop = matchMedia('(min-width: 768px)')
    const update = () => { disclosure.current.open = desktop.matches }
    disclosure.current.open = startupState.previewOpen ?? desktop.matches
    desktop.addEventListener('change', update)
    return () => desktop.removeEventListener('change', update)
  }, [expandOnDesktop])

  return (
    <details className="preview-disclosure" ref={disclosure}>
      <summary><span>Dashboard preview <small>Fictional data</small></span><ChevronDownIcon aria-hidden="true" /></summary>
      <div className="preview-content"><WmsPreview showCaption={false} /></div>
    </details>
  )
}

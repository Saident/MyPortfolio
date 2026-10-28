// SVG geometry from the WMS sidebar-icon Blade component.
const icons = {
  'dashboard': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 10.75L12 3.5L21 10.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.75 9.75V20H10V15H14V20H18.25V9.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>),
  'orders': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7.5 9V7.5C7.5 5 9.5 3 12 3C14.5 3 16.5 5 16.5 7.5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5.25 9H18.75L20 21H4L5.25 9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>),
  'products': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3.5L20 7.75V16.25L12 20.5L4 16.25V7.75L12 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4.5 8L12 12L19.5 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>),
  'inventory': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 7.5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 16.5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 5.5H17C18.1 5.5 19 6.4 19 7.5C19 8.6 18.1 9.5 17 9.5H7C5.9 9.5 5 8.6 5 7.5C5 6.4 5.9 5.5 7 5.5Z" stroke="currentColor" strokeWidth="2" />
            <path d="M7 14.5H17C18.1 14.5 19 15.4 19 16.5C19 17.6 18.1 18.5 17 18.5H7C5.9 18.5 5 17.6 5 16.5C5 15.4 5.9 14.5 7 14.5Z" stroke="currentColor" strokeWidth="2" />
        </svg>),
  'wms': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 10.25L12 6L20 10.25V20H4V10.25Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M8 20V13H16V20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>),
  'service': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3L13.15 5.1L15.5 5.65L17.45 4.3L19.7 6.55L18.35 8.5L18.9 10.85L21 12L18.9 13.15L18.35 15.5L19.7 17.45L17.45 19.7L15.5 18.35L13.15 18.9L12 21L10.85 18.9L8.5 18.35L6.55 19.7L4.3 17.45L5.65 15.5L5.1 13.15L3 12L5.1 10.85L5.65 8.5L4.3 6.55L6.55 4.3L8.5 5.65L10.85 5.1L12 3Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
            <path d="M14.9 7.25A4.25 4.25 0 0 0 9.45 12.7L5.35 16.8A1.3 1.3 0 0 0 7.2 18.65L11.3 14.55A4.25 4.25 0 0 0 16.75 9.1L14.5 11.35L12.65 9.5L14.9 7.25Z" fill="currentColor" stroke="white" strokeWidth="0.75" strokeLinejoin="round" />
        </svg>),
  'service-orders': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 5.5H5.5V20.5H18.5V5.5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 3.5H15V7H9V3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M8 11.25L9 12.25L10.75 10.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 11.25H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 16L9 17L10.75 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>),
  'customers': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 11C10.66 11 12 9.66 12 8C12 6.34 10.66 5 9 5C7.34 5 6 6.34 6 8C6 9.66 7.34 11 9 11Z" stroke="currentColor" strokeWidth="2" />
            <path d="M3.5 19C3.5 16.52 5.74 14.5 8.5 14.5H9.5C12.26 14.5 14.5 16.52 14.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 11C17.38 11 18.5 9.88 18.5 8.5C18.5 7.12 17.38 6 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M16.5 14.75C18.76 15.12 20.5 16.88 20.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>),
  'reports': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 13H8V20H5V13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 8H15V20H12V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M19 4H22V20H19V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>),
  'settings': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 15.25C13.8 15.25 15.25 13.8 15.25 12C15.25 10.2 13.8 8.75 12 8.75C10.2 8.75 8.75 10.2 8.75 12C8.75 13.8 10.2 15.25 12 15.25Z" stroke="currentColor" strokeWidth="2" />
            <path d="M19 13.5V10.5L16.9 10.1C16.72 9.58 16.5 9.1 16.2 8.65L17.4 6.85L15.15 4.6L13.35 5.8C12.9 5.5 12.42 5.28 11.9 5.1L11.5 3H8.5L8.1 5.1C7.58 5.28 7.1 5.5 6.65 5.8L4.85 4.6L2.6 6.85L3.8 8.65C3.5 9.1 3.28 9.58 3.1 10.1L1 10.5V13.5L3.1 13.9C3.28 14.42 3.5 14.9 3.8 15.35L2.6 17.15L4.85 19.4L6.65 18.2C7.1 18.5 7.58 18.72 8.1 18.9L8.5 21H11.5L11.9 18.9C12.42 18.72 12.9 18.5 13.35 18.2L15.15 19.4L17.4 17.15L16.2 15.35C16.5 14.9 16.72 14.42 16.9 13.9L19 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" transform="translate(2)" />
        </svg>),
  'activity': (<svg className="wms-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 4H16V6.5H8V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M6 6.5H18V20H6V6.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>),
}

export default function WmsIcon({ name }) {
  return icons[name] || icons.dashboard
}

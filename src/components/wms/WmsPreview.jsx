import WmsIcon from './WmsIcon'
import WmsDonut from './WmsDonut'
import { sidebarSections } from './sidebarData'
import { revenueDays, inventory, receivables, topProducts, dueDocuments, formatRupiah } from './demoData'
import './wms-preview.css'

function Chevron() {
  return <svg className="wms-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Sidebar() {
  return (
    <aside className="wms-sidebar" tabIndex={0} aria-label="Daftar seluruh menu WMS, tampilan statis. Gulir untuk melihat semua menu.">
      {sidebarSections.map((section, index) => (
        <div className="wms-menu-section" key={section.title || index}>
          {section.title && <p className="wms-menu-title">{section.title}</p>}
          <ul>{section.items.map(item => (
            <li key={item.label}>
              <div className={`wms-menu-item${item.active ? ' is-active' : ''}`}><WmsIcon name={item.icon} /><span>{item.label}</span>{item.children && <span className="wms-menu-chevron"><Chevron /></span>}</div>
              {item.children && <ul className="wms-submenu">{item.children.map(label => <li key={label}>{label}</li>)}</ul>}
            </li>
          ))}</ul>
        </div>
      ))}
    </aside>
  )
}

function Revenue() {
  const totals = revenueDays.reduce((sum, row) => [sum[0] + row[0], sum[1] + row[1]], [0, 0])
  const combined = revenueDays.map(row => row[0] + row[1])
  const best = Math.max(...combined)
  const recent = combined.slice(-3).reduce((sum, value) => sum + value, 0)
  const previous = combined.slice(-6, -3).reduce((sum, value) => sum + value, 0)
  const trend = (recent / previous - 1) * 100
  return (
    <section className="wms-panel wms-revenue" aria-label="Chart Revenue, data contoh">
      <div className="wms-chart-heading"><div><h4>Chart Revenue</h4><p>Omzet Sales Order dan pendapatan Service <b>· Harian</b></p></div><div className="wms-legend"><span><i />Transaksi</span><span><i />Pendapatan Service</span></div></div>
      <div className="wms-revenue-totals">
        <div className="wms-revenue-total"><span><i />Revenue Transaksi</span><strong>{formatRupiah(totals[0])}</strong></div>
        <div className="wms-revenue-total wms-service-total"><span><i />Revenue Service</span><strong>{formatRupiah(totals[1])}</strong></div>
      </div>
      <div className="wms-chart" role="img" aria-label={`Revenue contoh 1–14 Oktober 2026. Transaksi ${formatRupiah(totals[0])}; service ${formatRupiah(totals[1])}.`}>
        <div className="wms-axis">{['Rp8jt', 'Rp6jt', 'Rp4jt', 'Rp2jt', '0'].map(tick => <span key={tick}>{tick}</span>)}</div>
        <div className="wms-plot"><div className="wms-gridlines" aria-hidden="true">{[0, 1, 2, 3, 4].map(line => <span key={line} />)}</div><div className="wms-bars">{revenueDays.map(([transactions, service], index) => <div className="wms-bucket" key={index}><span style={{ height: `${transactions / 8000000 * 100}%` }} /><span style={{ height: `${service / 8000000 * 100}%` }} /></div>)}</div></div>
        <div className="wms-axis-labels">{revenueDays.map((_, index) => <span key={index}>{index + 1}</span>)}</div>
      </div>
      <div className="wms-insights">
        <div><span>Hari terbaik</span><strong>{combined.indexOf(best) + 1} Okt 2026</strong><p>{formatRupiah(best)}</p></div>
        <div><span>Rata-rata harian</span><strong>{formatRupiah((totals[0] + totals[1]) / revenueDays.length)}</strong><p>Gabungan transaksi dan Service</p></div>
        <div><span>Tren 3 hari terakhir</span><strong className="wms-trend">+{trend.toLocaleString('id-ID', { maximumFractionDigits: 1 })}%</strong><p>Dibanding 3 hari sebelumnya</p></div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="wms-panel wms-achievements" aria-label="Pencapaian, data contoh">
      <header><h4>Pencapaian <span className="wms-info">i</span></h4><div className="wms-category-labels">{['Produk', 'Dealer', 'Pelanggan', 'Sales'].map((label, index) => <span className={index === 0 ? 'is-selected' : ''} key={label}>{label}</span>)}</div></header>
      <ol>{topProducts.map((product, index) => <li key={product.label}><span className="wms-rank">{index + 1}</span><div><strong>{product.label}</strong><p>{product.detail}</p></div><div className="wms-product-units"><strong>{product.units}</strong><p>unit</p></div></li>)}</ol>
    </section>
  )
}

function Receivables() {
  return (
    <section className="wms-receivables-row" aria-label="Ringkasan dan pantauan Piutang Usaha">
      <div className="wms-panel wms-receivables">
        <header className="wms-panel-header"><h4>Ringkasan Piutang Usaha</h4><div className="wms-badges"><span className="wms-badge-blue">{receivables.documents} dokumen</span><span>{receivables.customers} customer</span></div></header>
        <div className="wms-receivables-body">
          <WmsDonut label="Total Piutang" value={formatRupiah(receivables.paid + receivables.outstanding)} segments={[{ label: 'Dibayar', value: receivables.paid, display: formatRupiah(receivables.paid), color: '#0f9f6e' }, { label: 'Sisa Saldo', value: receivables.outstanding, display: formatRupiah(receivables.outstanding), color: '#d4483b' }]} />
          <dl className="wms-paid-summary"><div><dt>Total Dibayar</dt><dd>{formatRupiah(receivables.paid)}</dd><dd>75,0%</dd></div><div><dt>Sisa Saldo</dt><dd>{formatRupiah(receivables.outstanding)}</dd><dd>25,0%</dd></div></dl>
        </div>
      </div>
      <div className="wms-panel wms-due-watch">
        <header className="wms-panel-header wms-header-split"><div><h4>Pantauan Jatuh Tempo</h4><p>Piutang jatuh tempo sampai 7 hari ke depan.</p></div><small>Tidak mengikuti filter tanggal</small></header>
        <div className="wms-due-groups">{dueDocuments.map(group => <section key={group.title} className={`wms-due-group wms-${group.tone}`}><header><h5>{group.title}</h5><span>{group.items.length}</span></header><ul>{group.items.map(item => <li key={item.number}><div className="wms-due-top"><div><strong>{item.number}</strong><p>{item.customer}</p></div><span>{item.status}</span></div><div className="wms-due-bottom"><span>{item.date}</span><strong>{formatRupiah(item.amount)}</strong></div></li>)}</ul></section>)}</div>
      </div>
    </section>
  )
}

function Inventory() {
  return (
    <section className="wms-panel wms-inventory" aria-label="Ringkasan Stok, data contoh">
      <header className="wms-panel-header wms-header-split"><div><h4>Ringkasan Stok</h4><p>Komposisi stok fisik Ready dan Konsinyasi.</p></div><div className="wms-badges"><span>{inventory.skus} SKU</span><span className="wms-badge-blue">Snapshot saat ini</span></div></header>
      <div className="wms-inventory-body">
        <WmsDonut label="Total Fisik" value={`${(inventory.ready + inventory.consigned).toLocaleString('id-ID')} unit`} segments={[{ label: 'Ready', value: inventory.ready, display: `${inventory.ready} unit`, color: '#0f9f6e' }, { label: 'Konsinyasi', value: inventory.consigned, display: `${inventory.consigned} unit`, color: '#c98407' }]} />
        <div><dl className="wms-stock-counts"><div><dt>Ready</dt><dd>{inventory.ready}</dd><dd>84,0% stok fisik</dd></div><div><dt>Konsinyasi</dt><dd>{inventory.consigned}</dd><dd>16,0% stok fisik</dd></div></dl><p className="wms-stock-note">Fisik dihitung dari Ready + Konsinyasi. Reserved tidak dihitung sebagai stok fisik. Ringkasan tidak mengikuti filter tanggal Dashboard.</p></div>
      </div>
    </section>
  )
}

export default function WmsPreview({ showCaption = true }) {
  return (
    <figure className="wms-preview" aria-label="Warehouse Management System dashboard with fictional data">
      {showCaption && <figcaption className="wms-preview-caption"><span>WMS dashboard <span aria-hidden="true">/</span> Static preview · Dummy data</span><span>All menu groups expanded</span></figcaption>}
      <p className="wms-mobile-hint">Swipe to explore the dashboard. Scroll the sidebar for all menus.</p>
      <div className="wms-viewport" tabIndex={0} role="region" aria-label="Static WMS dashboard preview; scroll horizontally on smaller screens">
        <div className="wms-shell" lang="id">
          <Sidebar />
          <div className="wms-main">
            <header className="wms-topbar">
              <div><p>WMS Core</p><h4>Dashboard - WMS Core</h4></div>
              <div className="wms-account-area"><span className="wms-notification" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M15 17H9m9-2V11a6 6 0 1 0-12 0v4l-2 2h16l-2-2Zm-8 5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span><div className="wms-account"><span className="wms-avatar">D</span><span><small>Akun</small><strong>Demo Administrator</strong></span><Chevron /></div></div>
            </header>
            <div className="wms-dashboard-scroll" tabIndex={0} role="region" aria-label="Dashboard WMS dengan data contoh; gulir untuk melihat ringkasan stok">
              <div className="wms-filter-row"><div className="wms-date-display"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2v4m8-4v4M3 8h14M4 4h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" /></svg><span>1 Okt 2026 - 14 Okt 2026</span><Chevron /></div><div className="wms-updated"><span>Pembaruan terakhir</span><strong><span aria-hidden="true">◷</span>14 Okt 2026 09:30 WIB</strong></div></div>
              <div className="wms-revenue-row"><Revenue /><Achievements /></div>
              <Receivables />
              <Inventory />
              <div className="wms-sales-action" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M10 4.5v11M4.5 10h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>Buat Sales Order</div>
            </div>
          </div>
        </div>
      </div>
      <p className="wms-demo-note">Source-based preview with fictional data and inactive controls. Menu visibility in the application depends on permissions and enabled modules.</p>
    </figure>
  )
}

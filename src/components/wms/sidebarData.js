// Presentation inventory from the WMS sidebar. No application routes or permissions.
// All menu groups are displayed expanded, including source feature-gated entries.
export const sidebarSections = [
  { items: [{ label: 'Dashboard', icon: 'dashboard', active: true }] },
  { title: 'Retail & Distribusi', items: [
    { label: 'Pesanan', icon: 'orders', children: ['Purchase Order', 'Sales Order', 'Konsinyasi'] },
    { label: 'Produk', icon: 'products', children: ['Kelola Harga', 'Daftar Harga'] },
  ] },
  { title: 'Perhitungan Harga', items: [{ label: 'Kalkulator', icon: 'reports' }] },
  { title: 'Warehouse', items: [
    { label: 'Inventory', icon: 'inventory', children: ['Transfer Inventori', 'Stok Master', 'Stok Opname'] },
    { label: 'WMS', icon: 'wms', children: ['GTIN', 'Supplier', 'Gudang', 'Bendera', 'Manajemen Rak'] },
  ] },
  { title: 'Promotion', items: [{ label: 'CRM', icon: 'customers', children: ['Dealer', 'Pelanggan', 'Promosi & Voucher'] }] },
  { title: 'Service Center', items: [
    { label: 'Pesanan', icon: 'service-orders', children: ['Service Order', 'Katalog Jasa'] },
    { label: 'Inventory SC', icon: 'inventory', children: ['Gudang Service', 'Gudang Stok'] },
  ] },
  { title: 'Laporan', items: [
    { label: 'Persediaan', icon: 'inventory' },
    { label: 'Transaksi', icon: 'reports' },
    { label: 'Pendapatan', icon: 'reports', children: ['Pendapatan Penjualan', 'Pendapatan Service'] },
    { label: 'Hutang & Piutang', icon: 'reports', children: ['Hutang Usaha', 'Piutang Usaha'] },
  ] },
  { title: 'Admin', items: [
    { label: 'Pengaturan', icon: 'settings', children: ['Manajemen Admin', 'Pengaturan Dokumen', 'Notifikasi'] },
    { label: 'Log Aktivitas', icon: 'activity' },
  ] },
]

// Synthetic portfolio fixtures, not customer records or project performance claims.
export const revenueDays = [
  [1800000, 180000], [3200000, 240000], [2400000, 120000], [4600000, 360000],
  [2800000, 220000], [5200000, 420000], [3800000, 300000], [4200000, 320000],
  [2600000, 180000], [5800000, 450000], [3400000, 260000], [6400000, 520000],
  [4800000, 380000], [7200000, 600000],
]
export const inventory = { ready: 840, consigned: 160, skus: 48 }
export const receivables = { paid: 36000000, outstanding: 12000000, documents: 12, customers: 8 }
export const topProducts = [
  { label: 'Produk Demo A', detail: 'Varian standar · DEMO-001', units: 124 },
  { label: 'Produk Demo B', detail: 'Varian standar · DEMO-002', units: 98 },
  { label: 'Produk Demo C', detail: 'Varian premium · DEMO-003', units: 76 },
  { label: 'Produk Demo D', detail: 'Varian standar · DEMO-004', units: 54 },
  { label: 'Produk Demo E', detail: 'Varian premium · DEMO-005', units: 32 },
]
export const dueDocuments = [
  { title: 'Sudah Jatuh Tempo', tone: 'danger', items: [
    { number: 'DEMO-SO-001', customer: 'Pelanggan Contoh A', date: '10 Okt 2026', status: 'Lewat 4 hari', amount: 3200000 },
    { number: 'DEMO-SO-002', customer: 'Pelanggan Contoh B', date: '12 Okt 2026', status: 'Lewat 2 hari', amount: 1800000 },
  ] },
  { title: '7 Hari Ke Depan', tone: 'warning', items: [
    { number: 'DEMO-SO-003', customer: 'Pelanggan Contoh C', date: '17 Okt 2026', status: 'H-3', amount: 4500000 },
    { number: 'DEMO-SO-004', customer: 'Pelanggan Contoh D', date: '20 Okt 2026', status: 'H-6', amount: 2500000 },
  ] },
]
export const formatRupiah = value => `Rp ${new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(value)}`

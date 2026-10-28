# WMS project brief and evidence (internal, not imported into the app)

Public title: Warehouse Management System.
Description: A warehouse operations application for receiving goods, tracking stock by warehouse, recording transfers, approving stock counts, and reviewing inventory movements.
Intended users: warehouse operators, finance staff and administrators, inferred from implemented access roles and workflows, not claims about actual adoption.
Operational context: keeping receipt quantities, per-warehouse balances, unit identities and movement history consistent across stock operations. No claim about a previous manual/spreadsheet process.
Contribution: user explicitly confirmed “Full-stack development” in this conversation. Do not claim sole authorship, module ownership, team size or development dates.
Stack: composer.json requires PHP ^8.3 and Laravel ^13.8; Blade views and JS modules are present. package.json and vite.config.js establish Tailwind/Vite. README.md lines 3–8 documents MySQL development. Existing PostgreSQL tag was unsupported and corrected. Production database is unknown. Installed packages alone do not establish Livewire/Sanctum/integration use; omit these from the selected stack.

Reference root: /home/tsi02/wms-mcc. Read only. No application boot, secret files, dependency install, database query, migrations, seeders, or test execution.

## Claims traced

| Public claim | Source evidence | Boundary |
| --- | --- | --- |
| Receive goods and track remaining quantities | routes/web.php transfer receive endpoints → InventoryController::transferStoreReceive → InboundTransferService::receiveItems (lines 35–285); resources/views/inventory/transfers/receive.blade.php; tests/Feature/StockIntegrityPurchaseReceiveTest.php | Service limits receipt to outstanding quantity, updates related PO quantities and marks partial/completed. Test assertions inspected, not executed. |
| Move stock between warehouses on receipt | InventoryController::transferStore (1301 onward), createTransfer/createTransferItems; InboundTransferService::receiveItems → StockMovementService::transferStockOut/transferStockIn (365–445); Models/InventoryTransfer.php; StockIntegrityTransferTest.php | Creating a ticket checks origin availability but movement occurs on receipt. Preserve this sequence; do not describe dispatch-time decrement or automatic reservations. |
| Count and approve stock | StockOpnameService::createOpname, processOpname/update counting method, approveOpname (lines 65–145); StockOpnameController routes; resources/views/inventory/stock-opnames/process.blade.php; StockIntegrityStockOpnameTest.php | Counting computes variance. Approval requires in-progress and all items counted; applies adjustments and marks completed. Negative identity reconciliation has a documented separate review boundary; do not claim fully automatic serial reconciliation. |
| Separate stock balances and movement records | database/migrations/2026_05_19_080231_create_05_inventory_tables.php; StockMovementService.php; Models/InventoryStock.php, StockLedger | Per-product/warehouse stock row is unique. Ledger holds in/out, resulting balance, document reference, actor and timestamp. Do not call it immutable or event-sourced. |
| Warehouse-scoped access | WarehouseAccessService.php; InventoryController::transferStore checks both creation endpoints, transferReceive/transferStoreReceive guard documents; docs/warehouse-access-model.md; TransferCreateWarehouseAccessTest.php | Restricted/no-assignment sees no rows. Transfer document access accepts either endpoint, while creation requires both. Avoid claims that all operations use identical endpoint rules. |
| Inventory movement reporting | ReportController::inventoryMovements (53+) → inventoryContext, inventoryMovementQuery (782+), explicit warehouse scope; resources/views/reports/inventory/movements.blade.php | Describes existing filtered movement report, not tested runtime behavior or all-report coverage. |
| Dashboard preview | Previously inspected dashboard/index.blade.php, business-analytics, inventory-summary, receivables-overview and dashboard-revenue-chart.js; portfolio src/components/wms/README.md | React adaptation with synthetic fixtures; not original screenshots, production data or complete WMS application. |

## Verified workflow for public walkthrough

1. Choose source/destination warehouses and products; access and origin availability are checked.
2. Create a transfer document and items; the receipt remains pending.
3. Record quantities received (and serials where required), within outstanding quantities.
4. The receipt transaction locks the transfer, updates origin/destination balances, writes paired ledger movements, and updates unit locations/identities as applicable.
5. Leave the transfer partial when quantities remain; mark completed when fully received. Movement history can be reviewed in inventory reports.

## Notable engineering details

- Receipt transactions combine document updates, stock mutations and ledger writes; lockForUpdate is used for transfer/stock records. This is a code observation, not proof of complete concurrency correctness.
- Shared stock movement service handles balances and ledger records, with a unique product/warehouse schema key and references to source documents.
- Warehouse access service centralizes restricted assignments and empty-access behavior; mutations check scope server-side and reporting applies it to queries.

## Omitted / unknown

No public client or expanded MCC identity, production adoption, deployment URL, public source URL, performance results, user/warehouse counts, individual module authorship or delivery dates established. Barcode scanning and external integrations are not verified and omitted. Rack workflows have feature-gated paths and were not fully traced for this case study; omit as a headline capability. No approved sanitized screenshots established. Keep the existing illustrative dashboard and request sanitized receiving, transfer, stock-count and movement-report captures in the handoff. Original screenshot is not republished.

## Reading example boundary

The current public walkthrough illustrates a transfer with 10 units requested, 6 received and 4 outstanding. These are explicitly fictional quantities, not records or reported outcomes. The source receipt service was rechecked: receipt quantity cannot exceed the remaining amount, internal receipts call paired stock-out/stock-in operations, and status becomes partial or completed based on total received. The public four-step walkthrough combines preparation/document creation from the five-step source sequence above. Contribution wording is unchanged.

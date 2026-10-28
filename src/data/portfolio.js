// import dashboardImage from '../assets/dashboard.png'
// import womenCenterImage from '../assets/women center.jpeg'

export const profile = {
  name: 'Averil Primayuda',
  role: 'Software Developer',
  employer: 'PT. YEKAPE SURABAYA',
  email: 'averilprimayuda@gmail.com',
  phone: '+62 8223008369',
  phoneLink: '+628223008369',
  github: 'https://github.com/Saident',
  linkedin: 'https://www.linkedin.com/in/averilprimayuda/',
}

export const projects = [
  {
    title: 'Warehouse Management System',
    category: 'Software engineering case study',
    description: 'Receiving, warehouse transfers, stock counts, and movement reporting in one application.',
    contribution: 'Full-stack development',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS'],
    featured: true,
    slug: 'warehouse-management-system',
    caseStudyPath: '/projects/warehouse-management-system',
    highlights: ['Partial receiving', 'Traceable stock movements', 'Warehouse-scoped access'],
    caseStudy: {
      lead: 'Goods arrive in parts, move between warehouses, and get counted again. This system connects each of those operations to the stock balance and the record behind it.',
      introduction: 'A stock balance tells you what is there. The next questions are just as useful: how did it get there, which document changed it, and what is still expected?',
      context: 'The WMS brings receiving, warehouse transfers, physical counts, and movement reporting together. It supports the work of warehouse operators, finance staff, and administrators.',
      records: [
        { title: 'The document', statement: 'What is expected.', detail: 'Products, quantities, and the progress of an operation.' },
        { title: 'The stock balance', statement: 'What is here now.', detail: 'Current quantities for a product in a warehouse.' },
        { title: 'The movement ledger', statement: 'What changed.', detail: 'Stock in, stock out, and a reference to the document.' },
      ],
      transferExample: { requested: 10, received: 6 },
      workflow: [
        { title: 'Start with a transfer', body: 'Choose the origin, destination, products, and quantities. Warehouse access and available origin stock are checked before the document is created.' },
        { title: 'Record what actually arrives', body: 'Enter the received quantity and any required serial numbers. The system checks that the receipt stays within the outstanding amount.' },
        { title: 'Update both warehouses', body: 'Recording the receipt reduces origin stock and increases destination stock. Paired movement entries link those changes back to the transfer.' },
        { title: 'Leave the remainder open', body: 'The transfer stays partial while units remain outstanding. Receiving the rest brings the document to completed.' },
      ],
      capabilities: [
        { title: 'Receive a purchase in stages.', body: 'Record goods against an inbound document, including receipts linked to a purchase order. Receive part now and return to the outstanding quantity later.', detail: 'Related purchase-order quantities and receipt statuses are updated together.' },
        { title: 'Count, review, then approve.', body: 'Enter physical quantities and review the difference from recorded stock. Every item must be counted before an in-progress count can be approved.', detail: 'Approved adjustments update stock and write movement entries.' },
        { title: 'Follow a movement back to its document.', body: 'Filter movement history by period and warehouse. See the product, incoming or outgoing quantity, resulting balance, and originating document reference.', detail: 'The report makes the recorded change inspectable.' },
        { title: 'Keep warehouse access specific.', body: 'Assigned locations and action permissions determine access. The server checks warehouse scope before transfer creation and receipt actions.', detail: 'Restricted users without warehouse assignments receive an empty scope.' },
      ],
      engineering: [
        { title: 'A receipt changes several records together.', mechanism: 'Transactions & row locks', body: 'Receipt processing runs inside a database transaction. It locks the transfer, checks remaining quantities, then updates the document and calls the stock movement service. Stock rows are also locked while their balances change.' },
        { title: 'Current stock and its history stay distinct.', mechanism: 'Stock balances & movement ledger', body: 'A unique product-and-warehouse row holds current quantities. Separate ledger entries retain the movement direction, quantity, resulting balance, actor, and document reference. Receiving, transfers, and stock-count approval use the same stock movement service.' },
        { title: 'Access rules reach the query.', mechanism: 'Server-side warehouse scope', body: 'A shared access service checks both warehouses when creating a transfer and document access when receiving it. The movement report applies warehouse restrictions to its query, so the scope also shapes which records are returned.' },
      ],
      delivered: 'Receiving, transfers, and approved stock counts each connect an operational document to a stock change and a movement record. That connection is the central thread of this application.',
    },
  },
  // {
  //   title: 'Integrated Social Media App',
  //   category: 'Thesis project · 2025',
  //   description: 'A full-stack social media management application, with authentication, database design, and a responsive admin dashboard.',
  //   contribution: 'Full-stack development',
  //   tags: ['Laravel', 'PHP', 'Blade', 'MySQL'],
  //   image: dashboardImage,
  //   imageAlt: 'Integrated Social Media App admin dashboard',
  //   link: 'https://github.com/Saident/integrated-social-media',
  // },
  // {
  //   title: 'Women Center',
  //   category: 'Bootcamp capstone · 2023',
  //   description: "The Go backend for a women's wellness platform, developed with frontend and mobile teams. RESTful APIs and a Dockerized service.",
  //   contribution: 'Backend development',
  //   tags: ['Go', 'Docker', 'MySQL', 'REST API'],
  //   image: womenCenterImage,
  //   imageAlt: 'Women Center admin interface',
  //   link: 'https://github.com/Kelompok-4-Capstone-Alterra/go_women_center',
  // },
]

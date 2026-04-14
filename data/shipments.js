export const shipments = [
   {
    id: 'TRK0012',
    sender: 'ABC Trading Co., Ltd.',
    receiver: 'XYZ Retail Store',
    fromLocation: 'Sihanoukville',
    toLocation: 'Phnom Penh',
    status: 'In Transit',
    progress: 65,
    weight: '25 kg',
    value: '$500',
    createdDat: '2026-04-10',
    estimatedDelivery: '2026-04-15',
    timeline: [
        { status: 'Picked up', date:'2026-04-10 -8:30 AM', location: 'Phnom Penh Store'},
        { status: 'In Transit', date: '2026-04-12 02:15 PM', location: 'Highway Route 04'},
        { status: 'Out for Delivery', date: '2026-04-14 10:00 AM', location: 'Sihanoukville'},
    ]
   },
   {
    id: 'TRK00123',
    sender: 'Import Export Ltd.',
    receiver: 'Restaurant Chain Khmer',
    fromLocation: 'Ho Chi Minh City',
    toLocation: 'Phnom Penh',
    status: 'Devlivery',
    progress: 100,
    weight: '150 kg',
    value: '$2, 500',
    createdDate: '2026-04-05',
    estimatedDelivery: '2026-04-12',
    timeline: [
        {status: 'Picked up', date: '2026-04-05 09:00 AM', location: 'HCMC Port' },
        {status: 'Customs Clearance', date: '2026-04-06 04:30 PM', location: 'Border'},
        {status: 'In transit', date: '2026-04-07 08:00 AM', location: 'Route to Phnom Penh' },
        {status: 'Delivered', date: '2026-04-10 02:00 PM', location: 'Phnom Penh Branch' },
    ]
   },
   {
    id: 'TRK001234',
    sender: 'Tech Solutions Bangkok',
    receiver: 'Norton University IT Dept',
    fromLocation: 'Bangkok',
    toLocation: 'Phnom Penh',
    status: 'In Transit',
    progress: 65,
    weight: '45 kg',
    value: '$4,500',
    createdDate: '2026-04-08',
    estimatedDelivery: '2026-04-14',
    timeline: [
      { status: 'Picked up', date: '2026-04-08 10:00 AM', location: 'Bangkok Warehouse' },
      { status: 'Customs Clearance', date: '2026-04-10 02:00 PM', location: 'Poipet Border' },
      { status: 'In Transit', date: '2026-04-11 09:00 AM', location: 'Pursat Province' },
    ]
  },
  {
    id: 'TRK0012345',
    sender: 'Global Apparel Co.',
    receiver: 'Sihanoukville Port Authority',
    fromLocation: 'Shanghai',
    toLocation: 'Sihanoukville',
    status: 'Customs Clearance',
    progress: 40,
    weight: '1,200 kg',
    value: '$12,800',
    createdDate: '2026-04-01',
    estimatedDelivery: '2026-04-18',
    timeline: [
      { status: 'Picked up', date: '2026-04-01 08:30 AM', location: 'Shanghai Port' },
      { status: 'At Sea', date: '2026-04-03 11:00 PM', location: 'South China Sea' },
      { status: 'Customs Clearance', date: '2026-04-12 01:00 PM', location: 'Sihanoukville Special Economic Zone' },
    ]
  },
  {
    id: 'TRK00123456',
    sender: 'Agri-Seed Vietnam',
    receiver: 'Battambang Farmers Coop',
    fromLocation: 'Can Tho',
    toLocation: 'Battambang',
    status: 'Delivered',
    progress: 100,
    weight: '500 kg',
    value: '$1,200',
    createdDate: '2026-03-28',
    estimatedDelivery: '2026-04-05',
    timeline: [
      { status: 'Picked up', date: '2026-03-28 07:00 AM', location: 'Can Tho Hub' },
      { status: 'Customs Clearance', date: '2026-03-30 03:00 PM', location: 'Moc Bai' },
      { status: 'Delivered', date: '2026-04-04 10:30 AM', location: 'Battambang Warehouse' },
    ]
  },
  {
    id: 'TRK001234567',
    sender: 'Electronics Hub Singapore',
    receiver: 'Mobile World Cambodia',
    fromLocation: 'Singapore',
    toLocation: 'Phnom Penh',
    status: 'In Transit',
    progress: 85,
    weight: '12 kg',
    value: '$8,900',
    createdDate: '2026-04-10',
    estimatedDelivery: '2026-04-15',
    timeline: [
      { status: 'Picked up', date: '2026-04-10 04:00 PM', location: 'Changi Air Cargo' },
      { status: 'In Transit', date: '2026-04-12 10:00 AM', location: 'Phnom Penh Airport' },
    ]
  },
  {
    id: 'TRK0012345678',
    sender: 'Furniture Designs KR',
    receiver: 'Luxury Living Condo',
    fromLocation: 'Seoul',
    toLocation: 'Phnom Penh',
    status: 'Picked up',
    progress: 15,
    weight: '320 kg',
    value: '$5,400',
    createdDate: '2026-04-12',
    estimatedDelivery: '2026-05-02',
    timeline: [
      { status: 'Picked up', date: '2026-04-12 09:00 AM', location: 'Incheon Port' },
    ]
  },
  {
    id: 'TRK00123456789',
    sender: 'Khmer Coffee Roasters',
    receiver: 'Brew Coffee Tokyo',
    fromLocation: 'Mondulkiri',
    toLocation: 'Tokyo',
    status: 'In Transit',
    progress: 50,
    weight: '25 kg',
    value: '$950',
    createdDate: '2026-04-09',
    estimatedDelivery: '2026-04-20',
    timeline: [
      { status: 'Picked up', date: '2026-04-09 11:00 AM', location: 'Sen Monorom Hub' },
      { status: 'Processing', date: '2026-04-11 02:00 PM', location: 'Phnom Penh Sorting Facility' },
    ]
  },
  {
    id: 'TRK00124',
    sender: 'Medical Supplies Inc',
    receiver: 'Calmette Hospital',
    fromLocation: 'Paris',
    toLocation: 'Phnom Penh',
    status: 'Customs Clearance',
    progress: 75,
    weight: '5 kg',
    value: '$15,000',
    createdDate: '2026-04-11',
    estimatedDelivery: '2026-04-14',
    timeline: [
      { status: 'Picked up', date: '2026-04-11 08:00 AM', location: 'Charles de Gaulle Airport' },
      { status: 'Customs Clearance', date: '2026-04-13 11:30 AM', location: 'Phnom Penh Customs' },
    ]
  },
  {
    id: 'TRK00125',
    sender: 'Solar Green Power',
    receiver: 'Eco Farm Siem Reap',
    fromLocation: 'Guangzhou',
    toLocation: 'Siem Reap',
    status: 'In Transit',
    progress: 30,
    weight: '850 kg',
    value: '$11,200',
    createdDate: '2026-04-05',
    estimatedDelivery: '2026-04-22',
    timeline: [
      { status: 'Picked up', date: '2026-04-05 02:00 PM', location: 'Guangzhou Port' },
      { status: 'In Transit', date: '2026-04-10 08:00 AM', location: 'Approaching Sihanoukville' },
    ]
  },
  {
    id: 'TRK00126',
    sender: 'Construction Pro Thai',
    receiver: 'Borey Project Management',
    fromLocation: 'Rayong',
    toLocation: 'Kandal',
    status: 'Delivered',
    progress: 100,
    weight: '2,500 kg',
    value: '$7,800',
    createdDate: '2026-03-25',
    estimatedDelivery: '2026-04-02',
    timeline: [
      { status: 'Picked up', date: '2026-03-25 09:00 AM', location: 'Rayong Factory' },
      { status: 'Customs Clearance', date: '2026-03-28 05:00 PM', location: 'Cham Yeam Border' },
      { status: 'Delivered', date: '2026-04-01 04:30 PM', location: 'Kandal Construction Site' },
    ]
  }
]




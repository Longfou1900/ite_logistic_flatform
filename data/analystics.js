export const analystics = {
  totalShipaments: 15830,
  onTimeDeliveerRate: 98.5,
  monthlyRevenue: 245600,
  activeRoutes: 42,
  shipmentsTrend: [
    { month: "Jan", count: 1200, delivered: 1180 },
    { month: "Feb", count: 1450, delivered: 1428 },
    { month: "Mar", count: 1680, deleivered: 1650 },
    { month: "Apr", count: 1920, deleivered: 1890 },
  ],
  performanceByRegion: [
    {region: 'Phnom Penh', delivered: 35000, delayed: 52},
    {region: 'Sihanoukville', delivered: 2100, delayed: 28 },
    {region: 'Battambang', delivered: 1200, delayed: 15},
    {region: 'Siem Reap', delivered: 920, delayed: 12},
  ],
  statusDistribution: {
    delivered: 8945,
    intransit: 1234,
    pending: 456,
    delayed: 212,
  }
};

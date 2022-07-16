export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'IT Infrastructure', type: 'label' },
  {
    name: 'IT Asset Management',
    icon: 'inventory',
    children: [
      { name: 'Peminjaman', iconText: 'RP', path: '/material/form' },
      { name: 'Pengembalian', iconText: 'RN', path: '/' },
      { name: 'Pendataan', iconText: 'RD', path: '/' },
      { name: 'Inventory List & Status', iconText: 'IA', path: '/material/table' },
      { name: 'Administrator Menu', iconText: 'AM', path: '/material/admin-form' },
    ],
  },
  {
    name: 'IT Support',
    icon: 'build',
    children: [
      { name: 'Submit Request', iconText: 'SR', path: '/' },
      { name: 'Cek Status Request', iconText: 'CS', path: '/' },
    ],
  },

];

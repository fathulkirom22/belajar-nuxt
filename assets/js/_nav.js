export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/',
        fontIcon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Agent']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Entry Order Quarantine',
        to: '/agent/entry-order-quarantine',
        fontIcon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Inbound',
        to: '/agent/inbound',
        fontIcon: 'cil-pencil',
        items: [
          {
            name: 'New',
            to: '/agent/inbound/new'
          },
          {
            name: 'Issue',
            to: '/agent/inbound/issue'
          },
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Admin']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Inbound',
        to: '/admin/inbound',
        fontIcon: 'cil-pencil',
        items: [
          {
            name: 'New',
            to: '/admin/inbound/new'
          },
          {
            name: 'Issue',
            to: '/admin/inbound/issue'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Invoices',
        to: '/admin/invoices',
        fontIcon: 'cil-drop',
        items: [
          {
            name: 'New',
            to: '/admin/invoices/new'
          },
          {
            name: 'Issue',
            to: '/admin/invoices/issue'
          },
        ]
      },
    ]
  }
]
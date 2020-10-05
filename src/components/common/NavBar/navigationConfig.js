import {
    ListAlt, Equalizer, PermContactCalendar, PersonOutline, ExitToApp,
  } from '@material-ui/icons'

  export default [
    {
      title: 'SHIPMENT MANAGEMENT',
      pages: [
        {
          title: 'Shipment Orders',
          href: '/shipment',
          icon: ListAlt,
        },
      ],
    },
    {
      title: 'ACCOUNT MANAGEMENT',
      pages: [
        {
          title: 'Billing',
          href: '/billing',
          icon: Equalizer,
        },
        {
          title: 'Address Book',
          href: '/address',
          icon: PermContactCalendar,
        },
        {
          title: 'Account Information',
          href: '/account',
          icon: PersonOutline,
        },
      ],
    },
  ]

  export const signOutData = {
    icon: ExitToApp,
    title: 'Log Out',
  }

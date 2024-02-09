import pages from 'src/config/pages' // Get Pages from config

//Places
export default [
  {
    title: 'iplaces.cms.sidebar.adminGroup',
    icon: 'fa-light fa-map-location-dot',
    children: [
      pages.qplace.places, // places setup
      pages.qplace.categories, // categories setup
    ]
  },
]

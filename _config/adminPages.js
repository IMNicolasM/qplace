export default {
  places: {
    permission: 'iplaces.places.manage',
    activated: true,
    path: '/iplaces/places/index',
    name: 'qplace.admin.places.index',
    crud : import('@imagina/qplace/_crud/places'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplaces.cms.sidebar.adminPlaces',
    icon: 'fa-light fa-map-location-dot',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },

  categories: {
    permission: 'iplaces.categories.manage',
    activated: true,
    path: '/iplaces/categories/index',
    name: 'qplace.admin.categories',
    crud : import('@imagina/qplace/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iplaces.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  }
}

window.DESK_DATA = {
  categories: window.DESK_CORE.categories,
  microswitches: window.DESK_CORE.microswitches,
  products: [
    ...(window.DESK_MICE || []),
    ...(window.DESK_MONITORS || [])
    // Future categories will be added here, e.g.:
    // ...(window.DESK_KEYBOARDS || []),
    // ...(window.DESK_CHAIRS || []),
    // ...(window.DESK_DESKS || [])
  ]
};

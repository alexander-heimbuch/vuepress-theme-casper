import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import createStore from './store'
import types from './store/types'

import Layout from './Layout'

import { throttle } from "lodash"

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Vuex)

  const store = createStore()
  sync(store, router)

  router.addRoutes([
    { path: '/category/:category?', component: Layout },
    { path: '/posts/', component: Layout },
    { path: '/tags/:tag?', component: Layout }
  ])

  router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
      // Start the route progress bar.
      store.commit(types.LOAD_START)
    }

    next()
  })

  router.afterEach(() => {
    // Complete the animation of the route progress bar.
    store.commit(types.LOAD_END)
  })

  options.store = store

  Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll')
        }
      }
      window.addEventListener('scroll', throttle(f, 200), { passive: true })
    }
  })
}

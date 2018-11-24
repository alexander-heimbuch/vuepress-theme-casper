import { pick, get } from 'lodash'

import types from './types'
import { formatPages, formatPage, type, header, posts, footer, social, navigation } from './utils'

export default {
  [types.SITE_UPDATE]: (state, site) => {
    const themeConfig = get(site, 'themeConfig', {})
    const siteConfig = pick(site, ['title', 'description', 'base'])

    state.blog = Object.assign({}, siteConfig, themeConfig)
    state.index = formatPages(get(site, 'pages', []))
    state.footer = footer(state)
    state.social = social(site)
  },

  [types.PAGE_UPDATE]: (state, page) => {
    state.current = formatPage(page)
  },

  [types.ROUTER_PARAMS]: (state, params) => {
    state.params = params
    state.posts = posts(state)
    state.nav = navigation(state)
    state.type = type(state)
    state.header = header(state)
  },

  [types.TOGGLE_SIDEBAR]: (state, sidebarState) => {
    state.sidebarOpen = sidebarState
  },

  [types.LOAD_START]: state => {
    state.loading = true
  },

  [types.LOAD_END]: state => {
    state.loading = false
  },

  [types.SEARCH]: (state, query) => {
    state.search = query
  }
}

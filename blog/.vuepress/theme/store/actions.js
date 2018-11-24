import types from './types'

export default ({
  updateSite: ({ commit }, site) => commit(types.SITE_UPDATE, site),
  updatePage: ({ commit }, page) => commit(types.PAGE_UPDATE, page),
  updateParams: ({ commit }, params) => commit(types.ROUTER_PARAMS, params),
  searchInput: ({ commit }, { target }) => {
    commit(types.SEARCH, target.value)
  }
})

import { getOr } from 'lodash/fp'

export default {
  blog: getOr({}, 'blog'),
  current: getOr({}, 'current'),
  index: getOr({}, 'index'),
  loading: getOr(false, 'loading'),
  params: getOr({}, 'params'),

  type: getOr(null, 'type'),

  header: getOr(null, 'header'),

  posts: getOr([], 'posts'),
  footer: getOr([], 'footer'),
  nav: getOr([], 'nav'),

  social: getOr([], 'social')
}

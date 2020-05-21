<template>
  <div class="site-wrapper">
    <site-header :blog="blog" :header="header">
      <site-navigation slot="header"></site-navigation>
    </site-header>
    <component :is="content"></component>
    <site-footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Post from './layouts/Post'
import Page from './layouts/Page'
import Posts from './layouts/Posts'

import SiteHeader from './partials/Header'
import SiteFooter from './partials/Footer'
import SiteNavigation from './partials/Navigation'

export default {
  components: { Page, Posts, Post, SiteFooter, SiteHeader, SiteNavigation },
  methods: {
    ...mapActions(['updateSite', 'updatePage', 'updateParams']),
      updateLayoutClass () {
        this.$el.parentNode.className = `${this.type}-template`
      }
    },
  computed: {
    ...mapGetters(['type', 'blog', 'header']),

    content () {
      switch (this.type) {
        case 'home':
        case 'tags':
        case 'posts':
        case 'category':
          return 'posts'
        case 'post':
          return 'post'
        case 'page':
          return 'page'
      }
    },
  },
  watch: {
    $page () {
      this.updatePage(this.$page)
      this.updateLayoutClass()
    },
    $route () {
      this.updateParams(this.$route.params)
      this.updateLayoutClass()
    }
  },
  mounted () {
    this.updatePage(this.$page)
    this.updateSite(this.$site)
    this.updateParams(this.$route.params)
    this.updateLayoutClass()

  }
}
</script>

<style>
  @import './styles/global.css';
  @import './styles/screen.css';
  
  @import '~prismjs/themes/prism-tomorrow.css';

  /* Code section
  /* ---------------------------------------------------------- */
  div[class^="language-"] {
    min-width: 100%;
    max-width: 100%;
  }
</style>

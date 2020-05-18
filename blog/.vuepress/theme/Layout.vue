<template>
  <div class="site-wrapper" v-scroll="handleScroll">
    <site-header id="site-header" ref="siteHeader" :blog="blog" :header="header">
      <site-navigation slot="header"></site-navigation>
    </site-header>
    <component :is="content"></component>
    <div class="outer site-nav-main" :style="backgroundStyle" v-if="isHome">
      <div class="inner">
        <site-navigation :site-nav-fixed="fixedNav"></site-navigation>
      </div>
    </div>
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
  data: function () {
    return {
      fixedNav: ''
    }
  },
  methods: {
    ...mapActions(['updateSite', 'updatePage', 'updateParams']),
    updateLayoutClass () {
      this.$el.parentNode.className = `${this.type}-template`
    },
    handleScroll: function () {
      const scroll = window.scrollY;
      const headerElement = this.$refs.siteHeader;
      const headerPosition = headerElement.$el.clientTop;
      const headerHeight = headerElement.$el.clientHeight;
      this.fixedNav = scroll > headerPosition + headerHeight ? 'fixed-nav-active' : '';
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
    isHome () {
      return this.type === 'home';
    },
    backgroundStyle() {
      if (this.header.coverImage) {
        return {
          "background-image": `url(${this.$withBase(this.header.coverImage)})`
        };
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

  /* Code section
  /* ---------------------------------------------------------- */
  div[class^="language-"] {
    min-width: 100%;
    max-width: 100%;
  }
</style>

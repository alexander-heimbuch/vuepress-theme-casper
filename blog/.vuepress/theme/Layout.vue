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

<style lang="scss">
  @import './styles/reset';
  @import './styles/defaults';

  /* 1. Global - Set up the things
  /* ---------------------------------------------------------- */

  body {
    background: #f4f8fb;
  }

  .img {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
    text-indent: -9999px;
  }


  /* 2. Layout - Page building blocks
  /* ---------------------------------------------------------- */

  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .site-main {
    z-index: 90;
    flex-grow: 1;
  }

  /* Full width page blocks */
  .outer {
    position: relative;
    padding: 0 4vw;
  }

  /* Centered content container blocks */
  .inner {
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
  }

  /* 3. Special Template Styles
  /* ---------------------------------------------------------- */
  @media (min-width: 900px) {
    .home-template,
    .category-template,
    .tags-template,
    .posts-template,
    .author-template {
      .post-feed {
        margin-top: -70px;
        padding-top: 0;
      }

      .site-nav {
        position: relative;
        top: -70px;
      }
    }

  }

</style>

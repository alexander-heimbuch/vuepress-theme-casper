<template>
  <div class="site-wrapper">
    <site-header :blog="blog" :header="header">
      <nav class="site-nav-center">
        <a :href="blog.base" class="site-nav-logo">
          <img v-if="blog.logo" class="site-logo" :src="blog.logo" :alt="blog.title" />
          <span v-else>{{ blog.title }}</span>
        </a>
      </nav>
    </site-header>

    <main id="site-main" class="site-main outer">
      <div class="inner">
        <error description="Page not found" code="404" :link="blog.base" />
      </div>
    </main>

    <aside class="outer" v-if="posts.length > 0">
      <div class="inner">
        <div class="post-feed">
          <card v-for="(post, index) in posts.slice(0, 3)" :post="post" :key="index" />
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Card from './partials/Card';
import SiteHeader from './partials/Header';
import Error from './partials/Error'

export default {
  data() {
    return {
      header: {
        showCover: false,
        coverImage: null,
        title: null,
        description: null
      }
    };
  },
  components: { SiteHeader, Card, Error },
  methods: {
    ...mapActions(['updateSite', 'updatePage', 'updateParams']),
    updateLayoutClass() {
      this.$el.parentNode.className = `error-template`;
    }
  },
  computed: {
    ...mapGetters(['type', 'blog', 'posts'])
  },
  watch: {
    $page() {
      this.updatePage(this.$page);
      this.updateLayoutClass();
    },
    $route() {
      this.updateParams(this.$route.params);
    }
  },
  mounted() {
    this.updatePage(this.$page);
    this.updateSite(this.$site);
    this.updateParams(this.$route.params);
    this.updateLayoutClass();
  }
};
</script>

<style>
  @import './styles/global.css';
  @import './styles/screen.css';
</style>

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

<style lang="scss">
@import "./styles/reset";
@import "./styles/defaults";

/* 1. Global - Set up the things
  /* ---------------------------------------------------------- */

body {
  background: #f4f8fb;
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

.site-nav-logo {
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;
}

.site-nav-logo:hover {
  text-decoration: none;
}

.site-nav-logo img {
  display: block;
  width: auto;
  height: 21px;
}

/* 9. Error Template
  /* ---------------------------------------------------------- */

.error-template .site-main {
  padding: 7vw 4vw;
}

.site-nav-center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.site-nav-center .site-nav-logo {
  margin-right: 0;
}
</style>

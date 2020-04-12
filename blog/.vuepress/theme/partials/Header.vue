<template>
  <header :class="headerClasses">
    <div v-if="isArchive" class="outer site-nav-main">
      <div class="inner">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="outer" :class="headerBackgroundClasses" :style="backgroundStyle">
      <div class="inner">
        <slot name="header" v-if="isHome || isPage || isPost"></slot>
        <div
          class="site-header-content"
          v-if="header.showCover"
        >
          <h1 class="site-title">
            <img
              v-if="header.logo"
              class="site-logo"
              :src="$withBase(header.logo)"
              :alt="header.title"
            />
            <span v-else>{{ header.title }}</span>
          </h1>
          <h2 class="site-description" v-if="header.description">
            {{ header.description }}
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["header"],
  computed: {
    ...mapGetters(["type"]),

    backgroundStyle() {
      if (this.header.coverImage) {
        return {
          "background-image": `url(${this.$withBase(this.header.coverImage)})`
        };
      }

      return {};
    },

    isHome() {
      return this.type === "home"
    },

    isArchive() {
      return this.type === "category" || this.type === "tags" || this.type === "posts"
    },

    isPage() {
      return this.type === "page"
    },

    isPost() {
      return this.type === "post"
    },

    headerClasses() {
      return {
        "site-header": this.isPage || this.isPost,
        "site-home-header": this.isHome,
        "site-archive-header": this.isArchive
      };
    },

    headerBackgroundClasses() {
      const headerImage = !!this.header.coverImage;
      return {
        "responsive-header-img": headerImage,
        "no-image": !headerImage,
        "site-header-background": this.isArchive || this.isHome,
        "site-nav-main": this.isPage || this.isPost
      };
    }
  }
};
</script>

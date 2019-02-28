<template>
  <nav class="site-nav">
    <div class="site-nav-left">
      <router-link v-if="!isHome && blog.logo" class="site-nav-logo" to="/">
        <img :src="$withBase(blog.logo)" :alt="blog.title" />
      </router-link >
      <router-link v-if="!isHome && !blog.logo" class="site-nav-logo" to="/">
        {{ blog.title }}
      </router-link >
      <ul class="nav" v-if="nav" role="menu">
        <li v-for="(item, index) in nav" role="menuitem" :key="index">
          <router-link :class="{ active: item.active }" :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
    <div class="site-nav-right">
      <div class="social-links">
        <social-link v-for="(channel, index) in social" :url="channel.url" :type="channel.type" :key="index" />
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  import SocialLink from './SocialLink'

  export default {
    components: { SocialLink },
    computed: {
      ...mapGetters(['blog', 'type', 'social', 'nav']),
      isHome() {
        return this.type === 'home'
      }
    }
  }
</script>

<style lang="scss">

  .site-nav {
    position: relative;
    z-index: 300;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow-y: hidden;
    height: 40px;
    font-size: 1.2rem;
  }

  .site-nav-left {
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    margin-right: 10px;
    padding-bottom: 80px;
    letter-spacing: 0.4px;
    white-space: nowrap;

    -ms-overflow-scrolling: touch;
  }

  /* Site Nav Hack Explanation (above):

  What's happening above it .site-nav-left is set to overflow-x and allow sideways scrolling, so that when there isn't enough space for all nav items (either due to lots of nav items, or a small viewport), you can still scroll side-to-side to reach them.

  The knock-on effect of this is ugly browser-scroll bars at the bottom, so 80px of padding-bottom and a 40px fixed height parent (.site-nav) hides that entirely. Slightly hacky code. But nice clean end-result.

  */

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

  .nav {
    display: flex;
    margin: 0 0 0 -12px;
    padding: 0;
    list-style: none;

    li {
      display: block;
      margin: 0;
      padding: 0;
      text-transform: uppercase;

      a {
        display: block;
        margin: 0;
        padding: 10px 12px;
        color: #fff;
        opacity: 0.8;

        &.active {
          font-weight: 700;
        }

        &:hover {
          text-decoration: none;
          opacity: 1;
        }
      }
    }
  }

  .site-nav-right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 40px;
  }

  .social-links {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .social-links a:last-of-type {
    padding-right: 20px;
  }

  .subscribe-button {
    display: block;
    padding: 4px 10px;
    border: #fff 1px solid;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1em;
    border-radius: 10px;
    opacity: 0.8;
  }

  .subscribe-button:hover {
    text-decoration: none;
    opacity: 1;
  }

  @media (max-width: 700px) {
    .site-header {
      padding-right: 0;
      padding-left: 0;
    }
    .site-nav-left {
      margin-right: 0;
      padding-left: 4vw;
    }
    .site-nav-right {
      display: none;
    }
  }
</style>

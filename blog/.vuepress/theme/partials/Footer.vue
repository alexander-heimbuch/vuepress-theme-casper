<template>
  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright"><a :href="$withBase('/')">{{ blog.title }}</a> &copy; {{ year }}</section>
      <nav class="site-footer-nav">
        <a v-for="(item, index) in footer"
          :key="index"
          :href="item.external ? item.link : $withBase(item.link)"
          :target="item.external ? '_blank' : '_top'"
          rel="noopener"
        >{{ item.text }}</a>
      </nav>
    </div>
  </footer>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: { },
    computed: {
      ...mapGetters(['blog', 'footer']),
      year () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .site-footer {
    position: relative;
    padding-top: 20px !important;
    padding-bottom: 60px !important;
    color: #fff;
    background: darken($darkgrey, 15%);
  }

  .site-footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: rgba(255,255,255,0.7);
    font-size: 1.3rem;
  }

  .site-footer-content a {
    color: rgba(255,255,255,0.7);
  }

  .site-footer-content a:hover {
    color: rgba(255,255,255,1);
    text-decoration: none;
  }

  .site-footer-nav {
    display: flex;
  }

  .site-footer-nav a {
    position: relative;
    margin-left: 20px;
  }

  .site-footer-nav a:before {
    content: "";
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  .site-footer-nav a:first-of-type:before {
    display: none;
  }

  @media (max-width: 650px) {
    .site-footer-content {
      flex-direction: column;
    }
    .site-footer-nav a:first-child {
      margin-left: 0;
    }
  }
</style>

<template>
  <main id="site-main" class="site-main outer">
    <div class="inner">
      <article class="post-full" :class="{ 'no-image': !current.image }">
        <header class="post-full-header">
          <h1 class="post-full-title">{{ current.title }}</h1>
        </header>

        <figure v-if="current.image" class="post-full-image">
          <img sizes="(max-width: 800px) 400px, (max-width: 1170px) 1170px, 2000px" :src="$withBase(current.image)" :alt="current.title" />
        </figure>

        <section class="post-full-content">
          <Content class="post-content" />
        </section>
      </article>
    </div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { head, kebabCase } from 'lodash'

  export default {
    computed: mapGetters(['current']),
    methods: {
      kebabCase
    }
  }
</script>

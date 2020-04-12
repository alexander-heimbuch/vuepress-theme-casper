<template>
  <article class="post-card post" :class="{ 'no-image': !post.image, 'post-card-large': !!large }">
    <a v-if="post.image" class="post-card-image-link" :href="$withBase(post.path)" aria-label="link to post">
      <img class="post-card-image" :src="$withBase(this.post.image)" sizes="(max-width: 1000px) 400px, 700px" loading="lazy" :alt="post.title" />
    </a>
    <div class="post-card-content">
        <a class="post-card-content-link" :href="$withBase(post.path)" aria-label="link to post">
          <header class="post-card-header">
            <span v-if="post.tags.length > 0" class="post-card-primary-tag">{{ post.tags[0] }}</span>
            <h2 class="post-card-title">{{ post.title }}</h2>
          </header>
          <section class="post-card-excerpt" v-if="post.excerpt">
            <p>{{ striptags(post.excerpt) }}</p>
          </section>
        </a>
        <footer class="post-card-meta">
          <div class="post-card-byline-content">
            <span class="post-card-byline-date">
              <time v-if="datetime" :datetime="datetime">{{ localeDate }}</time> <span v-if=" post.readingTime" class="bull">&bull;</span> {{ post.readingTime }}</span>
            </span>
          </div>
        </footer>
    </div>
  </article>
</template>

<script>
  import striptags from 'striptags'

  export default {
    props: ['post', 'large'],
    computed: {
      imageStyle () {
        return {
          'background-image': `url(${this.$withBase(this.post.image)})`
        }
      },

      datetime () {
        return this.post.publish && new Date(this.post.publish).toISOString()
      },

      localeDate () {
        return this.post.publish && new Date(this.post.publish).toLocaleDateString()
      },
    },
    methods: {
      striptags
    }
  }
</script>

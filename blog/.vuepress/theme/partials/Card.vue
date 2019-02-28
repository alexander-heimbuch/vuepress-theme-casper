<template>
  <article class="post-card" :class="{ 'no-image': !post.image }">
    <a v-if="post.image" class="post-card-image-link" :href="$withBase(post.path)" aria-label="link to post">
      <div class="post-card-image" :style="imageStyle"></div>
    </a>
    <div class="post-card-content">
        <a class="post-card-content-link" :href="$withBase(post.path)" aria-label="link to post">
          <header class="post-card-header">
            <span v-if="post.tags" class="post-card-tags">{{ post.tags.join(' ') }}</span>
            <h2 class="post-card-title">{{ post.title }}</h2>
          </header>
          <section class="post-card-excerpt" v-if="post.excerpt">
            <p>{{ striptags(post.excerpt) }}</p>
          </section>
        </a>
        <footer class="post-card-meta">
          <span class="reading-time" v-if="post.readingTime">{{ post.readingTime }}</span>
        </footer>
    </div>
  </article>
</template>

<script>
  import striptags from 'striptags'

  export default {
    props: ['post'],
    computed: {
      imageStyle () {
        return {
          'background-image': `url(${this.$withBase(this.post.image)})`
        }
      }
    },
    methods: {
      striptags
    }
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .post-card {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 20px 40px;
    min-height: 300px;
    background: #fff center center;
    background-size: cover;
    border-radius: 5px;
    box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    transition: all 0.5s ease;
  }

  .post-card:hover {
    box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }

  .post-card-image-link {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }

  .post-card-image {
    width: auto;
    height: 200px;
    background: $lightgrey no-repeat center center;
    background-size: cover;
  }

  .post-card-content-link {
    position: relative;
    flex-grow: 1;
    display: block;
    padding: 25px 25px 0;
    color: $darkgrey;
  }

  .post-card-content-link:hover {
    text-decoration: none;
  }

  .post-card-tags {
    display: block;
    margin-bottom: 4px;
    color: $midgrey;
    font-size: 1.2rem;
    line-height: 1.15em;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .post-card-title {
    margin-top: 0;
  }

  .post-card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card-excerpt {
    font-family: Georgia, serif;
  }

  .post-card-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 25px 25px;
  }

  .avatar-wrapper {
    display: block;
    width: 100%;
    height: 100%;
    background: lighten($lightgrey, 10%);
    border-radius: 100%;

    object-fit: cover;
  }

  .post-card-meta .profile-image-wrapper,
  .post-card-meta .avatar-wrapper {
    position: relative;
  }

  .author-list {
    display: flex;
    flex-wrap: wrap-reverse;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .author-list-item {
    position: relative;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
  }

  .author-list-item:nth-child(1) {
    z-index: 10;
  }
  .author-list-item:nth-child(2) {
    z-index: 9;
  }
  .author-list-item:nth-child(3) {
    z-index: 8;
  }
  .author-list-item:nth-child(4) {
    z-index: 7;
  }
  .author-list-item:nth-child(5) {
    z-index: 6;
  }
  .author-list-item:nth-child(6) {
    z-index: 5;
  }
  .author-list-item:nth-child(7) {
    z-index: 4;
  }
  .author-list-item:nth-child(8) {
    z-index: 3;
  }
  .author-list-item:nth-child(9) {
    z-index: 2;
  }
  .author-list-item:nth-child(10) {
    z-index: 1;
  }

  .moving-avatar {
    display: block;
    overflow: hidden;
    margin: 0 -6px;
    width: 56px;
    height: 56px;
    border: #fff 2px solid;
    border-radius: 100%;
    transition: all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99) 0.7s;
  }

  @media (min-width: 800px) {
    .author-list:hover .moving-avatar {
      margin: 0;
      transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    }
  }

  .author-name-tooltip {
    position: absolute;
    bottom: 105%;
    z-index: 999;
    display: block;
    padding: 2px 8px;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 0.2px;
    white-space: nowrap;
    background: $darkgrey;
    border-radius: 3px;
    box-shadow: rgba(39,44,49,0.08) 0 12px 26px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transform: translateY(6px);
    pointer-events: none;
  }

  .author-list-item:hover .author-name-tooltip {
    opacity: 1.0;
    transform: translateY(0px);
  }

  @media (max-width: 650px) {
    .author-name-tooltip {
      display: none;
    }
  }

  .reading-time {
    flex-shrink: 0;
    color: $midgrey;
    font-size: 1.2rem;
    line-height: 33px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
</style>

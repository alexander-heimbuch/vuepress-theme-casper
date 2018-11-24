<template>
  <section class="error-message">
    <h1 class="error-code" v-if="code">{{ code }}</h1>
    <p class="error-description" v-if="description">{{ description }}</p>
    <a :href="link" class="error-link" v-if="link">Go to the front page →</a>
  </section>
</template>

<script>
export default {
  props: ['code', 'description', 'link']
}
</script>

<style lang="scss">
  .error-message {
    text-align: center;
  }

  .error-code {
    margin: 0;
    font-size: 12vw;
    line-height: 1em;
    letter-spacing: -5px;
    opacity: 0.3;
  }

  .error-description {
    margin: 0;
    color: var(--midgrey);
    font-size: 3rem;
    line-height: 1.3em;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    .error-description {
      margin: 5px 0 0 0;
      font-size: 1.8rem;
    }
  }

  .error-link {
    display: inline-block;
    margin-top: 5px;
  }

  .error-template .post-feed {
    padding-top: 0;
  }
</style>

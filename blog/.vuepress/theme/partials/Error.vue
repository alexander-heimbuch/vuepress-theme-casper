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

<template>
  <transition name="preloader">
    <div class="preloader" v-if="loading">
      <div class="loading-animation">
        <div class="loading-animation-wrapper">
          <ul class="loading-animation-dots">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(['loading'])
  }
</script>

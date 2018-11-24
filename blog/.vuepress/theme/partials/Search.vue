<template>
  <div class="search">
    <input type="text" @input="searchInput"  :value="search" class="search-input" placeholder="Type to search" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState([ 'search' ]),
  methods: mapActions([ 'searchInput' ])
}
</script>

<style lang="scss">
</style>

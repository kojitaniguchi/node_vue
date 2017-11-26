<template>
    <div>
      <!-- <search></search>
      <card></card> -->
    </div>
</template>

<script>
import Search from './Search'
import Card from './Card'
// import { mapGetters } from 'vuex'
export default {
  name: 'timeline',
  // computed: {
  //   ...mapGetters([
  //     'gifs'
  //   ])
  // },
  components: {
    Search,
    Card
  }
}
</script>

<style>
  main {
    background-color: #f6f6f6;
    width: 100%;
    margin: 0 auto;
  }
  .page-content {
    display: flex;
    flex-direction: column;
  }
</style>
